# Agreements in federated / p2p network


## Types of agreements 

1. **Data Agreement**: Records the conditions for a Data Using Service / Data Source to process personal data in accordance with privacy regulation (e.g. GDPR) captured in a signed receipt given to the individual.

2. **Data Disclosure Agreement**: Records the conditions of data disclosure by a Data Source.


3. **Data Processing Agreement**: Records the conditions of data processing by a Processor or Sub-Processor


4. **Delegation Agreement**: Records the conditions of delegation between delegator and delegatee

## Reference links

1. https://docs.igrant.io/docs/mdo-data-agreement
2. https://docs.igrant.io/schema/data-agreements/v1/
3. https://digitalpublicgoods.net/registry/automated-data-agreement.html
4. https://github.com/decentralised-dataexchange/automated-data-agreements

## Data Agreements

### Introduction

A Data Agreement records the conditions for an organization to process personal data in accordance with privacy regulation (e.g. GDPR) captured in a signed receipt given to the individual. To automate creation of the record and increase the trust assurance a Data Protection Impact Assessment may be used to populate the record. 

In iGrant.io, personal data exchanges from a Data Source to a Data Using Service are endorsed via Data Agreements. Data Agreements are based on different legal bases, (e.g. consent, lawful purpose, contract, legal obligation, vital interests, public task and legitimate interests etc). If they’re without consent, individuals will only have limited or no rights to withdraw the consent, however, the individual can still follow what data is processed and why.

This documentation describes how a Data Agreement between an organisation and individual is managed in order to capture, in a receipt, the conditions of processing of personal data. The receipt acts as evidence and demonstrates a higher level of accountability and is based on standard schemas. The accountability is further enhanced by directly integrating the Data Agreement with the input from a risk assessment, e.g. Data Protection Impact Assessment.

In order to create the Data Agreement, and the resulting receipt as proof, a number of steps are required from different actors. This document describes these steps involved and is described as part of a Data Agreement lifecycle.

### Data Agreement lifecycle actors

These actors are involved in the Data Agreement lifecycle.

*   a **Data Source**, the organisation collecting private data, (typically a data controller).  [SSI: Issuer]
*   a **Data Subject** or **Individual**. [SSI: Holder]
*   a **Data Using Service (DUS)**, an organisation processing personal data from one or more data sources to deliver a service. [SSI: Verifier]
*   an **Assessor** reviews the practices of an organisation**, **conducts a DPIA and drafts data agreements and inter-company agreements for third parties.
*   an **Auditor** may be called in to review the data agreements and ensure they are in place in case of data breaches or regular inspection. 

In addition to these actors to better understand the interworking, these nodes are relevant.

*   **Assessment Platform** or **DPIA Tool** is used by Assessor to create reports and populate Data Agreements.
*   **ADA Service** represents the microservices that can be plugged into any service provider wishing to adopt ADA services.

### Data exchange agreements landscape 

This chapter introduces various agreements and relationships that exist between organisations and individuals, depending on their roles in the personal data usage scenarios in a personal data economy. The various agreements involved can be classified into two broad categories:.

1. Agreement between an individual and an organisation
2. Agreement between two organisations

This specification focuses on agreement between an individual and an organisation; the agreement between two organisations is not within the scope of this specification and is mentioned here for the sake of completion. 

#### Agreement between an individual and an organisation

This is an agreement between organisations and individuals in the use of personal data. We refer to this as the “Data Agreement” which can have any of the legal basis that is outlined as per data protection law or regulation, such as the GDPR. The agreement with individuals could be with a  Data Source (issuer) or a Data Using Service. 

The focus of this specification is on the Data Agreement, how it is defined, prepared by an organisation wishing to use personal data, how it is negotiated with an individual and finally how an auditor is able to audit the data agreement involved in a data transaction. 

#### Agreement between two organisations 

There can be two forms of agreements between two organisations. 

The first form of agreement is between organisations where one organisation acts as a Data Source and the other as Data Using Service. In this case, both organisations share the role as data controller and are responsible for managing their compliance requirements. They may have made their own privacy risk assessment, documented in a data protection impact assessment (DPIA) report, and concluded whether any additional mitigation effort was required. This agreement is referred to as **Data Disclosure Agreement**, which, though not yet standardised, captures the agreement between two organisations on how data is shared and what obligation each party has. This can be realised as a contract or in terms of use. The individual (data subject) is engaged with both organisations. For each organisation, there exists a **Data Agreement** with an associated privacy policy that explains the purpose of processing personal data, what personal data is collected, data subject rights, etc.

