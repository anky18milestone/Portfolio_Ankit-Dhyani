import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { CaseStudySection, FullWidthImage } from '../components/CaseStudySection';

const fivePillarsImg = new URL('../assets/five-pillars.png', import.meta.url).href;
const loginScreen = new URL('../assets/User & Vendor Login.png', import.meta.url).href;
const dashboardActivity = new URL('../assets/Dashboard-Activity.png', import.meta.url).href;

export function BridgingTheGaps() {
  return (
    <CaseStudyLayout
      title="Bridging the Gaps: A Unified Hiring Experience"
      tags={[]}
      overview="A comprehensive Applicant Tracking System that leverages AI to streamline recruitment processes, reduce hiring time, and create a unified experience for both recruiters and candidates."
      role="UX/UI Designer"
      duration="6 months"
      tools={['Figma', 'Jira', 'Confluence', 'Miro', 'MS Visio']}
      // heroImage="https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMGhpcmluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU3OTE5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      heroImage={loginScreen}
      nextProject={{
        id: 'sustainability-tool',
        title: 'Sustainability Procurement Assessment Tool',
      }}
    >
      <CaseStudySection title="Project Overview">
        <p>
<b>Setting the Stage</b>
<br></br>
Imagine a fast-growing company struggling to manage its recruitment process. The Talent Acquisition Group (TAG) 
found themselves entangled in a web of disconnected tools—Excel spreadsheets for RRF creation, a separate recruitment software, 
and another system for vendor management. This not only slowed down their hiring but also cost the company a fortune in licensing fees.
<br></br>
<br></br>
<b>The Challenge</b>
<br></br>
TAG needed a centralized, cost-effective solution that would streamline the hiring process and eliminate redundant tools. 
However, a decade of reliance on the existing system made the transition daunting. Resistance to change, data migration concerns, 
and the absence of certain key modules in other available tools created significant roadblocks.

<br></br>
<br></br>
<b>My Mission</b>
<br></br>
My role as a UX Designer was not just to create an intuitive interface but to bridge the gaps in the hiring process—right from research to deployment. 
Unlike many projects where UX kicks in after business requirements are defined, I was involved from the outset, leading research efforts and structuring 
workflows before Business Analysts translated them into user stories. This early involvement allowed me to ensure that design decisions aligned with both user needs and business goals, laying the foundation for a seamless and unified hiring experience.
</p>
      </CaseStudySection>

      <CaseStudySection title="My Role & Team">
        <p>
          <strong>My contributions</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>Led primary research:</b> user interviews, contextual inquiries, competitive analysis</li>
          <li><b>Created and refined swim-lane diagrams</b> ensuring seamless handover to the Business Analyst.</li>
          <li><b>Designed and tested wireframes and prototypes,</b> incorporating real-time user feedback.</li>
          <li><b>Defined business rules</b> for most features to maintain logical consistency.</li>
          <li><b>Partnered with QA</b> for full and regression testing</li>
        </ul>
        <p>
          <strong>Teams & Tools</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>Cross-functional Team:</b> Developers, Project Managers, Scrum Master, Business Analyst, QA</li>
          <li><b>Tools Used:</b> Figma, Miro, ChatGPT, MS Visio</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Five Pillars of UX: Empathise, Define, Ideate, Prototype, Test" />
      <FullWidthImage src={fivePillarsImg} alt="Five pillars of UX" />

      <CaseStudySection title="Research & Discovery">
      <p>
          <strong>Understanding the Users</strong>
        </p>
        Through my research, I identified three primary user groups:
        <br></br>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>Talent Acquisition Team:</b> Leads and recruiters, responsible for hiring.</li>
          <li><b>Business Team:</b> Created RRFs to initiate the hiring process.</li>
          <li><b>Approvers:</b> Decision-makers who reviewed and approved hiring requests.</li>
        </ul>
        <p>
          <strong>Key Pain Points</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>Fragmented Workflow:</b> Users had to juggle between three platforms to complete a single hiring cycle.</li>
          <li><b>High Licensing Costs:</b> The per-user license cost for the existing tool was financially unsustainable.</li>
          <li><b>Reluctance to Change:</b> Decade long reliance on legacy systems slowed adoption.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Design Process">
        <p>
          <strong>From research to prototypes</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>Swim-lanes</b> were created based on user observations to map out inefficiencies.</li>
          <li><b>User Flows</b> were designed to propose a seamless hiring process within a single platform.</li>
          <li><b>Lo-fi Wireframes</b> were developed and tested for early feedback.</li>
          <li><b>Hi-fi Prototypes</b> were built after multiple iterations, ensuring the final design aligned with user needs.</li>
        </ul>
        <FullWidthImage src={dashboardActivity} alt="Dashboard Activity" />
        <p>
          <strong>Overcoming Challenges</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>Lack of Senior Leadership & Roadmap:</b>
            <ul className="list-circle list-inside space-y-2 ml-4">
            <li>With no clear direction, we iterated multiple times before reaching a validated solution.</li>
            </ul>
            <ul className="list-circle list-inside space-y-2 ml-4">
            <li><b>Solution:</b> Frequent stakeholder discussions ensured alignment and incremental improvements.</li>
            </ul>
          </li>
          <br></br>
          <li><b>High Team Turnover:</b>
            <ul className="list-circle list-inside space-y-2 ml-4">
            <li>New team members required repeated knowledge transfers, slowing progress.</li>
            </ul>
            <ul className="list-circle list-inside space-y-2 ml-4">
            <li><b>Solution:</b> Documenting design decisions ensured continuity and minimized rework.</li>
            </ul>
          </li>
        </ul>
        <p>
          <strong>Usability Testing</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Continuous feedback was incorporated at <b>multiple touchpoints-</b>swim-lanes, wireframing, prototyping, and deployment.</li>
          <li><b>Backlog prioritization</b> ensured that critical improvements were addressed first, while other enhancements were scheduled for future releases.</li>
        </ul>
        <p></p>
      </CaseStudySection>

      <CaseStudySection title="Impact & Results">
      <p>
          <strong>Measurable Success</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>30% reduction in task completion time:</b> Users could now manage recruitment from a single platform.</li>
          <li><b>Increased efficiency</b> AI-powered automation and intelligent suggestions improved recruiter productivity.</li>
          <li><b>Significant cost savings</b> Eliminated high licensing fees by bringing recruitment in-house.</li>
        </ul>
        <p>
          <strong>Business Impact</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>Improved adoption rates:</b> A user-friendly design led to faster onboarding and minimal resistance.</li>
          <li><b>Operational efficiency:</b> Reduced the need for multiple tools, streamlining collaboration across teams.</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Learnings & Reflections">
        <p>
          <strong>What went well</strong>: Cross-functional collaboration; early user involvement
          led to iterative improvements and higher adoption.
        </p>
        <p className="mt-4">
          <strong>What could improve</strong>: Internal tools deserve parity with client-facing
          products; tighter MVP definition for phased rollouts.
        </p>
        <p className="mt-4">
          <strong>If given more time</strong>: Deepen collaboration rituals, add structured feedback
          loops post-launch, and target a path to launch for external markets.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
