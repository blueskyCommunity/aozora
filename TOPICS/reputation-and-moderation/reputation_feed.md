## Assertions and Recommendations as a Reputation Feed

Given a decentralized system in which message authors have verified long-term identities, a feed of assertions or 'meta' messages should be useful to build a reputation or credibility system, that can itself participate in the feed.  See also [reputation user stories](/design/user_stories/reputation_user_stories_beyond_blocklists.md)

### Reputation 'Staking'

If participants are enabled to add rich assertions to the feed, some of those assertions can be said to 'stake' the reputation of the user.  For example, for a user to assert that they were the creator of an image, might on the one hand increase the reputation or rating of the post containing the image; but if a high-reputation source were to report that image as fraudulent and altered, that user would lose reputation and ability to impact ratings in the future. 

This is similar to how journalistic reporting works now, where credibility is a valued quantity and can be lost by publishing a fake story.  The journalist is 'staking reputation' on the story and is motivated to check their sources.  

In this system, users are incentivized to stake reputation because of the possibility of increasing post rank, but are highly penalized if a staked assertion is related to fraud by a trusted source.

Note, reputation may be used for other purposes than blocking and ranking messages; for instance, reputation in a scientific, medical or business community.  Currently reputation methods such as better business bureau are centralized, or scattered on various websites.  Having a decentralized but discoverable peer-to-peer reputation system might be of high business value in many domains.

### Sample messages:

Let messages be of the format
```
userID   assertion    object    qualifiers
```
where the userID is the verified identifier of the user posting the assertion (perhaps by clicking in a simple UI).  We'll use suggestive userids to illustrate possible uses.  Some of the items in the feed might help create reputation, others might help customize the outputs for a given user.

```
journoX         first_hand_photo   imageX    taken_date:dateX
randoY          first_hand_photo   imageY    taken_date:dateY
randoZ          vouches_for        randoY
randoZ          assert_fraud       imageX    reason: doctored link:urlZ
hubA            trusts             bellingcat
```
Both journoX and randoY have posted photos that they assert they have directly taken. randoZ vouches for randoY and increases his rank slightly. hubA does not have any direct information about journoX or randoY, but expresses a trust for bellingcat as an arbiter.  

At this point, users of hubA will probably see posts of randoY ranked higher than those of journoX, because randoZ vouched for randoX and also reported journoX's photo as fraud. 

```
bellingcat      assert_fraud       imageY    reason: doctored link:urlB1
```
Bellingcat weighs in only rarely, but happens to have weighed in on one of randoY's several posts.  Now users of hubA would see less of photos and posts of randoY; future vounches of randoZ will be ineffective; and also will now rank journoX post more highly as randoZ has been discredited by vouching for randoY.  That is, the reputation is propagated backwards thru any reputation-staking assertion

Note in the case of photos, if the person taking the photo is encouraged to verify it, unverified photos can be ranked lower in user feeds.

Most users, of course, will not want to make reputation-staking assertions, and will just use the system to 'like' or 'retweet' things based on opinion.

The above assumes, that hubA runs its own algorithms or is subscribed to an algorithmic feed that is crunching the above raw data. Its also possible to put recommendations themselves into the feed.  

Reporting by regular users for posts such as hate speech are also important.  Single reports should not be reputation staking, but if the report is part of a concerted effort to discredit a user, then again the credibility of the reporter may be affected.

### Blocks, Reports, and Recommendations

```
userA        reports       randoQ      reason: hate speech against protected group  posts: post1, post2, post3
randoQ       reports       userA       reason: hate speech against protected group  posts: post4, post5, post6
```
At this point, neither userA or randoQ are blocked, but may be fed into a moderation service.

One interesting possibility for a moderation service, would be a form of 'random jury selection' - random selection of 3 users from a large pool who fit certain criteria, such as age of account or national ID card verification from a country with free speech.  Users might be interested in being on such 'juries' occasionally with offer of a small reward - essentially piecework, but occasional and mainly for non-monetary motivation.  Since the demand for moderation would probably outpace the supply, likely only users who are frequently reported would receive 'juried' moderation. 

Suppose in this case, that 20 or more users reported randoQ, and 20 or more users reported userA.  

```
jurysvc1       clears           userA     context: assertion1   # assertions have ids, not shown above
jurysvc1       confirms_report  randoQ    context: assertion2
```

Now, suppose that hubA does not want to run its own algorithms, but just wants to subscribe to a blacklist and greylist.  In this case, the above scenarios might also result in the output

```
wot_service     recommends_greylist     randoY    # from the photo incident above
wot_service     recommends_blacklist    randoQ    # from the confirmed report
```

And in addition, the 20 users reporting userA will be less weighted in future reports that might be sent to moderation.   hubA does not need to know this, but wot_service does.

Different financial arrangements are possible to support the above, possibly smart contracts or possibly hubA would contract with wot_service which would contract with jurysvc1.  

The post of 'hubA trusts bellingcat' was somewhat glossed over, this kind of assertion would allow the wot_service to tailor recommendations for different hubs, but this is beyond the scope of this document.

the wot_service is essentially storing not only the reputation of posters, but the credibility of reporters.  This might be in a fixed system of policy rules or it might be model-driven, as the scale of the feed obviously will be large.  In this case the results from the 'trusted' reporters are essentially being used as a source of truth for training models.

#### Fundamentally, this model lets high quality volunteer organizations like bellingcat efficiently leverage their work into the public conversation.


------

### Generalized reputation service

A more generalized reputation feed might include such items as 

```
drX     verifies_patient   userY
userY   ranks              drX       context:obgyn, score:5
drX     recommends         drZ       context:geriatrics
userZ   ranks              drZ       score:1
```

This type of feed would replicate the functionality on popular doctor-recommendation sites, but in a decentralized fashion.  

Privacy and anonymity however would be major concerns in a fully decentralized reputation service and the ids would need to be fully anonymized.  In cases where the ids may be linked, however, the existance of other types of recommendations would be valuable to any identity reputation service - if drX has patients (anonymized ones that cannot be linked, but that have scores), then undoubtedly they are a real person, and perhaps also more qualified to post items in medical areas. 

### Decentralized monetization

Domain-specific reputation has high potential value.  This may be a good candidate for a token system of rewards for those who provide reports that are found useful - however it will be important to distinguish between tokenized rewards and actual reputation.  Separating the reward from the actual reputation measure is probably important to prevent gaming the system.  

In any case, this may be a good candidate for experimenting with monetizing a service in a decentralized way that also allows participants to get some small benefit.  The brave BAT tokens would seem to be a good candidate and could be required to use the system more than a certain number of times.

### Links and references

Andreas Gutscher : [A Trust Model for an Open, Decentralized Reputation System](https://link.springer.com/content/pdf/10.1007/978-0-387-73655-6_19.pdf) 
discusses trust in the context of different capabilities (ie as a reporter, as a first-hand observer, or as a recommender) - back from 2007

A prerequisite for a reputation feed is a decentralized identity system - see [A Taxonomic Approach to Understanding
Emerging Blockchain Identity Management Systems](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.01142020.pdf) 

A related area is Verifiable Claims - see [Sovrin white paper](https://sovrin.org/wp-content/uploads/Sovrin-Protocol-and-Token-White-Paper.pdf)
an assertion from a trusted source might be a type of verifiable claim

See also [International Fact-Checking Network's code of principles](https://ifcncodeofprinciples.poynter.org/)
