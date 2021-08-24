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

## Architectural questions

- where is each account's data stored?
- how is this crawled?
- how can crawling and replication be decentralized/multi-centric?
