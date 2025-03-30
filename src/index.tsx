import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

app.use(renderer)
app.use('/public/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.render(
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Alan DeBoer - Portfolio</title>
        <link rel="stylesheet" href="/static/styles.css" />
        <script src="/static/main.js" defer></script>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>Alan DeBoer</h1>
            <div class="social-links">
    <a href="mailto:your.email@example.com" class="social-link">Email</a>
    <a href="https://linkedin.com/in/your-profile" class="social-link">LinkedIn</a>
  </div>
            <p class="subtitle">Cloud & Infrastructure Engineer</p>
          </header>

          <div class="grid-container">
            <div class="grid-item" data-category="cloud">
              <img src="/static/cloud.png" alt="Cloud Computing" />
              <div class="content">
              <h2>Cloud</h2>
              </div>
            </div>

            <div class="grid-item" data-category="cod">
              <img src="/static/code_automation.png" alt="Infrastructure as Code" />
              <div class="content">
              <h2>Infrastructure as Code</h2>
              </div>
            </div>

            <div class="grid-item" data-category="observability">
              <img src="/static/observability.png" alt="Observability" />
              <div class="content">
              <h2>Observability</h2>
              </div>
            </div>

            <div class="grid-item" data-category="networking">
              <img src="/static/networking.png" alt="Networking" />
              <div class="content">
              <h2>Networking</h2>
              </div>
            </div>

            <div class="grid-item" data-category="resume">
              <img src="/static/resume.png" alt="Resume" />
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

export default app