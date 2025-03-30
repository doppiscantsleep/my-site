import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from '@hono/node-server/serve-static'
import * as fs from 'fs';
import { marked } from 'marked';

function loadMarkdown(filePath: string): string {
  const markdown = fs.readFileSync(filePath, 'utf-8');
  return marked(markdown, { async: false }); // Converts Markdown to HTML
}

const app = new Hono()

app.use(renderer)
app.use('/public/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  const cloudText = loadMarkdown('./public/static/markdown/cloud.md');
  const resumeText = loadMarkdown('./public/static/markdown/resume.md');

  return c.render(
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alan DeBoer - Portfolio</title>
        <link rel="stylesheet" href="/static/css/styles.css" />
        <script src="/static/js/main.js" defer></script>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>Alan DeBoer</h1>
            <p class="subtitle">Cloud & Infrastructure Engineer</p>
            <div class="social-links">
            <p>alan.deboer@outlook.com</p>
              <a href="https://www.linkedin.com/in/alan-deboer-37b4b663" class="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </header>


  <div id="hover-display" class="hover-display">
  </div>

          <div class="grid-container">
            <div class="grid-item" data-category="cloud" data-text={cloudText}>
              <img src="/static/images/cloud.png" alt="Cloud Computing" />
              <div class="content">
                <h2>Cloud</h2>
              </div>
            </div>

            <div class="grid-item" data-category="cod">
              <img src="/static/images/code_automation.png" alt="Code & Automation" />
              <div class="content">
                <h2>Code & Automation</h2>
              </div>
            </div>

            <div class="grid-item" data-category="observability">
              <img src="/static/images/observability.png" alt="Observability" />
              <div class="content">
                <h2>Observability</h2>
              </div>
            </div>

            <div class="grid-item" data-category="networking">
              <img src="/static/images/networking.png" alt="Networking" />
              <div class="content">
                <h2>Networking</h2>
              </div>
            </div>

            <div class="grid-item" data-category="resume" data-text={resumeText}>
              <img src="/static/images/resume.png" alt="Resume" />
              <div class="content">
                <h2>Resume</h2>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
})

app.get('/test', (c) => {
  return c.render("this is a test!")
}
)

export default app