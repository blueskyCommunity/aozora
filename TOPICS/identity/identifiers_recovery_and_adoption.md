# Identifiers, Recovery and Adoption

## Methods of recovering/linking accounts

### Something you know
* Passphrase
* Pin
* recognise picture
### Something you have
* Device (cookie jar)
* Hardware token (number, bluetooth, USB)
* Authenticator tOTP app
* Contact with trusted parties (see 3FA Three Friend Auth)
### Something you are
* fingerprint
* face
* retina
* other biometrics


## Summary of Discussion

*****10/24/21*****

### Does one need 2FA when they own their private keys/passwords? 
-No, I should be able to login without any devices.
-Yes, passwords are not secure if not used correctly.

Ok, well what happens when a user loses their private keys - how to gain access to a system linked to their identity? Ex: losing your birth certificate.
-Import existing data into new entities (probably before the keys are lost though)
-Recover account w/ physical body as credentials (like passport, is a hassle?)

@Blaine: “a true decentralized system would require each individual maintain their own infrastructure”
-Sure, but people are fallible. Maybe incorporate some centralized services into a decentralized protocol?
-@mikestaub: “for actual mass adoption, we’ll need centralized services that have decentralized ‘escape hatches’
via the protocol… [that can] create DID for users and manage their ‘forgot password’ feature while still 
giving power users the ability to bring their own keys.” Kinda like how crypto exchanges store private keys.

@Blaine: “the reason I want decentralization is so that I can have fewer identities than I do now”
-Discord, Telegram, email, phone, Slack: they all do the same thing!

If a DID doesn’t work without a centralized system, it’s not decentralized.
-Is this an oversimplification?

TL;DR: we need better DIDs/DID integration + standardization for mass adoption to happen

*****10/25/21*****

### How will we form a consensus on a Bluesky identifier?
 * It’s more about creating interoperability between identifiers from different online communities.
 * Safe answer: use URI but don’t close door to future directions

### What does a Bluesky identifier even represent?

@AaronDGoldman: 3 “flavors” of names - address (unique, chosen), fingerprints (local, unique), tags (chosen, local)

### How do I link all my accounts?
 * Webfinger support from social media providers
 * ‘behind the scenes’ identity/address OR make a document linking accounts and share on protocol (document could live on IPFS or anywhere accessible with URL)
 * user stores own private keys OR delegates to service
 * QR code-DID? (Ex: snap codes)
