# Architecture Notes

## Components

| Component | Purpose |
| --- | --- |
| Copilot Studio Agent | Receives user requests, triggers topics, asks follow-up questions, and sends structured payloads to automation. |
| Intent Routing Workflow | Classifies the request into categories such as access, incident, case status, knowledge lookup, and human handoff. |
| Case Creation Workflow | Validates required fields, creates a case record, assigns owner groups, and sends confirmation. |
| Human Handoff Workflow | Packages conversation summary, confidence score, attachments, and user metadata for an L2/L3 queue. |
| Feedback Telemetry Workflow | Captures resolution outcome, satisfaction, response time, and category performance for reporting. |
| Operations UI | Gives support teams a simple dashboard to monitor routed requests, failed classifications, and handoff volume. |

## Data Model

| Table | Example Fields |
| --- | --- |
| support_cases | case_id, requester_email, intent, priority, status, owner_group, created_on |
| conversation_events | event_id, case_id, message_type, intent_confidence, topic_name, timestamp |
| handoff_packets | packet_id, case_id, summary, reason, queue, assigned_to, sla_due |
| feedback_logs | feedback_id, case_id, rating, resolution_status, comments, closed_on |

## Security Pattern

- Environment variables store endpoint URLs and non-secret configuration.
- Secrets are assumed to be stored in a platform-managed key vault or secure connection reference.
- Sample files do not contain production IDs, tenant names, API keys, or client-specific URLs.