![](https://docs.igrant.io/assets/images/data-agreements-ds-dus-2-83d1b0685b02fb28dcb24ab6ea4feea0.png)

The second form of an agreement in this category is between an organisation and their suppliers as illustrated below. 

![](https://docs.igrant.io/assets/images/data-agreements-org-supplier-ec96d4fb20aea8fb95723d911eefd4a6.png)

Here, there is a vertical relationship between an organisation A as a data controller and their suppliers as  data processors or sub-processors. For a higher level of accountability between these organisations,  a **Data Processing Agreement** is set up, which lays out what routines are required to be in place: for example, data processor’s obligations  in case of data breaches or how rights of the data subject, such as access rights, are supported, among other policies and routines. An auditor should also be able to inspect an organisation, and use the data processing agreement as reference during the inspection.

As depicted in the diagram above, the data agreement with the individual is bound to the top of the hierarchy, i.e. the data controller or organisation.

### Data Protection Impact Assessment (DPIA)

A Data Protection Impact Assessment (DPIA) is a structured process where  an organisation can identify and minimise the data protection risks involved in the use of personal data. It ensures that an organisation is compliant to data regulations, such as the GDPR. 

Article 35 of the GDPR requires organisations to conduct DPIAs, especially when the processing is likely to result in high risk to the rights and freedoms of natural persons in the case of extensive use of new technologies and when sensitive personal data is being processed (e.g. health-related data). Organisations can also conduct DPIAs voluntarily, even if the processing does not meet the requirement criteria set out in the GDPR. 

Some EU Member State data protection authorities, such as the Finnish data protection ombudsman, have recommended using dataflow maps when conducting DPIAs. Dataflow maps visualize the flows of personal data across systems, organisations, and jurisdictions, and provide a good overview of the nature and scope of the processing and identify risks.

Appendix B outlines how a DPIA report can map to a Data Agreement. By integrating the DPIA into the lifecycle of the Data Agreement an organisation can demonstrate how the privacy requirements of accountability, transparency, data sharing and retention procedures are fulfilled. If the DPIA report is part of an online tool it is possible to continuously monitor an organisation's data flows and ensure any internal changes are reflected in the Data Agreement.

### Data Agreement functional overview

This section provides a functional overview of the Data Agreement and is broken down into:

* Data Agreement lifecycle
* Applicable use cases

#### Data Agreement Lifecycle

The Data Agreement Lifecycle has 4 main phases as described below:

![Data Agreement workflow](https://docs.igrant.io/assets/images/data-agreement-workflow-d0293873ab3f1d4d93ee2813966b9c89.png)

1. **Definition**: In this phase, an authority adapts the data agreement schema to a particular industry and/or sector specific data usage as a template. This can then be used by any organisation (Data source or Data Using Service) for a particular data usage purpose. 
2. **Preparation**: In this phase, an organisation uses an existing data usage template and prepares it to be published towards the individuals. This could be based on a DPIA and could be for internal use of data or for data exchange to a Data Using Service. Once the Data Agreement is prepared,any changes identified from a subsequent DPIA shall update the Data Agreement and go through a new preparation process. When an agreement is updated or terminated, the individuals are notified and a record is created. 
3. **Negotiation/Capture**: In this phase, an individual reviews the Data Agreement and,  once agreed, it is captured in a Data Agreement *record* by the organisation and the individual is given a Data Agreement *receipt* as evidence of the agreement. The Data Agreement *receipt* can be used as proof for the data transaction that occurred. This allows an auditor to check and ensure records are in place to process the individual's personal data. When the agreement is terminated and is no longer applicable towards an individual, a new record is created. The termination can be due to the service period being completed or an individual requests to revoke the agreement. The record of the termination allows an auditor to inspect personal data that is not used. If an individual requests to be forgotten when terminating a service it shall be clearly indicated.
4. **Proof**: An organisation is able to demonstrate a valid Data Agreement *record* for performing a data exchange with an individual. This allows an auditor to check and ensure records are in place to process the individual's personal data.

#### Applicable Use Cases

These are the use cases covered by this specification. A mapping between the use cases and lifecycle phase can help map to the involved actors described in the previous section.

<table>
  <tr>
   <td><strong>#</strong>
   </td>
   <td><strong>Lifecycle Phase</strong>
   </td>
   <td><strong>Use Case</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td rowspan="2" >Definition
   </td>
   <td>Create template Data Agreement for both human and machine readable formats
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>Update Data Agreement based on changes on  assessment (DPIA)
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td rowspan="2" >Preparation
   </td>
   <td>Prepare Data Agreement based on an assessment (DPIA)
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>Update Data Agreement based on changes on  assessment (DPIA)
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td rowspan="2" >Capture
   </td>
   <td>Countersign a Data Agreement and capture Data Agreement receipt in negotiation/capture phase
   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>Data agreement revoked/expired
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>Proof
   </td>
   <td>External audit of Data Agreement 
   </td>
  </tr>
</table>

### Data Agreement Vocabulary

The Data Agreement Vocabulary provides terms to describe and represent information related to processing of personal data based on established requirements such as for the EU General Data Protection Regulation (GDPR). You can view the [version 1.0 here](https://docs.igrant.io/schema/data-agreements/v1/).
