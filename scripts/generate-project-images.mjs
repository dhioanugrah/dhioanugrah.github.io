import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const rootDir = process.cwd();
const outputDir = path.join(rootDir, 'public', 'projects');

const palette = {
  cream: '#F4EFE6',
  warmGray: '#E7E1D6',
  line: '#D6CCBE',
  text: '#111111',
  blue: '#2F6BFF',
  blueSoft: '#DDE7FF',
  blueDeep: '#1C4FD7',
  white: '#FFFFFF',
};

const projects = [
  {
    filename: 'klinklin-cover.webp',
    title: 'Digitalisasi Operasional Klinklin',
    type: 'desktop',
  },
  {
    filename: 'warehouse-cover.webp',
    title: 'Warehouse Management System',
    type: 'desktop',
  },
  {
    filename: 'summit-itk-cover.webp',
    title: 'Summit ITK Admission System',
    type: 'desktop',
  },
  {
    filename: 'botanical-mobile.webp',
    title: 'Botanical Garden Journal',
    type: 'mobile',
  },
  {
    filename: 'shoe-store-mobile.webp',
    title: 'Shoe Store Mobile App',
    type: 'mobile',
  },
];

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function textBlock(text, x, y, size, weight = 600, fill = palette.text, anchor = 'start') {
  return `<text x="${x}" y="${y}" fill="${fill}" font-family="Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif" font-size="${size}" font-weight="${weight}" text-anchor="${anchor}" letter-spacing="-0.02em">${escapeXml(text)}</text>`;
}

