# PowerID
A sketch for a power scaling but short id.
A 16 character base 32 id is a reasonable thing to type in.
A human can remember a small number of pids. 


powerID is an 80 bit base32 encoded ID
```
Base32alphabet = 234567abcdefghijklmnopqrstuvwxyz
```
Take the public key, or hash of certificate, and encode as base32
remove the leading `2`s in the public key.
Add 31-(the number of leading 2s) to the front as base32
the lower the final string alphabetically the stronger key
for things that need proof of work for id creation set a minimum key 
power
 
For example `2**30` keypair generation should produce a key with 30 leading zero bits that is 5 leading `2`s in the base32 string
so a minimum power of `u` would mean `2**30` keypair generations
if a attacker wanted to spoof your ID they would need to find an ID
of the same power as your key and the same 15 char (75 bit) sufix
so the spoofer needs to invest approximately `2**75` times the effort of the key generator. Approximately 38 billion billion times the effort.
So if we assume that the attacker spends billion times more resources and there are a billion attackers there is only a 3% chance one of them will spoof your ID.

To use your id the other party must know the 16 character base32 ID
They send you a nonce
You send back the full public key and the signed nonce,
and a nonce or your own
 	They send back their full public key 
and their signature for your nonce
 	You are now mutually authenticated If you did a diffyhelmon at the same time you also have a shared secret for perfect forward confidentiality

It is important to keep increasing the power requirements for PowerIDs as computers get faster. I recommend spending however much compute is equivalent to $0.01 that way if the attackers computers are a billion times cheaper than yours spoofing will cost 378 billion USD.

 vj2zjfgicatoaqq3  16 characters of base64 is not hard to store and can be typed in.
 note: what should the private entropy pool bit length be?
       if we expand the 80 bits to generate the keypair
       Pool entropy needs to be the max power of a Pid
`(5*31) prefix + (5*15) suffix`
The prefix char can represent 0 - 31 leading b32 chars
And each b32 char is 5 bits so a max entropy of (5 * 31)
The suffix is 15 b32 chars and so the fixed entropy (5 * 15) 
               (5 * 31) + (5 * 15) = 230 bit = 28.75 bytes = 46 b32
               so the private entropy needs to be 29 bytes
               or if we keep the pool in base32 46 chars
               s23pyxbgcfma3ja4dc3r45ghwhlaiecowlmgovy2zlgrk5
               less elegant then the 16 char IDs but not to bad
               16 char IDs | 46 char secrets

               powerID: vj2zjfgicatoaqq3
               secret:  s23pyxbgcfma3ja4dc3r45ghwhlaiecowlmgovy2zlgrk5
              
 choice 46 char random secret (230 bits of entropy)
 generate a public/secret key pair from the secret
 generate the PowerID from the keypair
 if the id is not of sofitant power pick a new random secret
 or run for 0.01 USD of compute and take your best key
 google cloud e2-micro $0.002513 / hour
 so we should use about 4 hours of compute to generate a PowerID
 this will scale over time

 save your powerID/secret pair
 when you need to use your powerID put in the secret and regenerate the keypair then use the key pair but don't leave the secret in memory

