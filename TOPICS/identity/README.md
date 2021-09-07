# blueSky notes: identity channel

editors: Juan Caballero (CET)

## Other channel docs

[reputation + moderation](https://hackmd.io/_IDvR4iDRI-cGzpV51ahAQ)

## Resources

[Identity Solutions](https://gitlab.com/bluesky-community/flow/-/blob/main/TOPICS/identity/SOLUTIONS.md)

Some references:

Decentralized Identity

- A good [primer](https://spruceid.dev/docs/primer) on the subject
- The Decentralized Identifier Specification, aka the "[DID-core spec](https://www.w3.org/TR/did-core/)"" at W3C
- The Verifiable Credentials Data Model Specification, aka the "[VC spec](https://www.w3.org/TR/vc-data-model/)"
- The Decentralized Identity Foundation's ["FAQ"](https://identity.foundation) (more of a knowledgebase, really) - a very technical resource, good for navigating the existing libraries, standards, and pre-standards specifications and OS implementations

#indieweb and decentralized web

- Ben Werdmüller's 2021 blog post [The Return of the Decentralized Web](https://werd.io/2021/the-return-of-the-decentralized-web)

ActivityPub, Mastodon, et al.

- Social Web Incubator CG at W3C [homepage](https://www.w3.org/wiki/SocialCG) - the folks behind the [ActivityPub](https://www.w3.org/TR/activitypub/) and [Activity Streams](https://www.w3.org/TR/activitystreams-core/) specs

Privacy Engineering more generally

- Contextual Integrity - [wiki page](https://en.wikipedia.org/wiki/Contextual_Integrity), [book](https://www.sup.org/books/title/?id=8862&bottom_ref=subject), and earlier [article](https://nyuscholars.nyu.edu/en/publications/privacy-as-contextual-integrity)

## Core issues

- do users self-register?
- are accounts bound by one or more terms of service?
- who manages accounts, and to whom are they responsible, accountable, and/or liable?
- how (and at what layer/points in the architecture) is traffic governed and/or regulated?
- can users opt in to linking their accounts to external authorities?
  - If so, which authorities, and who decides when to add or substract authorities individually or in classes?

## Zooko's triangle _(Renamed)_
Zooko Wilcox-O'Hearn's triangle is the CAP theorem as applied to names.
```
                  Consensus free
                         ▲
    Mutually exclusive        Arbitrarily selected
```
### Definitions
* __Consensus free__
  * Zooko called this **Decentralized**
  * CAP theorem called this **Availability**
  * This is the property that names can be generated locally without the 
  need for a consensus algorithm.
* __Mutually exclusive__
  * Zooko called this **Secure**
  * CAP theorem called this **Consistency**
  * No to identities can be the same
  * If a name identifies one entity it does not identify any other entity
  * if id(a) = id(b) then a = b
  * this can be accomplished with
    * Large random numbers
    * A consensus algorithm
    * A centralized authority
* __Arbitrarily selected__
  * Zooko called this **Human-meaningful**
  * CAP theorem called this **Partition tolerance**
  * The controller of the identity may choose an arbitrary value 
  from the domain as the ID
    * Domain here may be defined as available domain in order to make mutually exclusive names valid under this category.

### Implementable pairs
* __Consensus free, Mutually exclusive__ (Probabilistically CA system)
  * public key
  * hash of public key
  * hash of certificate
  * Why doesn't this violate the CAP theorem?
    * These names are consistent only insofar as there is not a random coalition
  between the names. If we had a name domain of four possible domains and five
  named things we would get a coalition and not be consistent but if we have 
  2^64 (18,446,744,073,709,551,616) names and five things a random choice of
  name would be extremely unlikely to collide and we have our consistency.
    * These names are Available as random numbers can be generated any time anywhere
  with no need to coordinate with anything.
* __Mutually exclusive, Arbitrarily selected__ (CP system)
  * centralised naming authority
    * email addresses
    * domain names
    * telephone numbers
    * social security numbers
  * names on a distributed leger (public or community)
    * Verus
* __Arbitrarily selected, Consensus free__ (AP systems)
  * Display names that allow colitions
  * Legal names

## Architectural questions

- where is each account's data stored?
- how is this crawled?
- how can crawling and replication be decentralized/multi-centric?
