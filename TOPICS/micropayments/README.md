# Micropayments

Interoperable micropayment systems, with the goal of being minimal overhead, rent and take.

## Focuses

- Transaction fees
- Transaction capacity
- Liquidity (i.e. can you buy easily on exchanges)
- Regulatory (backed by non-profit that can lobby for regulation/acceptance, or institutions backing it i.e. CoinBase)
- Interoperability
  - are DeFi/atomic swaps possible?
  - are stable coins planned?

## Resources

- TODO


## Existing Solutions & Requests

**name (of existing solution):**
- Bitcoin – BTC

**underlying tech:**
- C++
- Python
- C

**used-by:**
- CoinBase
- PayPal (buying/selling + transactions in the US, if logged in to acc?)
- Substack
- Microsoft
- Wikipedia
- Save the Children
- Starbucks/Whole Foods?

**approx num users:** 
- ~750k active addresses a day (on-chain, excluding Lightning Network?)

**how-to-use:**
- SPV Client, or full node wallets
  - Electrum Wallet
  - Unstoppable Wallet
- Payment processor:
  - BTCPayServer

**reasons:**
- for: censorship resistant
- for: wide adoption
- against: low block size (transaction/TPS throughput)
- against: highish transaction fees at times
- against: high block size
- against: Lightning Network issues
  - Need to “stake” BTC to open/close a channel
  - Fully self-custodial usage with no data leakage requires a lightning watchtower
  - Security issues – seems to be ironed out by now??

**requests:**
- self-custodial lightning network solutions
- atomic swaps with other chains

---

**name (of existing solution):**
- Bitcoin Cash – BCH

**underlying tech:**
- C++
- Python
- C

**used-by:**
- CoinBase
- PayPal (buying/selling + transactions in the US, if logged in to acc?)
- Microsoft
- Wikipedia

**approx num users:**
- 100k active addresses a day – on-chain only
- ~84,393 transactions a day

**how-to-use: [can it be used by other stacks/platforms?  how?]**
- Electron Cash
- Unstoppable Wallet


**reasons: [for use/not use]**
- for: High adoption (PayPal/Microsoft)
- for: Very cheap fees
- for: Some limited privacy protection from chain analysis (CashFusion), assuming best practises kept (i.e. don’t spend change or mix coins)
- against: Bad history with forks (BSV with 128MB block sizes and 51% attacks) and BCHA/eCash causing price and market instability
- against: High block size

**requests: [what would be good to do next with this method]**
- payment processor (i.e. BTCPayServer port)

---

**name (of existing solution):**
- Zcash

**underlying tech:**
- Rust
- C++
- Python
- C

**used-by:**
- CoinBase
- Gemini
- Wikipedia

**approx num users:**
- ~5,778 transactions a day

**how-to-use: [can it be used by other stacks/platforms?  how?]**
- zecwallet lite (light client)
- nighthawk (light client)
- Unstoppable Wallet (light client)


**reasons: [for use/not use]**
- for: Very cheap fees
- for: Privacy baked in, no chain analysis if using shielded transactions
- for: Fast block time/transaction speed
- for: Regulatory friendly and KYC compatible with viewing keys
- for: e2e memos built into protocol: can be used for IPFS pointers, etc (e.g. NFTs?)
- for: Block reward tax (ECC/Zcash Foundation/dev fund)
- against: Block reward tax
- against: Little to no 0conf usage

**requests: [what would be good to do next with this method]**
- Layer 2 with privacy (zkChannels/Bolt Labs) for transaction speed and off-chain scalability
- payment processor (i.e. BTCPayServer port)
- atomic swaps

---

**name (of existing solution):**
- Ethereum – ETH

**underlying tech:**

-

**used-by:**

- 

**approx num users:**
- ~1.2m transactions a day

**how-to-use: [can it be used by other stacks/platforms?  how?]**
- Metamask
- Unstoppable Wallet

**reasons: [for use/not use]**
- for: Smart contracts
- against: High gas fees (variable depending on transaction speed and smart contract data usage)

**requests: [what would be good to do next with this method]**
- payment processor (i.e. BTCPayServer port)

---

**name (of existing solution):**
- Monero

**underlying tech:**

- 

**used-by:**

- 

**approx num users:**

-

**how-to-use: [can it be used by other stacks/platforms?  how?]**
- Monero GUI Wallet (antivirus issues due to integrated miner - since full node)
- CakeWallet

**reasons: [for use/not use]**

**requests: [what would be good to do next with this method]**
- atomic swaps
- payment processor

---

**name (of existing solution):**
- Solana

**underlying tech:**
- Rust
- TODO

**used-by:**
- USDC

**approx num users:**

- 

**how-to-use: [can it be used by other stacks/platforms?  how?]**

- 


**reasons: [for use/not use]**
- for: Low fees
- for: High transaction throughput
- against: Very high hardware requirements for validators (128GB RAM)

**requests: [what would be good to do next with this method]**

- 

