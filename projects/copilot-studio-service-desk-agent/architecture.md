# Architecture Notes

## Topic Design

- Grouped topics by request category
- Added fallback handling for unclear user input
- Used guided questions for missing fields
- Added handoff rules for unresolved or sensitive requests

## Action Design

- Agent action receives structured user inputs
- Flow validates required fields
- Flow writes the request into Dataverse or SharePoint
- Notification is sent to the support owner

## Support Model

- Test cases cover happy path, missing data, escalation, and fallback
- Basic runbook documents common production issues
- Adoption notes explain how users should phrase common requests
