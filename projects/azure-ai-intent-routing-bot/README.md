# Azure AI Intent Routing Bot

## Overview

This case study describes a hybrid conversational AI pattern for routing user requests to the correct dialog, workflow, or knowledge response.

The sample combines Azure Bot Framework SDK v4 concepts, Azure OpenAI / GPT-style response generation, CLU-style intent classification, and structured JSON handoff.

## Problem

Support bots can fail when user messages contain mixed intent, missing context, or unclear wording. A routing layer improves consistency by classifying the user need before choosing the next action.

## Solution

The bot pattern includes:

- Intent classification
- Dialog routing
- Waterfall Dialog-style step handling
- Middleware-style logging and validation
- State management for user and conversation context
- Fallback and human handoff
- Structured Adaptive Card-style responses

## My Role

- Designed dialog flow and routing structure
- Created sample payloads and response formats
- Mapped user intents to workflows and knowledge responses
- Prepared test scenarios for fallback, ambiguity, and escalation
- Documented runbook notes for support and troubleshooting

## Architecture

```text
User Message
  -> Middleware Validation
  -> Intent Classification
  -> Dialog Router
  -> Waterfall Step / Knowledge Response / Workflow Action
  -> State Update
  -> Adaptive Card or Text Response
```

## Technologies

- Azure Bot Framework SDK v4 concepts
- Azure OpenAI / GPT
- Azure CLU-style intent classification
- C# .NET
- JavaScript
- HTML/CSS
- Adaptive Cards
- JSON
- App Insights-style telemetry
- CI/CD release support

## Outcome

- Improved routing clarity
- Better fallback behavior
- More structured handoff to workflows
- Easier troubleshooting through consistent payloads and logging
