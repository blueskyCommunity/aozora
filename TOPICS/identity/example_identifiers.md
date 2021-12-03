## Submit PRs to this file that contain example bluesky identifiers
# ONLY 

### You may submit to [identifier_explanations.md](identifier_explanations.md) with an explanation of why your identifier is good.
----



golda~bluesky-community.net

acct:bob@example.com

mailto:alice@example.com

```
triple identifyer pattern
@ . Adresses (names given by an authority)
    . re-delegable authority
    @ terminal authority
#   hashtags (names that are not unique)
~   fingerprints (names that are not chosen. hashes, keys)

Binding done by grouping all identifiers in a () are bound
bound names could be any combination of types
(user@domain.tld ~jzzuedxe2pudvujm #display_name)

combined types
username1@sub_domain2.~jzzuedxe2pudvujm#bob
   Here ~jzzuedxe2pudvujm is identified by hash
   ~jzzuedxe2pudvujm authorised a subdomain named sub_domain2
   sub_domain2.~jzzuedxe2pudvujm has authorised a user username1
   username1@sub_domain2.~jzzuedxe2pudvujm has the display name bob
   if bob has his own keys they can bind them
   (username1@sub_domain2.~jzzuedxe2pudvujm ~3oy3p4ucysnf5xee #bob)
   if ~3oy3p4ucysnf5xee wants to move to a new domain the retract one asertion and isue a new one
      -(username1@sub_domain2.~jzzuedxe2pudvujm ~3oy3p4ucysnf5xee #bob)
      (username1@bobnet.com ~3oy3p4ucysnf5xee #bob)
```
