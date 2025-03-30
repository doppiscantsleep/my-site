import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from '@hono/node-server/serve-static'
import { marked } from 'marked';


const cloudText = marked(`# Cloud Expertise
  - AWS & Azure expertise
  - Terraform & CloudFormation`);

const resumeText = marked(`## Senior Network Engineer - Hertz 
  ### November 2023 - Present
  - Responsible for Observability tooling:
    - Grafana, InfluxDB, Infinity, and Prometheus
  - Automation tools built with NodeJS and Deno
  - Responsible for AWS Networking globally:
    - DXGWs, VIFs, TGWs, VPCs, and route tables
    - Route53 VPC resolvers and inbound/outbound endpoints
  - Lead engineer that writes project/migration MOPs
  - Responsible for security inspection VPCs utilizing Check Point firewalls
  - Responsible for BloxOne Threat Defense, SaaS service for external DNS lookups
  - Responsible for all Check Point firewalls running in AWS

## DevOps Security Engineer – TOMTOM
### (June 2020 – September 2023)
  - Responsible for 30+ Palo Alto firewalls at our branch offices and our Datacenters 
  - Responsible for Panorama, the management system for our Palo Alto firewalls. 
  - Models of Palo Altos I am familiar with: PA-5260, 5060, 3260, 3050, 820, 460 and 220s 
  - Responsible for our global client VPN solution, Ivanti/Pulse Secure. 
  - Responsible for VPN connectivity to our partners via IPsec tunnels. 
  - Experience with AWS: VPCs, IGWs, NGWs, Security Groups, Route tables, Direct Connects and other miscellaneous networking services. 
  - Responsible for managing groups of Linux servers with Ansible, mostly using Ansible for vulnerability patching and running ad hoc commands 
  - Experience with deploying public cloud infrastructure with Terraform, mostly used to replicate traditional on-premise infrastructure in Azure or AWS as a POC. 
  - Team lead on the migration of our network monitoring solution UMI/Nagios to LogicMonitor, a new implementation. 
  - Team lead on our ISO 27K audit with regards to Network Services`);

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