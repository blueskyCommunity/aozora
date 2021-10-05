# Why talk about the anatomy of a social network?
In the erly days of networking each network was constructed
as its own monolith. This lead to many networks that could not
talk to eachother. To enable networks to interoperate we needed
an understanding of the anatomy of a network in order to design 
interoperability at the most apropreat level. 

Most students of networking are at some point introdused to the osi
seven layer networking model

  7. Aplication
     *  The user spase layer for aplication spesific logic
     *  https for the web 
  6. Presentation
     *  A translation layer for smothing difreces between envierments e.g. CR, LF, CR LF for line endings
  5. Session
     *  The layer that maintaines state and enpoint identity
  4. Transport
     *  Put the pacets into an end-to-end format, fix errors, direct to corect end aplication
     *  tcp/udp for the internet
  3. Network
     *  dealing with the routing and delivery of Packets to the corect network interface
     *  IPv4, IPv6 for the internet 
  2. data link
     *  Deals with the Frames and medea acsess control. Ensures that the bits can be devided into pakets
        Prevents transmiters from interfering with eachoher.
     *  Ethernet for most curent networks. (Wifi, Copper Ethernet, Fiber Ethernet)
  1. physical 
     *  The acual phisical fanamana that can be interpreated as bits.
        Radeo waves for WiFi and Satolite.
        Light for fiberoptics poit to point freespace microwave.
        Electrisity for CAT6 and Twisted pair.
 
 This enabled the internet and the web to be born. If we want to move from a number of incomatible
 social networks to a social internet we need to identify and seperate the vereus layers of a 
 social network so we can build and advocate protocal experimentation and standerdisation on
 each of the layers while maintaing the ability for each aplication to inovate ontop of the 
 common protocals. Standerdise where we see value in standers and compeate evrywere else.

# Layers
## Durability
Ther is not much to say here other then the fact that a social network is based on the
sharing of content so that content must be stored somewhere.
Wether that is a rotating tape, disk, flash, or nvme in not particularly interesting. 
Even wether it is in a object store, filesystem, or databace is not that intresting. 
The main thing we need to define in the durability layer is the pattern for maintainging 
the data. Some durability protocals will try to implement permanent stroeage that alwase 
repares faster then it degrades. Others will be opertunistic chaching that try to be helpfull
but may deleate anything at any time. Some will be First in first out. Some maintaining for a 
fixed time or a fixt amount of space. Some will try to save popular content. Some will
save content on the verge of extinction. 
It is these policies that will define the durability laer not the method of persstance.

## The document web
Soital netwoks are made of a set of artofacts. Whale the value in the network is in the 
conections between users the the network itself is conections between documents.
A post is a document created by a user but that is not the only thing that is a document.
A comment on that post is itself a document that refers to the origanal post.
Even thing like reactions which we may not think of as a document can be vewed that way.
"User 1 has liked post 42"
"User 2 has 😂 ed post 42"
A post having millons of likes is just an agrogation over the individual likes. While for 
efitioncy we would want materealised views and indexes over the documents these documents
are the ground truth of a Soital netwok and if we wish to have a Soital internetwok
we are going to need networks to understand eachothers documents at least up to a point.
Profile pages are documents.
List of users are documents.
polls and votes are documents.
Calendar events are documents.
RSVPs are documents.
In a public leger system even a payment or asset transpher is just a type of document. 

The goal of desighning a good protocal at the document layer is desiding what should be 
defined in the protocal. What in the standerd library of scehmas. 
What in a public repository of schemas.
And what in local scopes to the aplications themselves.
Even once we have a solid protocal at this level the scehma repositories will 
never be done alwase evalving to the needs of curent aplications.

## The content channels
The documents may be the truth of the Soital netwok but without a way to discover 
relovint documents it is not useful. There are two main classes of content
Channels athoratative and non-athoratative

### athoratative
An athratative channel is one where we learn atrobutes about the document
soley from the sorce of the docuent. If I get a user profile from https://facebook.com
I know it is a facebook user. If I get it from https://twitter.com I know it is a twitter user.
To continue to trust these documents I would need to add metadata to the retreved document with
the provanence of that document in order to propogate the trust forword in time.

### non-athoratative
The second type of sorce is a non-athoratative one where the meare fact of retreval dose not 
hold trust value.
If I am preforming a search for all post by user 18 and a random cache gives me a doc that 
clames to be from user 18 I get no trust. The cache may have made it up or an attaker may
have put it in the cache in order to get the cache to distribute lies.

This is important as most servers in the world will not be the athoratative sorse.
I you needed to get content from an athoratative sorce the athoraty would need
highly avalible servers. I you can pull content from any cache the athratative 
sorce just needs to publish to a cache and the they can do the content delivery.
This is potentaly far cheaper and more robust.

Do to this any document that arives throu a non-athoratative chanal but be vouched for.
This can be done criptographicly in two ways. 
A document that can be authenticated contains the hash of that document
or the document can be signed by a key that has been authenticated.

If we have a root of trust then we can use that trusted document to 
authenticate other documents. 


## The Identifyers
We have discribed many types of documents and chanals but
they only make sence if we have identifyers.
"User U18 comented on post P36 " only makes sence if we have a way to identify
user U18 and post P36 we must have some symbolic representation of entitys in 
the system.
In a centrolised system like twitter or facebook they can just assign unique IDs
using a uniqe collom in a databace.
For systems like email we partition the space with "user@example.com"
the controler of example.com is responsible for garantying there is only one "user@"
but it will not conflict with "user@example.net"
it is the DNS systems responsibility to keep domain names unique.

In a socal internetwork we would have difrent protocals at this layer for identitys
for example a DID did:protocal_1:path/to/name
may be difrent from did:protocal_2:path/to/name
some protocals will use partioned namespasing like DNS did other will use hash, and keys.
In the end we need some kind of system for identifying entatys with strings
that can be included in documents and bound to authenticted chanels, hashs, or keys.

## Conclutions
By braking the problem of a sotal internetwork into layers we are able
to invoate indelendantly and build protocals at each layer that work 
with the others. while this is likly to folow the path of the internet and 
have one or a small number of dominant protocals at any one layer 
the lexability that comes with decompation make it far more likly that
we get a truly interoperable sesanable furtue of sotiol networking
* Durability layer
* document layer
* channels layer
* Identifyers layer
