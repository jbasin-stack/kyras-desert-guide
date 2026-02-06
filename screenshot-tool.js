// Simple screenshot tool using Puppeteer
import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pages = [
  { name: 'home', path: '/' },
  { name: 'constellations', path: '/constellations' },
  { name: 'culture', path: '/culture' },
  { name: 'tips', path: '/tips' },
  { name: 'journal', path: '/journal' }
];

const viewports = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 }
];

async function takeScreenshots() {
  const browser = await puppeteer.launch({ headless: true });

  for (const page of pages) {
    for (const viewport of viewports) {
      const browserPage = await browser.newPage();
      await browserPage.setViewport(viewport);

      try {
        await browserPage.goto(`http://localhost:5173${page.path}`, {
          waitUntil: 'networkidle0',
          timeout: 10000
        });

        // Wait a bit for animations
        await browserPage.waitForTimeout(500);

        const filename = join(__dirname, 'screenshots', `${page.name}-${viewport.name}.png`);
        await browserPage.screenshot({ path: filename, fullPage: true });
        console.log(`✓ Captured: ${page.name} - ${viewport.name}`);
      } catch (error) {
        console.error(`✗ Failed: ${page.name} - ${viewport.name}:`, error.message);
      }

      await browserPage.close();
    }
  }

  await browser.close();
  console.log('\n✨ All screenshots captured!');
}

takeScreenshots().catch(console.error);
