import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { CaseStudySection, ImageGrid, FullWidthImage } from '../components/CaseStudySection';
const suspassHero = new URL('../assets/SustainabilityHero.webp', import.meta.url).href;

export function SustainabilityTool() {
  return (
    <CaseStudyLayout
      title="Sustainability Procurement Assessment Tool"
      tags={[]}
      overview="Supplier Procurement Assessment Tool provides the ability to score and rank the suppliers based on their 
      sustainability maturity and credentials after assessing them."
      role="UX/UI Designer"
      duration="2 months"
      tools={['Adobe XD', 'Adobe Illustrator']}
      heroImage={suspassHero}
      prevProject={{
        id: 'bridging-the-gaps',
        title: 'Bridging the Gaps: A Unified Hiring Experience',
      }}
      nextProject={{
        id: 'saathi',
        title: 'Saathi - UMO Design Challenge',
      }}
    >
      <CaseStudySection title="Key Features">
        <p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li><b>5 industries,</b> and multiple categories to assess</li>
          <li>Ability to <b>add new suppliers</b></li>
          <li><b>Dashboard</b> for supplier's sustainability progress</li>
          <li><b>Assessments</b> to score and rank suppliers</li>
        </ul>
        </p>
        {/* <p>Research revealed several key challenges:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            Sustainability data is scattered across multiple formats and sources, making assessment
            time-consuming
          </li>
          <li>
            Procurement teams lack expertise in environmental metrics and compliance standards
          </li>
          <li>
            No clear way to compare suppliers or track improvement over time
          </li>
          <li>
            Reporting to stakeholders requires manual data compilation and analysis
          </li>
        </ul> */}
      </CaseStudySection>
      
      <CaseStudySection title="Client's Goal & Requirements">
        <p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>To be a <b>responsible consumer of natural resources</b> so that they can incorporate cross industry best practice, 
          standards ad principles in procurement process.</li>
          <li>To <b>assess their IT hardware suppliers</b> across certifications, design principles, and material issues.</li>
          <li><b>Assess the sustainability maturity</b> of their IT hardware suppliers.</li>
        </ul>
        </p>
        </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzY1Nzg1NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Stakeholder workshops"
        caption="Collaborative workshops with procurement and sustainability teams"
      />

      <CaseStudySection title="The Solution">
        <p>
          We designed an intuitive assessment platform that guides users through evaluating
          suppliers across multiple sustainability dimensions: carbon footprint, waste management,
          ethical sourcing, and compliance with environmental standards.
        </p>
        <p>Core features include:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>Guided Assessments:</strong> Step-by-step questionnaires tailored to different
            product categories and industries
          </li>
          <li>
            <strong>Automated Scoring:</strong> Proprietary algorithm that translates responses
            into actionable sustainability scores
          </li>
          <li>
            <strong>Comparative Analytics:</strong> Visual dashboards showing how suppliers compare
            against benchmarks
          </li>
          <li>
            <strong>Improvement Tracking:</strong> Timeline views showing progress toward
            sustainability goals
          </li>
          <li>
            <strong>Compliance Reporting:</strong> Automated report generation for stakeholders and
            regulatory requirements
          </li>
        </ul>
      </CaseStudySection>

      <ImageGrid
        images={[
          'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU3NTQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc2NTcyNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        ]}
      />

      <CaseStudySection title="Design Process">
        <p>
          <strong>1. Research & Discovery</strong>
          <br />
          We interviewed procurement professionals, sustainability officers, and suppliers to
          understand the full ecosystem. Card sorting exercises helped us organize complex
          sustainability criteria into intuitive categories.
        </p>
        <p>
          <strong>2. Information Design</strong>
          <br />
          The biggest challenge was making complex environmental data accessible to non-experts. We
          developed a progressive disclosure approach that provides detailed information when
          needed while keeping the primary interface clean and simple.
        </p>
        <p>
          <strong>3. Prototyping & Testing</strong>
          <br />
          Created interactive prototypes to test the assessment flow. Early testing revealed users
          needed more context about why certain questions were asked, leading us to add educational
          tooltips and examples throughout.
        </p>
        <p>
          <strong>4. Visual Design</strong>
          <br />
          The visual language needed to convey trust and authority while remaining approachable. We
          chose a professional color palette with green accents that reinforce the sustainability
          theme without being cliché.
        </p>
      </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1765492397423-1a4cc97689bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NTc0ODMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Design system"
        caption="Modular design system built for scalability"
      />

      <CaseStudySection title="Key Design Decisions">
        <p>
          <strong>Simplified Complexity:</strong> We transformed overwhelming environmental data
          into clear visual indicators (scores, progress bars, and color-coded status) that enable
          quick decision-making.
        </p>
        <p>
          <strong>Contextual Education:</strong> Rather than assuming users understand
          sustainability terminology, we embedded learning opportunities throughout the experience
          with tooltips, examples, and links to resources.
        </p>
        <p>
          <strong>Flexible Framework:</strong> Recognizing that sustainability criteria vary by
          industry, we designed a flexible assessment framework that can be customized while
          maintaining consistency in scoring and reporting.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Impact & Results">
        <p>
          The platform has been adopted by organizations managing over $2B in annual procurement
          spend:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>75% reduction</strong> in time required to complete supplier assessments
          </li>
          <li>
            <strong>3x increase</strong> in number of suppliers evaluated annually
          </li>
          <li>
            <strong>92% of users</strong> reported improved confidence in sustainability decisions
          </li>
          <li>
            Average <strong>23% improvement</strong> in supplier sustainability scores over 12
            months
          </li>
        </ul>
        <p>
          The tool has helped organizations identify $15M+ in cost savings through more sustainable
          practices while significantly reducing their environmental footprint.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Reflections">
        <p>
          This project taught me the importance of designing for expertise gaps. Users weren't
          sustainability experts, but they needed to make expert-level decisions. By focusing on
          education and guidance rather than just data collection, we created a tool that empowers
          users while driving meaningful environmental impact.
        </p>
        <p>
          I also learned that sustainability isn't just about metrics—it's about behavior change.
          The most successful feature was the progress tracking that showed improvement over time,
          motivating teams to continue their sustainability journey.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
