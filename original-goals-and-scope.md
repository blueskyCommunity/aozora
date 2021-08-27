# Original Goals & Scope
_original goals and scope vetted by Twitter - last change April 1 2020_

## Goals

At a high level, the goal of bluesky is to build a durable and open protocol for public conversation. We believe decentralizing the public conversation will benefit users by driving innovation to improve user interfaces, curation, moderation, and discovery capabilities, allowing users to have more choice in their experience while still being able to communicate globally. The openness of a decentralized protocol will enable developers to experiment with new solutions.

## Pain Points

In particular, the bluesky protocol should enable solutions for

- Creating new customizable interfaces for how content is displayed, hidden, prioritized, and contextualized for users.
- Allowing communities to set their own norms for fostering healthy conversations.
- Keeping the public conversation from fragmenting. It must be easy to see, search, and interact with content across the whole network even if it’s decentralized.

## What is a Public Conversation

A 'public conversation' is a conversation that is visible to anyone with an address to that conversation.

## Scope

The scope section is split into three components: research, protocol, and reference application.

### Research/process

Before building anything, some initial work needs to be done to research existing systems and possible designs, and these should result in the following deliverables

- Individual brainstorms and proposals for ideal decentralized social network designs, arrived at from first principles, and unconstrained by existing systems.
- An ecosystem overview, that describes existing protocols and categorizes existing solutions by topic.
- Input from existing protocol builders on how to meet project needs, conducted through interviews or a proposal solicitation process

### Protocol

The protocol defines the role of nodes in a system and the structure of their communication.

Bluesky could lead to the adoption of multiple protocols with different domain applicability. For example, a decentralized reputation protocol could apply more broadly beyond just public conversation.

#### In scope

- Design consideration: maximize use of existing components/libraries, and leverage composable components
- Determining format for identity, data structure, and network communication
- Defining interfaces with existing systems
- Creating developer libraries and tools for building on the protocol
- Designing for future extensibility
- Support for experimentation with existing and novel monetization and payments methods
- Support for experimentation with existing and novel reputation and trust mechanisms
- Directing attention in a way that can compete with centralized solutions which can aggregate private data for ranking in addition to public data.

#### Out of scope

- Interacting at protocol level with users (role of applications)
- Encoding information related to compliance censorship, takedowns etc. (Justification: the application is ultimately liable for compliance, censorship, takedowns etc., and will need to take care of them anyway)
- Encoding detailed information about de-spamming, timeline/newsfeed composition, etc. (Justification: these are the core competencies of applications. The decentralized protocol shouldn't compete with applications on it.)

### Application

#### In scope

- Building an implementation that supports public conversation
- Ensuring extensibility to private and semi-private conversations
- Experimenting with monetization and payments at the application layer
- Experimenting with decentralized reputation and trust mechanisms
- Soliciting developer and public input for new moderation and curation methods, and designing to support a variety of approaches
- Collaborating with Twitter on complementary new API design

#### Out of scope

- Over focusing on client side UX

#### Uncertain

- Implementing new moderation and curation strategies
- Implementing private and semi-private conversation support

### Near-Term Success Criteria

- Innovation:

  - Third parties enabled to provide new experiences, curation, or content to users.
  - Innovations should be of demonstrable benefit to end users.

- Adoption:

  - Users and messages on the protocol
  - Communication and interoperability with existing systems
  - Usability should adhere to existing standards

- Security:

  - System should be resistant to malicious attackers
  - System should not leak user data or metadata in unacceptable ways

- Open Governance - Development should proceed in an open manner, with an open governance mechanism
