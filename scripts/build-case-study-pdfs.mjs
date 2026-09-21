import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const root = path.resolve("github-portfolio");
const outDir = path.join(root, "pdf-case-studies");

const studies = [
  {
    slug: "copilot-studio-service-desk-agent",
    title: "Copilot Studio Service Desk Agent",
    subtitle: "Internal support agent with guided self-service and workflow handoff",
    sections: [
      ["Problem", "Repeated employee support questions created manual effort, inconsistent responses, and delayed handoff to support owners."],
      ["Approach", "Designed Copilot Studio topics, fallback paths, guided questions, Adaptive Card-style inputs, and Power Automate actions for request capture and escalation."],
      ["Architecture", "Teams/Web user -> Copilot Studio topic -> knowledge or prompt response -> Power Automate action -> Dataverse/SharePoint request record -> notification or handoff."],
      ["My Contribution", "Requirements discovery, topic design, response templates, workflow handoff, test cases, runbook notes, and adoption guidance."],
      ["Skills", "Copilot Studio, Power Automate, Dataverse, SharePoint, Adaptive Cards, JSON, Teams, L2/L3 support."]
    ]
  },
  {
    slug: "azure-ai-intent-routing-bot",
    title: "Azure AI Intent Routing Bot",
    subtitle: "Hybrid routing pattern for chatbot dialogs, fallback, and workflow handoff",
    sections: [
      ["Problem", "Bot responses can become unreliable when user messages contain mixed intent, missing details, or vague wording."],
      ["Approach", "Used Azure Bot Framework SDK v4 concepts, intent classification, Waterfall Dialog-style steps, middleware-style validation, state management, and structured handoff payloads."],
      ["Architecture", "User message -> middleware validation -> intent classification -> dialog router -> workflow or knowledge response -> state update -> Adaptive Card/text response."],
      ["My Contribution", "Dialog-flow design, sample payloads, routing rules, fallback scenarios, support notes, and troubleshooting documentation."],
      ["Skills", "Azure Bot Framework SDK v4, Azure OpenAI, Azure CLU concepts, C# .NET, JavaScript, Adaptive Cards, JSON, App Insights, CI/CD."]
    ]
  },
  {
    slug: "power-platform-finance-automation",
    title: "Power Platform Finance Automation",
    subtitle: "OCR-assisted extraction and reconciliation workflow for finance operations",
    sections: [
      ["Problem", "Manual review of PDFs, images, and spreadsheets slowed finance reconciliation and increased the chance of data-entry errors."],
      ["Approach", "Designed OCR-assisted extraction, field validation, structured outputs, reconciliation checks, and dashboard-ready review datasets."],
      ["Architecture", "PDF/image input -> OCR/parsing layer -> validation rules -> structured output -> reconciliation checks -> Power BI/Excel review."],
      ["My Contribution", "Extraction fields, parsing logic, validation checks, reporting templates, exception outputs, and review-ready datasets."],
      ["Skills", "Python, OCR concepts, Excel, SQL concepts, Power Automate patterns, Power BI, JSON, CSV."]
    ]
  }
];

function htmlFor(study) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { size: A4; margin: 16mm; }
    body { font-family: "Segoe UI", Arial, sans-serif; color: #17202a; margin: 0; }
    h1 { margin: 0; font-size: 28px; color: #12384a; }
    .subtitle { margin: 6px 0 22px; color: #425466; font-size: 13px; }
    .badge { display: inline-block; padding: 5px 9px; border-radius: 4px; background: #e8f1f5; color: #12384a; font-size: 11px; margin-bottom: 20px; }
    section { margin: 0 0 18px; }
    h2 { margin: 0 0 6px; font-size: 14px; text-transform: uppercase; color: #12384a; border-bottom: 1px solid #9cb7c4; padding-bottom: 5px; }
    p { margin: 0; font-size: 12px; line-height: 1.55; }
    footer { position: fixed; bottom: 9mm; left: 16mm; right: 16mm; color: #667085; font-size: 9px; border-top: 1px solid #d0d5dd; padding-top: 5px; }
  </style>
</head>
<body>
  <div class="badge">Redacted Portfolio Case Study</div>
  <h1>${study.title}</h1>
  <p class="subtitle">${study.subtitle}</p>
  ${study.sections.map(([title, body]) => `<section><h2>${title}</h2><p>${body}</p></section>`).join("")}
  <footer>Jatin Arya - Sanitized project summary. No client code, credentials, proprietary data, or production records included.</footer>
</body>
</html>`;
}

await fs.mkdir(outDir, { recursive: true });
const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox"] });
try {
  for (const study of studies) {
    const htmlPath = path.join(outDir, `${study.slug}.html`);
    const pdfPath = path.join(outDir, `${study.slug}.pdf`);
    await fs.writeFile(htmlPath, htmlFor(study), "utf8");
    const page = await browser.newPage();
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle0" });
    await page.pdf({ path: pdfPath, format: "A4", printBackground: true });
    await page.close();
    console.log(pdfPath);
  }
} finally {
  await browser.close();
}
