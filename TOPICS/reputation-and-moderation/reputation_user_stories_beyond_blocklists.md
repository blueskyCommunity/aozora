## Use Cases for Reputation Feed

There is a tendency of service providers to view reputation requirements thru the lens of blocklists, that is, preventing specific users from messaging on the platform.  While this is a valid use case, the purpose of this document is to outline IRL use cases that would benefit from decentralized reputation solutions.

Reputation management is a key driver of users to centralized platforms, from Upwork to AirBnb. Thus some simple use cases:

#### as a (potential) client/customer, I want to be able to
    - easily see and compare some sort of reputation score or summary for different providers
    - know if anyone in my social graph has recommended any of a given set of providers
    - provide a rating/recommendation for a provider either publicly or with privacy protection
    
While a widely used decentralized solution hasn't taken off yet, the above use case is fairly straightforward.  

Another area of reputation feed is in news and reporting, and in particular in sensitive areas. Again there are some fairly clear user stories

#### as a reader, I want to be able to
    - see and compare a reputation score for sources and reporters
    - distinguish between first hand reports, reporting, and research/analysis/judgements 
    - know if anyone in my social graph is connected to sources and if they have validated them
    - offer my judgements/analysis of an article or source
    - view posts that are filtered by credibility/reputation
    - traverse sources/analysis relating to posts

#### as a reporter, I want to be able to
    - protect my sources - to report that a fact has a first hand source without revealing who
    - indicate when I am staking my reputation on a story, and when I am merely writing opinion 
    - indicate the identify of a source if it is public
    
#### as a first hand reporter, I want to be able to
    - discover a trustable reporter 
    - safely send information to a trusted reporter
    - securely provide an indication of identity to a trusted reporter
    - have a way to have privacy-protected credibility (pseudonymity)
    - directly publish information pseudonymously
    - indicate first-hand corroboration or contradiction to an existing post  
    
#### as an analyst, I want to be able to
    - aggregate all posts on a specific subject
    - aggregate posts from a specific source
    - traverse the social graph to generate reputation scores of entities
  
A concrete example may help to demonstrate the importance of some of the above.

A volunteer in contact with a source in a given country received a list of 100 or so protestors killed by government-associated militias.  The person providing the list needs to have their identity protected.  Each specific death may be represented as an individual post with a name, date and brief narrative.  The reporter (poster) would be the volunteer, and others who are familiar with the situation may provide a judgement on the credibility of both the post and the reporter.  Ideally even those on the ground would be able to corroborate the facts around each event either securely and with pseudonymity, or by communicating securely with another volunteer who could add their narrative. 

Another use case is around the assertion that company X does or does not use forced labor in manufacturing their products. The proof of this assertion is complicated by the fact that laborers in the factories of subcontractors may not be able to communicate over any kind of secure channel, and generally have their communication monitored.  Yet company X wishes to provide compliance information that their products are not produced by such labor.  If an endpoint is provided for workers to assert that they are freely choosing their position, it is likely that workers would be coerced to do so. (Likewise, the fact that the communication itself is monitored is difficult to prove)  In order to truly validate the lack of coercion it is necessary to provide a social proof that workers are able to regularly communicate with their families including those in other countries. If a social graph proof were required by the client on top of the subcontracting chain, this would cause the families and friends of workers to have real leverage to change conditions.

These user stories may inform the structure of a decentralized reputation feed such as that proposed in [reputation_feed.md](/design/architecture/reputation/reputation_feed.md)