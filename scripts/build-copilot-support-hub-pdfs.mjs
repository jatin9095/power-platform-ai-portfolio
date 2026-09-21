import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const root = path.resolve("github-portfolio");
const projectDir = path.join(root, "projects", "copilot-support-workflow-hub");
const outDir = path.join(root, "pdf-case-studies");

const study = {
  title: "Copilot Support Workflow Hub",
  subtitle: "Sanitized Copilot Studio and Power Automate case study for enterprise support automation",
  sections: [
    ["Problem", "Employee support requests were spread across chat, email, and manual forms. The process needed faster classification, structured case capture, guided follow-up, and reliable handoff to support teams."],
    ["Approach", "Designed a Copilot Studio agent with topic routing, AI-assisted intent classification, Power Automate workflows, Dataverse-style case records, Adaptive Card notifications, and feedback telemetry."],
    ["Workflow Design", "Created sample workflows for intent routing, case creation, human handoff, and feedback logging. Each workflow uses structured JSON payloads so the design can be reviewed like a real implementation without exposing production assets."],
    ["UI Preview", "Prepared a dummy operations dashboard for routed intents, open cases, handoff queue, confidence score, and recent conversation context."],
    ["My Contribution", "Conversation design, workflow architecture, payload mapping, Adaptive Card structure, L2/L3 escalation logic, telemetry fields, test scenarios, and deployment runbook."],
    ["Skills", "Copilot Studio, Power Automate, Dataverse, Power Apps, Adaptive Cards, Azure OpenAI, Azure AI intent routing concepts, REST APIs, JSON, Power BI, App Insights, Agile/Scrum."]
  ]
};

function caseStudyHtml() {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    @page { size: A4; margin: 15mm; }
    body { font-family: "Segoe UI", Arial, sans-serif; color: #17202a; margin: 0; }
    .top { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 5px solid #12637a; padding-bottom: 16px; margin-bottom: 18px; }
    h1 { margin: 0; font-size: 29px; color: #12384a; letter-spacing: 0; }
    .subtitle { margin: 7px 0 0; color: #425466; font-size: 13px; line-height: 1.4; max-width: 520px; }
    .badge { padding: 6px 10px; border-radius: 5px; background: #e8f1f5; color: #12384a; font-size: 11px; font-weight: 700; white-space: nowrap; }
    .summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 18px; }
    .metric { border: 1px solid #d0dbe3; border-radius: 8px; padding: 10px; background: #f8fbfd; }
    .metric strong { display: block; color: #12384a; font-size: 15px; }
    .metric span { color: #667085; font-size: 10px; }
    section { margin: 0 0 15px; }
    h2 { margin: 0 0 6px; font-size: 13px; text-transform: uppercase; color: #12384a; border-bottom: 1px solid #9cb7c4; padding-bottom: 5px; }
    p { margin: 0; font-size: 11.5px; line-height: 1.55; }
    footer { position: fixed; bottom: 8mm; left: 15mm; right: 15mm; color: #667085; font-size: 9px; border-top: 1px solid #d0d5dd; padding-top: 5px; }
  </style>
</head>
<body>
  <div class="top">
    <div>
      <h1>${study.title}</h1>
      <p class="subtitle">${study.subtitle}</p>
    </div>
    <div class="badge">Redacted Portfolio Case Study</div>
  </div>
  <div class="summary">
    <div class="metric"><strong>4</strong><span>Sample workflow definitions</span></div>
    <div class="metric"><strong>3</strong><span>Copilot topic samples</span></div>
    <div class="metric"><strong>0</strong><span>Client names or production data</span></div>
  </div>
  ${study.sections.map(([title, body]) => `<section><h2>${title}</h2><p>${body}</p></section>`).join("")}
  <footer>Jatin Arya - Sanitized project summary. No client code, credentials, proprietary data, or production records included.</footer>
</body>
</html>`;
}

await fs.mkdir(outDir, { recursive: true });
const caseStudyHtmlPath = path.join(outDir, "copilot-support-workflow-hub.html");
const caseStudyPdfPath = path.join(outDir, "copilot-support-workflow-hub.pdf");
const uiPdfPath = path.join(projectDir, "ui-preview.pdf");
const uiHtmlPath = path.join(projectDir, "ui-wireframe.html");

await fs.writeFile(caseStudyHtmlPath, caseStudyHtml(), "utf8");

const browser = await puppeteer.launch({ headless: "new", args: ["--no-sandbox", "--disable-setuid-sandbox"] });
try {
  const casePage = await browser.newPage();
  await casePage.goto(pathToFileURL(caseStudyHtmlPath).href, { waitUntil: "networkidle0" });
  await casePage.pdf({ path: caseStudyPdfPath, format: "A4", printBackground: true });
  await casePage.close();

  const uiPage = await browser.newPage();
  await uiPage.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  await uiPage.goto(pathToFileURL(uiHtmlPath).href, { waitUntil: "networkidle0" });
  await uiPage.pdf({ path: uiPdfPath, format: "A4", landscape: true, printBackground: true });
  await uiPage.close();

  console.log(caseStudyPdfPath);
  console.log(uiPdfPath);
} finally {
  await browser.close();
}
