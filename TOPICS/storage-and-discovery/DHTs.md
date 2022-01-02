## Decentralized Hash Tables

### Bigtable as a DHT

It is layers. There is a DHT with 64 megabyte blocks. The tabular data is in column store format in a LSM tree. 
With a 2^21 fanout the blocks are never more than 3 deep. All nodes have the root. So never more then 2 network hops. 
They keep the 2nd layer in ram so no more than 1 seek per block. 

And since each block is amortised across the many rows in a column to reach 64 MiB compressed it is very fast at table scans.

This is very different then a ipfs dht with far less fanout and one object retrieved per DHT lookup with poor amortiseation. 
