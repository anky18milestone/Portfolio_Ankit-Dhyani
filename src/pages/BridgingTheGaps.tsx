import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { CaseStudySection, FullWidthImage } from '../components/CaseStudySection';
import fivePillarsImg from '../assets/five-pillars.png';

export function BridgingTheGaps() {
  return (
    <CaseStudyLayout
      title="Bridging the Gaps: A Unified Hiring Experience"
      tags={['UI/UX', 'SaaS', 'ATS', 'AI']}
      overview="A comprehensive Applicant Tracking System that leverages AI to streamline recruitment processes, reduce hiring time, and create a unified experience for both recruiters and candidates."
      role="Lead Product Designer"
      duration="6 months"
      tools={['Figma', 'FigJam', 'Maze', 'Adobe Suite']}
      heroImage="https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNydWl0bWVudCUyMGhpcmluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU3OTE5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      nextProject={{
        id: 'sustainability-tool',
        title: 'Sustainability Procurement Assessment Tool',
      }}
    >
      <CaseStudySection title="Project Overview">
        <p>
          The Talent Acquisition Group (TAG) relied on a tangle of disconnected tools—Excel for RRF
          creation, a separate recruitment platform, and another system for vendor management. The
          result: slow hiring, duplicate work, and high licensing costs.
        </p>
        <p>
          After a decade on the legacy stack, shifting felt risky. Data migration, missing modules
          in other tools, and change resistance were major blockers. My mission as a UX Designer was
          to bridge these gaps—leading research, shaping workflows, and ensuring business and user
          goals stayed aligned from day one.
        </p>
      </CaseStudySection>

      <CaseStudySection title="My Role & Team">
        <p>
          <strong>My contributions</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Led primary research: user interviews, contextual inquiries, competitive analysis</li>
          <li>Created and refined swim-lane diagrams for seamless BA handoff</li>
          <li>Designed and tested wireframes and prototypes with real-time feedback</li>
          <li>Defined business rules to keep experiences logically consistent</li>
          <li>Partnered with QA for full and regression testing</li>
        </ul>
        <p className="mt-4">
          <strong>Team & tools</strong>: Developers, PMs, Scrum Master, BA, QA — using Figma, Miro,
          ChatGPT, MS Visio.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Five Pillars of UX: Empathise, Define, Ideate, Prototype, Test" />
      <FullWidthImage src={fivePillarsImg} alt="Five pillars of UX" />

      <CaseStudySection title="Research & Discovery">
        <p>
          <strong>Users</strong>: Talent Acquisition (leads, recruiters), Business (RRF creators),
          Approvers (decision-makers).
        </p>
        <p className="mt-4">
          <strong>Key pain points</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Fragmented workflow across three platforms</li>
          <li>Unsustainable per-user licensing costs</li>
          <li>Hesitance to adopt a new platform after 10+ years</li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Design Process">
        <p>
          <strong>From research to wireframes</strong>: Swim-lanes to expose inefficiencies, user
          flows for a single-platform experience, lo-fi wireframes for early validation, hi-fi
          prototypes after iterative testing.
        </p>
        <p className="mt-4">
          <strong>Overcoming challenges</strong>
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>
            Lack of senior leadership / roadmap → frequent stakeholder touchpoints to align and
            iterate.
          </li>
          <li>
            High team turnover → documented decisions for continuity and faster onboarding.
          </li>
        </ul>
        <p className="mt-4">
          <strong>Usability testing</strong>: Feedback at every stage (swim-lanes, wireframes,
          prototypes, deployment) with backlog prioritization for critical fixes first.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Impact & Results">
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>30% reduction in task completion time</li>
          <li>Higher recruiter efficiency via AI assistance and suggestions</li>
          <li>Significant licensing cost savings by consolidating tools in-house</li>
          <li>Improved adoption and faster onboarding from a unified, intuitive experience</li>
          <li>Operational efficiency across teams with fewer tools and clearer collaboration</li>
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
