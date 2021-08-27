# UI Design

Can we create an open standard that allows both developers and designers to create their own design system, or choose from a list of existing ones, and empower them to build and design their app faster?

Could this be an interoperable/pluggable system that can work together with different protocols (i.e. back-end, database, authentication system)?

## Focuses

- Component-driven Design
- Server-driven UI
  - could we A/B test design changes from a server?
  - could we progressively improve a design, or upgrade a backend protocol without needing app/client updates?

## Resources

- https://airbnb.design/building-a-visual-language/
- https://medium.com/airbnb-engineering/a-deep-dive-into-airbnbs-server-driven-ui-system-842244c5f5
- https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/buildingfasterwithcomponents
- https://www.alanbsmith.dev/writing/20200904-understanding-component-hierarchy
- https://daneden.me/blog/2017/a-design-system-grammar
- https://daneden.me/blog/2017/design-system-structure
- https://daneden.me/blog/2018/subatomic-design-systems
- https://daneden.me/blog/2017/designing-systems

## Existing Solutions & Requests

name (of existing solution):
- Mastodon

underlying tech:
- Ruby
- Docker
- React.js

used-by:
- social.privacytools.io
- mastodon.social
- torproject@mastodon.social

approx num users: 2.6M+

**how-to-use:**
- Docker

**reasons:**
- for: Can sign up for an existing instance
- for: Easy to deploy with Docker/sysadmin skills
- against: - Design/functionality can't be modded or customised

**requests:**
- React.js framework that can be used on top of a headless Mastodon API server for fully custom design

---

**name (of existing solution):**
- MaterialUI

**underlying tech:**
- React.js
- CSS

**used-by:**
- NASA
- Netflix
- Amazon
- Spotify

**approx num users:**
- 9.3M downloads / month

**how-to-use: [can it be used by other stacks/platforms?  how?]**
- Usable in a React.js web project


**reasons: [for use/not use]**
- for: Widely used in large apps, so a lot of feedback/optimisations has gone into the project
- for: Easy to use, sane defaults
- against: Can't be used with React Native
- against: Deviates from Google's specification, so no common component language for non-React.js frameworks, i.e. SwiftUI, Flutter, Jetpack Compose

**requests: [what would be good to do next with this method]**
- Common design specification that can be used across different frameworks, and between developers and designers, i.e. single source of truth, even if that's common naming patterns, for any framework or language
- Design software integration/interop: Generate Figma/Sketch components for prototyping
- Unopinionated design (i.e. allow one to create their design system, not make a copy-cat of a Google app like many Material Design apps)


