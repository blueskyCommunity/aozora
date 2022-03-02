## Webfinger over Email

Extracted from a discussion in the #identity channel

if a user gets an email titled 
GET /.well-known/webfinger?resource=acct%3Abob%40example.com
There email client should automatically reply with a web finger document 
Content-Type: application/jrd+json

     {
       "subject" : "acct:bob@example.com",
       "aliases" :
       [
         "https://www.example.com/~bob/"
       ],
       "properties" :
       {
           "http://example.com/ns/role" : "employee"
       },
       "links" :
       [
         {
           "rel" : "http://webfinger.example/rel/profile-page",
           "href" : "https://www.example.com/~bob/"
         },
         {
           "rel" : "http://webfinger.example/rel/businesscard",
           "href" : "https://www.example.com/~bob/bob.vcf"
         }
       ]
     }

possibly including their public key.
https://datatracker.ietf.org/doc/html/rfc7033 
rfc7033
WebFinger (RFC )
AaronDGoldman — 01/17/2022
Now a site I join can let me log in using only my email address and the key that came back from the web finger email. Done
The browser could even send a signed nonce with every http request with that it sends.

# From Ian:

This only sounds interesting to me if it includes (MUST) the person's public key, and an identity link proof connecting that keypair to that email address. Then it becomes self-certifying. Even better if the incoming email includes a nonce to sign as well to stop replay attacks after domain/email owner changes, or the datetime is included in what's signed.
