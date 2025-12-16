import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { CaseStudySection, ImageGrid, FullWidthImage } from '../components/CaseStudySection';

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
      <CaseStudySection title="The Challenge">
        <p>
          Traditional recruitment processes are fragmented, time-consuming, and often create a
          disconnected experience for both hiring teams and candidates. Recruiters juggle multiple
          tools, lose track of candidate communications, and struggle to make data-driven hiring
          decisions.
        </p>
        <p>
          Through extensive research with 15+ HR professionals and 30+ job seekers, we identified
          three critical pain points:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>Recruiters spend 40% of their time on administrative tasks instead of evaluation</li>
          <li>Candidates experience long periods of silence without status updates</li>
          <li>Hiring teams lack visibility into recruitment pipeline and bottlenecks</li>
        </ul>
      </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzY1Nzg1NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="User research and interviews"
        caption="Conducting user interviews with HR professionals"
      />

      <CaseStudySection title="The Solution">
        <p>
          We designed an intelligent ATS platform that automates repetitive tasks while keeping
          humans at the center of decision-making. The solution integrates AI-powered candidate
          matching, automated status updates, and comprehensive analytics into a single, intuitive
          interface.
        </p>
        <p>Key features include:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>AI-Powered Matching:</strong> Smart algorithms analyze job requirements and
            candidate profiles to surface the best matches
          </li>
          <li>
            <strong>Unified Dashboard:</strong> A single source of truth for all recruitment
            activities, eliminating tool-switching
          </li>
          <li>
            <strong>Automated Communication:</strong> Contextual, personalized candidate updates at
            every stage
          </li>
          <li>
            <strong>Analytics & Insights:</strong> Real-time metrics on pipeline health, time to
            hire, and bottlenecks
          </li>
        </ul>
      </CaseStudySection>

      <ImageGrid
        images={[
          'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc2NTcyNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU3NTQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        ]}
      />

      <CaseStudySection title="Design Process">
        <p>
          The design process was highly collaborative and iterative, involving continuous feedback
          from stakeholders and users at every stage.
        </p>
        <p>
          <strong>1. Discovery & Research</strong>
          <br />
          We conducted contextual inquiries with recruiters to understand their workflows,
          interviewed candidates about their job search experiences, and analyzed competitor
          products to identify opportunities for differentiation.
        </p>
        <p>
          <strong>2. Information Architecture</strong>
          <br />
          We mapped out the entire recruitment workflow and created a flexible information
          architecture that could scale with different hiring processes across various companies.
        </p>
        <p>
          <strong>3. Wireframing & Prototyping</strong>
          <br />
          Low-fidelity wireframes helped us quickly test concepts with users. We iterated through 3
          major versions based on usability testing feedback before moving to high-fidelity
          designs.
        </p>
        <p>
          <strong>4. Design System</strong>
          <br />
          Built a comprehensive design system with reusable components, ensuring consistency across
          the entire platform and enabling faster iteration.
        </p>
      </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1765492397423-1a4cc97689bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NTc0ODMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Design system components"
        caption="Comprehensive design system for the ATS platform"
      />

      <CaseStudySection title="Impact & Results">
        <p>
          The unified ATS platform transformed the hiring process for our pilot customers,
          delivering measurable improvements across key metrics:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>62% reduction</strong> in time spent on administrative tasks
          </li>
          <li>
            <strong>45% faster</strong> average time to hire
          </li>
          <li>
            <strong>89% of candidates</strong> reported improved communication and transparency
          </li>
          <li>
            <strong>4.8/5 user satisfaction</strong> rating from recruiters
          </li>
        </ul>
        <p>
          The platform is now being used by over 50 companies, processing thousands of applications
          monthly and helping teams make better, faster hiring decisions.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          This project reinforced the importance of balancing automation with human judgment. While
          AI can significantly reduce manual work, hiring decisions should always remain in human
          hands. We learned that transparency in AI recommendations builds trust and adoption.
        </p>
        <p>
          Additionally, we discovered that candidate experience is just as important as recruiter
          efficiency. By designing for both sides of the hiring equation, we created a platform
          that serves everyone in the recruitment ecosystem.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
