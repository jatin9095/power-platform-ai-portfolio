# Copilot Studio Service Desk Agent

## Overview

This case study describes a Microsoft Copilot Studio agent for internal employee support. The agent helps users find answers, understand service request steps, and route unresolved queries to a workflow or support queue.

The implementation is presented as a sanitized architecture sample. It does not include proprietary prompts, tenant configuration, credentials, or production data.

## Problem

Internal support teams often receive repeated questions about access, approvals, status checks, policy guidance, and common operational workflows. Manual responses create delays and inconsistent handoff quality.

## Solution

The agent uses structured topics, trigger phrases, response templates, guided questions, and Power Automate actions to support:

- FAQ and knowledge-driven responses
- Request-type identification
- Basic user data capture
- Escalation and handoff
- Ticket or task creation through workflow automation
- Reusable response patterns for repeated queries

## My Role

- Gathered business requirements and user scenarios
- Defined topics, trigger phrases, fallback paths, and handoff logic
- Designed Adaptive Card-style response patterns for structured inputs
- Connected agent actions to workflow automation
- Supported testing, issue resolution, release notes, and user handover

## Architecture

```text
User in Teams/Web
  -> Copilot Studio Topic
  -> Knowledge / Prompt Response
  -> Power Automate Action
  -> Dataverse / SharePoint / Ticket List
  -> Notification or Support Handoff
```

## Technologies

- Microsoft Copilot Studio
- Power Automate
- Dataverse
- SharePoint
- Microsoft Teams
- Adaptive Cards
- JSON payloads
- Power BI reporting concepts

## Outcome

- Reduced repetitive support handling
- Improved response consistency
- Created clearer escalation paths
- Helped business users adopt a guided self-service flow
