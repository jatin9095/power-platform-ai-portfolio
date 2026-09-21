# Copilot Support Workflow Hub

This is a sanitized portfolio case study for an internal support automation solution built with Microsoft Copilot Studio and Power Platform patterns. It uses realistic sample workflow files and dummy data, but it does not include client names, production endpoints, credentials, or proprietary configuration.

## Business Problem

Support teams were receiving repeated employee requests through chat, email, and manual forms. Requests needed to be classified, enriched with missing details, routed to the correct queue, and tracked with enough context for L2/L3 support teams.

## Solution Overview

The solution models a Copilot Studio agent connected to Power Automate workflows. The agent captures user intent, asks follow-up questions, creates or updates a support case, and escalates low-confidence or high-priority requests to a human queue.

## What This Repository Shows

- Copilot topic samples for access requests, case status, and fallback handoff.
- Power Automate-style JSON workflow samples for classification, case creation, escalation, and feedback logging.
- Adaptive Card JSON for reviewing and approving case handoff.
- Sample payloads for intents, tickets, telemetry, and user context.
- A dummy UI preview for a support operations dashboard.
- A deployment and testing runbook.

## Architecture

User chat -> Copilot Studio topic -> intent router -> Power Automate workflow -> Dataverse-style case table -> Adaptive Card notification -> Power BI/App Insights telemetry

## My Role

- Designed the support conversation flow and fallback strategy.
- Created structured request payloads for workflow handoff.
- Built Power Automate workflow logic for validation, case creation, notification, and feedback capture.
- Prepared sample adaptive cards and support dashboards.
- Documented test scenarios, deployment steps, and operational handover notes.

## Skills Demonstrated

Copilot Studio, Power Automate, Dataverse, Power Apps, Adaptive Cards, Azure OpenAI, Azure AI intent routing concepts, REST APIs, JSON, Power BI, Microsoft Fabric-style reporting, L2/L3 support, and release documentation.

## Redaction Note

This is a portfolio-safe version. It is inspired by the structure of real Power Platform work but uses generic names, sample records, and placeholder workflows only.
