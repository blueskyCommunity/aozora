# storage-and-discovery
How is data made both durable and retrievable?
 
## ephemeral vs durable content
Any peace of content in a distributed system is subject to the loss of the node that is storing it.
 
 
### Durable Data
In order to protect against this loss we store redundant data in the system so we can survive nodes leaving the network. Historically we have stored f+1 copies where f is the number of node failures we wish to be able to survive in the time between repairs. For example in order to be able to service 2 node exits we store three copies of the data.
 
#### Replication
Under replication there are f+1 copies maintained.
The data in the system is allocated into blocks.
For small values they combined to form blocks.
For large values they are broken down to form blocks.
Each block must have a way to map it to f+1 nodes that
must store a copy of the block.
 
If we use 64 MiB blocks and want to withstand 2 failures
then each block will consume 192 MiB of durable storage.
For a storage magnification of 3

This replication for durability should not be confused with caching
which is used to lower latency on reads and increase scale. Whether the authoritative
store is replicated or ECC caching will be available
as a mitigation for high lode or latency sensitivity.

 
#### Error Correction Codes
Under ECC the data in the system is allocated into block groups.
For small values they combined to form block groups.
For large values they are broken down to form block groups.
 
Each block group consists of n blocks k of those n blocks are
sufitant to regenerate all the data
 
If we use a 10/14 reed solomon code and 64 MiB blocks
we will use 896 MiB to store 640 MiB of data for a
storage magnification of 1.4.
We benefit in that we use less durable storage then the
3 copies scheme and gain more resilience as 3 copies can
only withstand 2 failures before repair and 10/14 RS codes
can withstand 4 failures before repair.
This comes at a cost in that repairs are now much more expensive
where as before a repair was just copying 64 MiB from one of the remaining
nodes to the replacement node. Repairing the RS block group requires bringing
10 blocks 640 MiB of data together to regenerate the lost blocks. Also during the
repair process the 3 copies scheme can keep serving reads.
Once the RS code loses a block that block can not be read until repair is
performed. potentially leading to long latency on a read of a damaged
block group.
 
 
### Materialised Data
Some classes of data don't need to be stored in a redundant way due to the fact that it is dependent on the durable data. e.g. the thumbnails could be regenerated from the full images and so don't need high reliability.
 
The persisting of materialised will often be efitant but is not technically required. For example if we stored the complete transaction log of a database then we could in technical replay all of the transactions from the beginning to recover the state. If the storage system wants to delete the current state it is free to do so without being considered data loss.
 
### Ephemeral Data
Some content is truly ephemeral like the streaming data.
Video / Audio / Screen sharing / Streaming data
 
This data need not be stored. At the moment of creation the content is sent down the multicast distribution tree once sent there is no more need to store. The nodes in the multicast distribution tree are likely to cache the data in memory until its downstreams are notified or the ttl expires.
While there is no need to store this kind of content durably there is no way to prevent
members of the distribution tree from retaining the data if they so choose
If the data is intended to be restricted in time it needs to be encrypted and the key
shared only with parties that can be trusted to delete the key at the agreed upon time.

## Locating the stored blocks
### Commercial object stores
### Federated Centralized stores
### Distributed Hash Tables

## Indexing / Search
