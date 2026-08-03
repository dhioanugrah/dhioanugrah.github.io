const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'pages', 'index.astro');
let content = fs.readFileSync(filePath, 'utf-8');

const researchRegex = /(<!-- RESEARCH -->[\s\S]*?)(?=<!-- OTHER PROJECTS -->)/;
const otherProjRegex = /(<!-- OTHER PROJECTS -->[\s\S]*?)(?=<!-- PROFILE -->)/;

const researchMatch = content.match(researchRegex);
const otherMatch = content.match(otherProjRegex);

if (researchMatch && otherMatch) {
  let researchBlock = researchMatch[1];
  let otherBlock = otherMatch[1];
  
  researchBlock = researchBlock.replace('02 / Research Highlight', '03 / Research Highlight');
  otherBlock = otherBlock.replace('03 / Project Lainnya', '02 / Project Lainnya');
  otherBlock = otherBlock.replace('text-white transition hover:bg-paper', 'text-paper transition hover:bg-paper');

  const preResearch = content.substring(0, researchMatch.index);
  const postOther = content.substring(otherMatch.index + otherMatch[0].length);

  const newContent = preResearch + otherBlock + researchBlock + postOther;
  fs.writeFileSync(filePath, newContent);
  console.log("Success");
} else {
  console.log("Failed to match sections");
}
