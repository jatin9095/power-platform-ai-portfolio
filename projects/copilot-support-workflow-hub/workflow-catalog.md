# Workflow Catalog

| File | Purpose |
| --- | --- |
| `workflows/01-intent-routing.flow.json` | Classifies user input and returns a recommended route, confidence score, and required entities. |
| `workflows/02-create-support-case.flow.json` | Creates a structured support case after validating requester, issue category, priority, and short description. |
| `workflows/03-human-handoff.flow.json` | Escalates requests to a human queue when confidence is low, approval is needed, or the user asks for an agent. |
| `workflows/04-feedback-telemetry.flow.json` | Logs resolution outcome, rating, and operational metrics for reporting. |

## Example End-to-End Flow

1. Employee asks for help in Teams or web chat.
2. Copilot identifies the topic or calls the intent router.
3. Required information is collected through guided questions.
4. Case creation workflow writes the structured request.
5. Adaptive Card is sent to the support queue.
6. Feedback telemetry is captured after resolution.
