# Protocol Benchmarks

This document is a first pass at providing a place to collect and compare the benchmark information on various storage protocols for use in decentralized public conversation (DPC) applications such as bluesky. The community may decide at some point in the future to have this data reside elsewhere.

# Testing Philosophy

Performance benchmarks should ideally test real-world end-user experiences. This is not the place for "my consensus finality is faster than yours" quibbles on same-region Infura nodes. Perceived user value matters.

"**Real-world**" means networking calls have to be made, not mocked, not unit tests. Data has to be random, not fixed or sequential.

"**End-user**" means an app has to emulate something a user would interact with, like loading a chat history or video streaming. Actual UI is not needed though.

# Testing Suite

Because real-world end-user performance tests can be hard to craft, we recommend using the [PANIC](https://github.com/gundb/panic-server) testing framework. It integrates with puppeteer and popular assertion libraries and automatically spawns hundreds of browsers or processes across one or many machines with a common network endpoint to coordinate distributed load or correctness tests.

If you have a testing suite developed for making decentralized apps, please add it here.

# Results


## Chat dApp

| Protocol  | Total Chats | Chats / Sec | Machine(s) Spec | Demo | src | run |
| - | - | - | - | - | - | - |
| IPFS | | | | | |
| SSB  | | | | | | |
| GUN | `100K` | `3K/s` | `2 Chrome, 4GB 1.6GHz i5 2015 Macbook Air` | [video](https://twitter.com/marknadal/status/1402406180576665600) | [code](https://github.com/amark/gun/blob/master/test/panic/chat.js) | `npm install gun mocha && cd node_modules/gun && mocha test/panic/chat.js ` |
| Hyper | | | | | | |
| Webtorrent | | | | | | |
| ... | | | | | | |

## Bank Transaction

| Protocol  | Machine(s) Spec | Total Chats | Loaded / Sec | Demo | src | run |
| - | - | - | - | - | - | - |
| Ethereum | | | | | |
| Solana | | | | | |
| ... | | | | | | |

# By Protocol

## IPFS Performance

IPFS has been discussed as a storage layer for decentralized messaging

Concerns have been brought up over performance

This document is to capture in a structured way the points raised and any benchmarking or proofs of perforamance in the wild

### Conversation Participants / Interested Parties

- @WClayFerguson#4667
- @AaronDGoldman#8819
- @Matthew | Streamr 🐺#1614
- @ianopolous#1330
- @mogs#3920

### Benefits of using IPFS in a decentralized public conversation

### How would we envision it being used? 
(would there be a content-hash of the entire message envelope?)
would it be used only for larger files such as video?

### Performance concerns
storage overhead

retrieval times

### Benchmarking

where are the benchmarks of IPFS performance?

## GUN

## Webtorrent

## SSB

## Hyper
