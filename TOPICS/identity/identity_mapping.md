# Identity Mapping Proposals

The premise is that there are billions of existing social-media identities and they aren't going away. Bluesky needs to allow 
people to use them as-is, but it would be beneficial, for purposes of curation and reputation, to map them together to 
allow identities to extend across the whole Bluesky ecosystem.

Clearly this must be voluntary; people will have multiple existing identities that they must keep entirely unrelated for reasons
of safety, privacy, or other perfectly good reasons that they should feel no pressure to disclose. On the other hand, some users,
particularly those with large audiences, may choose to map their existing social-media identities together.

This page exists to capture proposals to accomplish mapping between existing social-media identities.

## WebFinger-based Mapping

This relies entirely on existing well-debugged technologies. The idea is that if you have a social-media identity that looks 
like `alice@example.com` then you could fetch `https://example.com/.well-known/webfinger/resource=acct:alice@example.com`
and get a JSON document that would include something like 

```json
  {
    "links": [
      { 
        "rel": "bluesky-identity",
        "href": "abtoklas@example2.com"
      },
      {
        "rel": "bluesky-identity",
        "href": "inwonderland@example3.com"}
    ]
  }
```

So, given any social-media handle, you could retrieve its webfinger and look for `bluesky-identity` links to find other mapped
identities, then transitively fetch those, and build a list of mapped-together identities. Then, for example, if I wanted to
"globally follow" `alice@example.com` the list would include the `example2.com` and `example3.com` identities plus any others
that those identities' WebFingers linked to. 

### Pro

* The required standards specs already exist and are extremely developer-friendly. 
* No central infrastructure required.

### Con

* All social-media providers who wanted to join the Bluesky ecosystem would have to implement and support WebFinger.
* Your identity and your identity mappings would remain dependent on the good graces of one or more social-media providers.

## Public-Key-based Mapping

If your goal is to map `alice@example.com` and `abtoklas@exmple2.com` together, assuming you have access to both accounts,
you create a public/private keypair and two nonces, and sign the nonces with the private key.  Then you discard the private 
key and post one nonce and signature to each of the social-media accounts. 

Then one or more parties operate a one or more public shared immutable ledgers, to which the URLs of the social-media posts 
are posted, and by scanning the ledger anyone can keep track of who's mapped to who. 

### Pro

* The technique was worked out by keybase.io back in the day and works pretty well.
* This doesn't in principle require co-operation from any social-media providers.

### Con

* Someone has to own and operate the ledger.
* Since the social-media posts used to prove the mapping are mutable, the ledger operator would have to validate all the proofs before updating the ledger, which means that either they must be generally trusted, or some other mechanism would be required to achieve a zero-trust ledger - perhaps blockchain.

## What's a "Bluesky Identity"?

Neither of these approaches rely on the existence of a higher-order "Bluesky Identity" which is independent of any social-media 
provider. On the other hand, both could support it.  If you have a way of creating and representing Bluesky Identities, you could
include them in the WebFinger link network, and attach them to the nonce/signature social-media posts.