function desktopSvg(title, layoutVariant) {
  const accentRows = layoutVariant === 'klinklin' ? ['84%', '74%', '56%'] : layoutVariant === 'warehouse' ? ['88%', '66%', '42%'] : ['78%', '58%', '36%'];
  const chartPath = layoutVariant === 'klinklin'
    ? 'M 0 180 C 140 150 220 110 340 122 C 450 132 520 66 660 78 C 760 88 830 118 920 94 C 1010 72 1090 36 1200 44'
    : layoutVariant === 'warehouse'
      ? 'M 0 160 C 120 148 260 120 360 98 C 470 74 560 88 680 68 C 820 44 930 70 1040 52 C 1130 38 1210 34 1280 22'
      : 'M 0 186 C 110 160 180 142 286 126 C 402 110 480 98 598 84 C 716 70 816 66 918 54 C 1044 40 1128 24 1232 14';

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1200" viewBox="0 0 1600 1200">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${palette.cream}" />
        <stop offset="100%" stop-color="#EAE3D7" />
      </linearGradient>
      <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#F5F1EA" />
      </linearGradient>
      <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${palette.blue}" />
        <stop offset="100%" stop-color="${palette.blueDeep}" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="22" stdDeviation="28" flood-color="#8A7E6C" flood-opacity="0.18" />
      </filter>
      <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#8A7E6C" flood-opacity="0.14" />
      </filter>
    </defs>
    <rect width="1600" height="1200" fill="url(#bg)" />
    <g opacity="0.5">
      <circle cx="1360" cy="140" r="170" fill="#F8F4EC" />
      <circle cx="220" cy="1040" r="190" fill="#F7F2E9" />
      <path d="M1200 180c80-50 150-20 210 36s76 148 8 198c-68 50-168 22-220-40-52-62-50-144 2-194z" fill="#E6EEFf" opacity="0.42" />
    </g>
    <rect x="150" y="90" width="1300" height="1020" rx="48" fill="url(#panel)" filter="url(#shadow)" />
    <rect x="150" y="90" width="1300" height="120" rx="48" fill="#FAF7F2" />
    <rect x="150" y="160" width="1300" height="50" fill="#FAF7F2" />
    <circle cx="220" cy="150" r="12" fill="${palette.blue}" />
    <circle cx="256" cy="150" r="12" fill="#B9C7DD" />
    <circle cx="292" cy="150" r="12" fill="#CFC6B8" />
    ${textBlock(title, 350, 160, 42, 700)}
    ${textBlock('Backend dashboard mockup', 350, 195, 18, 500, '#5F5C57')}

    <rect x="194" y="270" width="250" height="840" rx="28" fill="#FCFBF8" stroke="${palette.line}" />
    <rect x="470" y="270" width="592" height="250" rx="28" fill="#FCFBF8" stroke="${palette.line}" />
    <rect x="1100" y="270" width="306" height="250" rx="28" fill="#FCFBF8" stroke="${palette.line}" />
    <rect x="470" y="548" width="936" height="562" rx="28" fill="#FCFBF8" stroke="${palette.line}" />

    <rect x="228" y="314" width="182" height="62" rx="18" fill="${palette.blueSoft}" />
    ${textBlock('Operations', 260, 354, 24, 700, palette.blueDeep)}
    <rect x="228" y="400" width="182" height="62" rx="18" fill="#F2EEE7" />
    ${textBlock('Analytics', 270, 439, 24, 600, '#4A4742')}
    <rect x="228" y="486" width="182" height="62" rx="18" fill="#F2EEE7" />
    ${textBlock('Settings', 272, 525, 24, 600, '#4A4742')}
    <rect x="228" y="572" width="182" height="62" rx="18" fill="#F2EEE7" />
    ${textBlock('Users', 280, 611, 24, 600, '#4A4742')}

    <rect x="506" y="314" width="134" height="144" rx="24" fill="${palette.blueSoft}" />
    <rect x="662" y="314" width="134" height="144" rx="24" fill="#EEF1F7" />
    <rect x="818" y="314" width="208" height="144" rx="24" fill="#EFE9DF" />
    ${textBlock('Orders', 534, 358, 22, 600, '#4A4742')}
    ${textBlock('1,284', 534, 410, 46, 800, palette.blueDeep)}
    ${textBlock('Queue', 690, 358, 22, 600, '#4A4742')}
    ${textBlock('34', 690, 410, 46, 800, '#212121')}
    ${textBlock('Uptime', 850, 358, 22, 600, '#4A4742')}
    ${textBlock('99.8%', 850, 410, 46, 800, palette.blueDeep)}

    <rect x="1138" y="314" width="226" height="96" rx="22" fill="${palette.blue}" />
    ${textBlock('Revenue', 1170, 356, 22, 600, '#EAF0FF')}
    ${textBlock('$48.2k', 1170, 393, 34, 800, '#FFFFFF')}
    <rect x="1138" y="430" width="226" height="72" rx="20" fill="#F0ECE4" />
    ${textBlock('Active workflows', 1170, 472, 22, 600, '#4A4742')}

    <rect x="506" y="592" width="910" height="70" rx="20" fill="#F4F1EA" />
    <rect x="506" y="680" width="910" height="70" rx="20" fill="#FBF9F5" />
    <rect x="506" y="768" width="910" height="70" rx="20" fill="#F4F1EA" />
    <rect x="506" y="856" width="910" height="70" rx="20" fill="#FBF9F5" />
    <rect x="534" y="618" width="128" height="18" rx="9" fill="${palette.blueSoft}" />
    <rect x="534" y="706" width="104" height="18" rx="9" fill="${palette.blueSoft}" />
    <rect x="534" y="794" width="156" height="18" rx="9" fill="${palette.blueSoft}" />
    <rect x="534" y="882" width="114" height="18" rx="9" fill="${palette.blueSoft}" />
    <rect x="964" y="608" width="390" height="330" rx="24" fill="#FFFFFF" stroke="${palette.line}" filter="url(#softShadow)" />
    ${textBlock('Workflow', 998, 652, 24, 700)}
    <path d="${chartPath}" fill="none" stroke="${palette.blue}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
    <g>
      ${accentRows.map((x, index) => `<rect x="996" y="${724 + index * 54}" width="${index === 0 ? 242 : index === 1 ? 182 : 292}" height="20" rx="10" fill="${index === 0 ? palette.blue : index === 1 ? palette.blueSoft : '#E7E1D6'}" />`).join('')}
    </g>
    ${textBlock('Clean operations, approvals, and reporting in one view', 998, 1084, 18, 500, '#5F5C57')}
  </svg>`;
}

function mobileSvg(title, variant) {
  const topCard = variant === 'botanical' ? '#EAF3EC' : '#EEF1F7';
  const accentText = variant === 'botanical' ? 'Plant notes' : 'Product drops';
  const featureLabel = variant === 'botanical' ? 'Growth log' : 'Launch feed';
  const subtitle = variant === 'botanical' ? 'Track daily care and observations' : 'Browse styles and live inventory';

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1440" viewBox="0 0 1080 1440">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${palette.cream}" />
        <stop offset="100%" stop-color="#E8E0D4" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="24" stdDeviation="30" flood-color="#8A7E6C" flood-opacity="0.18" />
      </filter>
      <filter id="innerShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#8A7E6C" flood-opacity="0.10" />
      </filter>
    </defs>
    <rect width="1080" height="1440" fill="url(#bg)" />
    <circle cx="180" cy="156" r="130" fill="#F8F3EB" opacity="0.9" />
    <circle cx="920" cy="220" r="160" fill="#E6EEFF" opacity="0.75" />
    <circle cx="890" cy="1230" r="180" fill="#F7F1E8" opacity="0.8" />

    <rect x="214" y="96" width="652" height="1248" rx="72" fill="#111111" filter="url(#shadow)" />
    <rect x="244" y="146" width="592" height="1148" rx="52" fill="#FBF8F2" />
    <rect x="456" y="126" width="168" height="22" rx="11" fill="#383838" opacity="0.85" />
    <rect x="482" y="1170" width="116" height="10" rx="5" fill="#D8D2C7" />

    <rect x="286" y="202" width="508" height="164" rx="36" fill="${topCard}" />
    ${textBlock(title, 330, 258, 38, 800)}
    ${textBlock(subtitle, 330, 306, 20, 500, '#5D5955')}
    <rect x="650" y="236" width="112" height="96" rx="24" fill="${palette.blue}" />
    <path d="M677 302c18-34 30-44 46-62 14 18 26 32 26 58 0 25-19 42-41 42-23 0-31-17-31-38z" fill="#ffffff" opacity="0.96" />

    <rect x="286" y="400" width="508" height="120" rx="32" fill="#FFFFFF" filter="url(#innerShadow)" />
    <rect x="310" y="426" width="84" height="68" rx="22" fill="${palette.blueSoft}" />
    <rect x="414" y="430" width="282" height="16" rx="8" fill="#DDD6CA" />
    <rect x="414" y="460" width="224" height="16" rx="8" fill="#DDD6CA" />
    <rect x="700" y="428" width="70" height="48" rx="18" fill="${palette.blue}" />

    <rect x="286" y="548" width="236" height="236" rx="34" fill="#FFFDF9" />
    <rect x="558" y="548" width="236" height="236" rx="34" fill="#FFFDF9" />
    <rect x="310" y="574" width="188" height="132" rx="26" fill="#EAF1FF" />
    <rect x="582" y="574" width="188" height="132" rx="26" fill="#F1EDE4" />
    <path d="M336 684c22-42 54-54 86-54 37 0 60 18 76 44" fill="none" stroke="${palette.blue}" stroke-width="10" stroke-linecap="round" />
    <path d="M606 688c20-36 38-48 76-48 26 0 42 8 62 28" fill="none" stroke="${palette.blue}" stroke-width="10" stroke-linecap="round" />
    ${textBlock(featureLabel, 312, 744, 22, 700, '#4A4742')}
    ${textBlock('Reminders', 586, 744, 22, 700, '#4A4742')}

    <rect x="286" y="814" width="508" height="166" rx="34" fill="#FFFFFF" />
    <rect x="312" y="842" width="304" height="18" rx="9" fill="#D9D1C5" />
    <rect x="312" y="876" width="264" height="18" rx="9" fill="#D9D1C5" />
    <rect x="312" y="910" width="224" height="18" rx="9" fill="#D9D1C5" />
    <rect x="670" y="840" width="96" height="96" rx="26" fill="${palette.blue}" />
    ${textBlock(accentText, 312, 1018, 20, 700, palette.blueDeep)}

    <rect x="286" y="1004" width="508" height="128" rx="32" fill="#F4EFE6" />
    <rect x="308" y="1030" width="132" height="76" rx="22" fill="#FFFFFF" />
    <rect x="460" y="1030" width="132" height="76" rx="22" fill="#FFFFFF" />
    <rect x="612" y="1030" width="158" height="76" rx="22" fill="${palette.blueSoft}" />
    ${textBlock('Journal', 336, 1074, 20, 700, '#4A4742')}
    ${textBlock('Stats', 500, 1074, 20, 700, '#4A4742')}
    ${textBlock('Today', 654, 1074, 20, 700, palette.blueDeep)}
    <rect x="330" y="1144" width="420" height="10" rx="5" fill="#D8D2C7" />
    <rect x="330" y="1168" width="280" height="10" rx="5" fill="#D8D2C7" />
  </svg>`;
}

function svgForProject(project) {
  if (project.type === 'mobile') {
    return mobileSvg(project.title, project.filename.includes('botanical') ? 'botanical' : 'shoe-store');
  }

  const variant = project.filename.includes('klinklin')
    ? 'klinklin'
    : project.filename.includes('warehouse')
      ? 'warehouse'
      : 'summit';

  return desktopSvg(project.title, variant);
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  for (const project of projects) {
    const svg = svgForProject(project);
    const image = sharp(Buffer.from(svg));
    await image.webp({ quality: 90, effort: 6 }).toFile(path.join(outputDir, project.filename));
  }

  console.log(`Generated ${projects.length} images in ${path.relative(rootDir, outputDir)}`);
  for (const project of projects) {
    console.log(`- ${path.join('public', 'projects', project.filename)}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});