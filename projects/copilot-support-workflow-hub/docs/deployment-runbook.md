# Deployment Runbook

## Pre-Deployment Checklist

- Validate environment variables for non-secret endpoints and queue names.
- Confirm secure connection references are configured outside source control.
- Import Copilot topics and workflow definitions into the target environment.
- Validate Dataverse-style tables or equivalent data stores.
- Assign support queue owners and notification channels.

## Smoke Test

1. Send a sample access request through the agent.
2. Confirm the intent router returns the expected route.
3. Confirm the case creation workflow creates a case record.
4. Confirm the Adaptive Card appears in the support queue.
5. Trigger a low-confidence message and confirm human handoff.
6. Close a sample case and confirm feedback telemetry is recorded.

## Rollback

- Disable the new Copilot topic.
- Revert workflow connection references to the previous active version.
- Pause feedback telemetry if reporting output is not required.
