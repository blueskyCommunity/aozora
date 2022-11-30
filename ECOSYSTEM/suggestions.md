The [Ecosystem Overview](https://gitlab.com/bluesky-community1/decentralized-ecosystem/-/blob/master/README.md)
will need to evolve over time, and there are also many smaller projects that may not belong there but deserve space in a larger view.

We have not yet decided exactly how to structure updates, but would like to collect suggestions and suggested additions here.

Please submit your suggestions as PRs to this doc - thanks

## Protocols

### TMTP

For a safer, better, decentralized email network.
The [__mnm open source project__](https://mnmnotmail.org) implements both client & server.

TMTP has two major goals:

1. To provide a far safer correspondence model, where you:
   + choose the organizations/sites that relay your correspondence
   + select which members of a site can correspond with you
   + always know from which site a message originated
   + can block anyone with whom you’ve made contact
   + may leave a site and never see traffic from it again

2. To offer capabilities missing in traditional email, including:
   + message formatting & layout via Markdown (aka CommonMark)
   + hyperlinks to messages and other threads
   + hashtags and private tags
   + slide deck layouts
   + data-driven charts & graphs
   + forms/surveys whose results are collected into tables

Unlike most messaging protocols, TMTP does not define a universal identity scheme, 
but can leverage any third party identity or authentication credential for registration/login.

### Handshake

Contrary to popular belief, the DNS (Domain Name System) is quite decentralized and resilient. Unfortunately, certificate authorities made themselves middlemen and have been prone to hacks and general disruption to the internet at large.

[Handshake](https://handshake.org) fixes this by moving security to the blockchain and existing protocols like DANE and DNSSEC. As a P2P naming system that sits atop the DNS, Handshake is well suited to be the infrastrucutre for the next stage of the internet, while preserving existing functionality with how the web works today — in other words, Web2 domains still work. Interoperability is the key to widespread usage.
