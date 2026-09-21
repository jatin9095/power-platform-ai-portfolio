# Architecture Notes

## Dialog Flow

- Classify user message
- Route to dialog based on confidence score
- Ask follow-up questions for missing fields
- Store conversation context
- Generate response or trigger workflow

## Middleware Concepts

- Request validation
- Logging and trace IDs
- Error handling
- User state lookup
- Conversation state persistence

## Testing

- Single-intent messages
- Multi-intent messages
- Low-confidence messages
- Missing fields
- Escalation path
