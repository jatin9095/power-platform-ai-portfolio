# Power Platform Finance Automation

## Overview

This case study describes a finance automation workflow for invoice and REM-card data extraction, structured review, and reconciliation reporting.

The work is represented as a sanitized portfolio project using sample fields and generalized architecture.

## Problem

Finance operations often handle unstructured PDFs, scanned handwritten cards, and Excel-based reconciliation sheets. Manual extraction and comparison can be slow and error-prone.

## Solution

The automation pattern supports:

- OCR-assisted extraction
- Field validation
- Structured Excel or CSV output
- Reconciliation checks
- Exception reporting
- Dashboard-ready data

## My Role

- Designed extraction fields and validation logic
- Created parsing and cleanup steps using Python and Excel workflows
- Structured reporting output for review and reconciliation
- Prepared repeatable templates for variance checks
- Supported dashboard and stakeholder review needs

## Architecture

```text
PDF / Image Input
  -> OCR / Parsing Layer
  -> Validation Rules
  -> Structured Output
  -> Reconciliation Checks
  -> Power BI / Excel Review
```

## Technologies

- Python
- OCR concepts
- Excel
- SQL concepts
- Power Automate patterns
- Power BI
- JSON / CSV output

## Outcome

- Reduced manual data-entry effort
- Improved structure and consistency of finance data
- Created repeatable review and reporting outputs
