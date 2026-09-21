# Test Scenarios

## Intent Routing

- Confirm access-related messages route to the access request topic.
- Confirm vague requests with missing details trigger follow-up questions.
- Confirm low-confidence messages are routed to the human handoff workflow.

## Case Creation

- Confirm required fields are validated before creating a case.
- Confirm priority accepts only Low, Medium, High, and Critical.
- Confirm requester receives a case ID after successful creation.

## Handoff

- Confirm handoff packet includes conversation summary, confidence score, requester, and reason.
- Confirm case status changes to Pending Human Review after escalation.
- Confirm support queue notification uses the Adaptive Card template.

## Reporting

- Confirm feedback logs are captured after case closure.
- Confirm reporting events include intent, confidence, rating, and time-to-resolve.