Example:
```python
import json
from hashlib import sha256
from base64 import b32encode, b32decode
from random import randint
trans = b''.maketrans(
 b'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
 b'234567abcdefghijklmnopqrstuvwxyz',
)
 
def s32encode(b):
 return b32encode(b).translate(trans).decode()
 
def int_to_32_bytes(key):
 return key.to_bytes(
     32 ,
     byteorder="big",
     signed=False,
 )
 
def power(key, bits=False):
   i = 0
   for char in key[:32]:
     if char == '2':
       i+=1
     else:
       if bits:
           i *= 5
           i += char <= 'j'
           i += char <= 'b'
           i += char <= '5'
           i += char <= '3'
       break
   return i
 
def power_to_prefix(power):
   return '234567abcdefghijklmnopqrstuvwxyz'[31-power]
 
def pid(key, full=False):
   pwr = power(key)
   id = power_to_prefix(pwr) + key[pwr:].rstrip('=')
   if full:
     return id
   return id[:16]
 
def derive_public_key(secret, salt):
   # mocked with identity
   return salt
 
def gen_id(public_key, public_key_salt, salt):
 certificate = json.dumps(
     {
         "type":"https://schema.org/pid",
         "public key": public_key,
         "public salt": public_key_salt,
         "name": "Alice",
         "revocation authority": "{pid}",
         "rotation authority": "{pid}",
         "salt": salt,
         "...": "...",
     },
     separators=(',', ':'),
     sort_keys=True,
 ).encode()
 hash = s32encode(sha256(certificate).digest())  # your hash function here
 return hash
 
 
def id_search(public_key, public_key_salt):
   best_hash = "~"
   best_salt = None
   for n in range(2**30):
       salt = s32encode(int_to_32_bytes(randint(0, 2**230-1)))  # 230 bits
       hash = gen_id(public_key, public_key_salt, salt)
       if hash < best_hash:
           best_salt = salt
           best_hash = hash
           print(power(best_hash, bits=True), pid(best_hash), best_hash, salt, n)
 
secret = "Really good passphrase?"
public_key_salt = s32encode(int_to_32_bytes(randint(0, 2**230-1)))
public_key = derive_public_key(secret, salt)
 
id_search(public_key, public_key_salt)
# power pid              best_hash                                                salt
# 22    vbazpoyabpjpebvn 2222bazpoyabpjpebvnxrrpq7bv6lls5pubxmpvgoxmr4gwmka72==== 22222elu3moalpjeyc72zqjsdqoapw3bki5z2e2r6fpbrmzoc5vk====
```

### Hash of certificate
  The power ID is a abridged Hash
  In the simplest case it can be the public key itself. There are however advantages to using a hash of a certificate instead of just the public key. For example if I generate a keypair and then create a certificate template 

```json
{
  "Public key":"{key}",
  "Salt":"{random}",
}
```
The user can provide the key and the server the salt trying many salts to find a Pid of the desired power without the user needing to do the work themselves.
I recommend targeting a 1¢ price for generation of the Pid.

#### A more complicated certificate may include delegation 
```json
{
  "itemtype":"https://schema.org/{scheme}"
  "Public key":"{key}",
  "Salt":"{random}",
  "Revocation key":"{key}",
  "Revocation list":"{URL}",
  "Rotation key":"{key}",
  "":"",
  "":"",
}
```
Many attributes will make sense to specify in the certificate at the birth of a PID. Far more will make sense to add as an assertion that makes reference to the PID. Even something as seemingly core as the public key itself could be bound as an assertion. If I have the relocation key specified but I don't provide a public key I can provide you with the certificate and a key rotation assertion that is signed by the key rotation key to declare the public key but it's bound with this PID. The owner of the PID can then use this key for the PID to make assertions about itself.


### Steps to prove a Pid:
Challenger sends a nonce.
Prover presents the certificate
The challenger hashes the certificate and makes the Pid. Then they test if it matches.
If the certificate has a public key
Prover signs the nonce with the public key.
If the certificate has an authority
Prover provides a delegation to a public key signed by the authority.
Prover signs the nonce with the public key.
If the certificate chain is valid and leads from a public key the prover controls back to the root who’s Pid is the Pid in question then the prover has proven control of the Pid.

#### Note: 
since a Pid is only 80 bits long they could be placed as the low 80 bit in IP addresses and used for a provable possession ipv6 address
```
(16 bit prefix to indicate a PidIP,
 32 bit location address for routing,
 80 bit Pid for prof of control)
```
2001::/16 /32 subnets assigned to providers,
they assign /48, /56 or /64 to the customer
This would require ISPs to use /48s to indicate the customer

## What to remember?
The controller of a pid needs to remember the pid and the secret.
They use the pid to look up the pid’s certificate.
They pull the public key salt from the certificate.
Use the secret and the salt to regenerate the secret_key.
They can now clear the secret from computer memory and use the secret_key.
`me:{pid}@example.com` 
