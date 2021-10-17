# Why talk about the anatomy of a social network?
In the early days of networking each network was constructed
as its own monolith. This lead to many networks that could not
talk to each other. To enable networks to interoperate we needed
an understanding of the anatomy of a network in order to design
interoperability at the most appropriate level.
 
Most students of networking are at some point introduced to the osi
seven layer networking model
 
 * layer 7. Application
    *  The user space layer for application specific logic
    *  https for the web
 * layer 6. Presentation
    *  A translation layer for smoothing differences between environments 
       e.g. CR, LF, CR LF for line endings
 * layer 5. Session
    *  The layer that maintains state and endpoint identity
 * layer 4. Transport
    *  Put the packets into an end-to-end format, fix errors, 
       direct to correct end application
    *  tcp/udp for the internet
 * layer 3. Network
    *  dealing with the routing and delivery of Packets 
       to the correct network interface
    *  IPv4, IPv6 for the internet
 * layer 2. data link
    *  Deals with the Frames and media access control.
       Ensures that the bits can be divided into packets
       Prevents transmitters from interfering with each other.
    *  Ethernet for most current networks. 
       (Wifi, Copper Ethernet, Fiber Ethernet)
 * layer 1. physical
    *  The actual physical phenomena that can be interpreted as bits.
       Radio waves for WiFi and Satellite.
       Light for fiber optics point to point freespace microwave.
       Electricity for CAT6 and Twisted pair.

This enabled the internet and the web to be born.
If we want to move from a number of incompatible social networks to a
social internet we need to identify and separate the various layers of a
social network so we can build and advocate protocol experimentation and
standardization on each of the layers while maintaining the ability
for each application to innovate on top of the common protocols.
Standardise where we see value in standers and compete everywhere else.
 
# Layers
* Durability layer
  * The policies around ephemerality and permanence of content
* Document layer
  * The schemata for content in the network.
  * The descriptions of valid documents in a network or between networks
* Channels layer
  * The information retrieval technologies to map document identifies to
    documents.
  * The information retrieval technologies to search documents
* Identifiers layer
  * The schemata for document identifiers

## Durability
There's not much to say here other then the fact that a social network is
based on the sharing of content so that content must be stored somewhere.
Whether that is a rotating tape, disk, flash, or nvme is not particularly
interesting. Even whether it is in an object store, filesystem, or database is
not that interesting.
The main thing we need to define in the durability layer is the pattern for 
maintaining the data.
Some durability protocols will try to implement permanent storage that always
repairs faster than it degrades.
Others will be opportunistic caching that try to be helpful
but may delete anything at any time.
Some will be First in first out. Some maintaining for a
fixed time or a fixed amount of space.
Some will try to save popular content.
Some will save content on the verge of extinction.
It is these policies that will define the durability layer
not the method of persistence.
 
## The document web
Social networks are made of a set of artifacts. 
While the value in the network is in the
connections between users of the network, 
the network itself is the connections between documents.
A post is a document created by a user 
but that is not the only thing that is a document.
A comment on that post is itself a document that refers to the original post.
Even things like reactions which we may not think of as a document
can be viewed that way.
"User 1 has liked post 42"
"User 2 has 😂 ed post 42"
A post having millions of likes is just an aggregation over the individual likes. 
While for efficiency we would want materialised views and indexes over 
the documents these documents
are the ground truth of a Social network and if we wish to have a 
Social internetwork we are going to need networks to understand each other's
documents at least up to a point.
Profile pages are documents.
List of users are documents.
polls and votes are documents.
Calendar events are documents.
RSVPs are documents.
In a public legger system even a payment 
or asset transfer is just a type of document.
 
The goal of designing a good protocol at the document layer is deciding:
 What should be defined in the protocol?
 What should be defined in the standard library of schemas?
 What should be defined in a public repository of schemas? 
 What should be defined in local scopes to the applications themselves?
 
Even once we have a solid protocol at this level the schema repositories will
never be done, always evolving to the needs of current applications.
 
## The content channels
The documents may be the truth of the Social network 
but without a way to discover relevant documents are not useful.
There are two main classes of content
Channels authoritative and non-authoritative


#### **Note**
Authoritative and non-authoritative here being the
information security concept of authoritative meaning
that the author is known. If a document is signed by a particular key
or provided by a particular domain that binding is authoritative but
has no impact on whether the information is true or trustworthy.
Only the author is being asserted no more.
https://en.wikipedia.org/wiki/Information_security


### Authoritative
An authoritative channel is one where we learn attributes about the document
solely from the source of the document.
If I get a user profile from https://facebook.com
I know it is a facebook user. 
If I get it from https://twitter.com I know it is a twitter user.
To continue to trust these documents after I save them,
I would need to add metadata to the retrieved document with
the provenance of that document in order to propagate the trust forward in time.
 
### Non-authoritative
The second type of source is a non-authoritative one where the mere fact of
retrieval does not hold trust value.
If I am performing a search for all post by user 18 and a random cache gives
me a doc that claims to be from user 18 I get no trust.
The cache may have made it up or an attacker may
have put it in the cache in order to get the cache to distribute lies.
 
This is important as most servers in the world will 
not be the authoritative source.
If you needed to get content from an authoritative source the authority
would need highly available servers.
If you can pull content from any cache the authoritative
source just needs to publish to a cache and then
they can do the content delivery.
This is potentially far cheaper and more robust.
 
Do to this any document that arrives through a
non-authoritative channel must be vouched for.
This can be done cryptographically in two ways.
A document that can be authenticated contains the hash of that document
or the document can be signed by a key that has been authenticated.
 
If we have a root of trust then we can use that trusted document to
authenticate other documents.
 
 
## The Identifiers
We have described many types of documents and channels but
they only make sense if we have identifiers.
"User U18 commented on post P36 " only makes sense if we have a way to identify
user U18 and post P36 we must have some symbolic representation of entities in
the system.

In order to be able to re-post, react to, comment on, abuse report,
or talk about a document in any way each document will need
to have its own identifier.

In a centralised system like twitter or facebook they can just assign unique IDs
using a unique column in a database.
For systems like email we partition the space with "user@example.com"
the controller of example.com is responsible for guaranteeing
there is only one "user@"
but it will not conflict with "user@example.net"
It is the DNS systems responsibility to keep domain names unique.
 
In a social internetwork we would have different
protocols at this layer for identities
for example a DID did:protocol_1:path/to/name
may be different from did:protocol_2:path/to/name
Some protocols will use partitioned namespacing like DNS did,
others will use hash, and keys.
In the end we need some kind of system for identifying entities with strings
that can be included in documents
and bound to authenticated channels, hashs, or keys.
 
## Conclusions
By breaking the problem of a social internetwork into layers we are able
to innovate independently and build protocols at each layer that work
with the others. while this is likely to follow the path of the internet and
have one or a small number of dominant protocols at any one layer
the flexibility that comes with decomposition makes it far more likely that
we get a truly interoperable seasonable future of social networking
