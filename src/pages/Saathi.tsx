import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { CaseStudySection, ImageGrid, FullWidthImage } from '../components/CaseStudySection';

export function Saathi() {
  return (
    <CaseStudyLayout
      title="Saathi - UMO Design Challenge"
      tags={['Mobile App', 'Rescue', 'UI/UX']}
      overview="A mobile emergency response application designed to connect people in distress with nearby helpers and emergency services, reducing response time and potentially saving lives."
      role="Product Designer"
      duration="3 weeks (Design Challenge)"
      tools={['Figma', 'Protopie', 'Illustrator']}
      heroImage="https://images.unsplash.com/photo-1587377838987-42165934161d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBlbWVyZ2VuY3l8ZW58MXx8fHwxNzY1NzkxOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      prevProject={{
        id: 'sustainability-tool',
        title: 'Sustainability Procurement Assessment Tool',
      }}
      nextProject={{
        id: 'redesigning-zodiac',
        title: 'Redesigning Zodiac',
      }}
    >
      <CaseStudySection title="The Challenge">
        <p>
          The UMO Design Challenge brief asked: "How might we leverage community networks to
          provide faster emergency response in areas where official services are delayed or
          unavailable?"
        </p>
        <p>
          In many situations—medical emergencies, accidents, natural disasters—the first few
          minutes are critical. However, formal emergency services often face delays due to
          traffic, distance, or resource constraints. Meanwhile, ordinary people nearby could
          potentially help if they were aware and equipped to respond.
        </p>
        <p>The core challenges were:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>How to quickly connect those in need with nearby helpers in crisis moments</li>
          <li>How to verify helper credibility while maintaining speed</li>
          <li>How to provide guidance to helpers who may not have emergency training</li>
          <li>How to ensure user safety and privacy in vulnerable situations</li>
        </ul>
      </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1582601231162-132ca60713d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcmVzZWFyY2glMjBpbnRlcnZpZXd8ZW58MXx8fHwxNzY1Nzg1NTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Problem space research"
        caption="Researching emergency response patterns and user pain points"
      />

      <CaseStudySection title="The Solution">
        <p>
          Saathi (meaning "companion" in Hindi) is a mobile app that creates a community-driven
          emergency response network. When someone needs help, the app alerts verified helpers
          within a configurable radius, providing them with location, emergency type, and guided
          instructions.
        </p>
        <p>Key features designed for the challenge:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>One-Tap SOS:</strong> Simplified emergency activation that works even with
            limited motor control
          </li>
          <li>
            <strong>Smart Helper Matching:</strong> Algorithm prioritizes nearby helpers with
            relevant skills (medical training, first aid certification)
          </li>
          <li>
            <strong>Guided Response:</strong> Step-by-step instructions for helpers based on
            emergency type
          </li>
          <li>
            <strong>Multi-Channel Alert:</strong> Simultaneous notification to community helpers
            and official emergency services
          </li>
          <li>
            <strong>Safety Features:</strong> Real-time location sharing, automatic recording, and
            emergency contact notification
          </li>
        </ul>
      </CaseStudySection>

      <ImageGrid
        images={[
          'https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc2NTcyNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NzEzMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        ]}
      />

      <CaseStudySection title="Design Process">
        <p>
          <strong>1. Research & Empathy</strong>
          <br />
          Despite the compressed timeline, research was critical. I interviewed 8 people about
          their experiences with emergencies, studied emergency response systems globally, and
          analyzed existing community alert apps to understand what works and what doesn't.
        </p>
        <p>
          <strong>2. Defining Core User Flows</strong>
          <br />
          I identified two primary user journeys: the person in distress and the helper responding.
          Both needed to be extremely simple because stress and time pressure would be factors.
          Every unnecessary tap or decision point was eliminated.
        </p>
        <p>
          <strong>3. Rapid Prototyping</strong>
          <br />
          Created multiple low-fidelity prototypes focusing on the critical moments: activating an
          SOS, receiving an alert, and responding. Tested with 12 participants using realistic
          stress scenarios (e.g., "You have 10 seconds to call for help").
        </p>
        <p>
          <strong>4. Addressing Safety Concerns</strong>
          <br />
          One key insight from testing was the fear of false alarms and malicious use. I added
          features like confirmation screens (that can be skipped in extreme urgency), helper
          verification, and a rating system to build community trust over time.
        </p>
      </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1765492397423-1a4cc97689bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NTc0ODMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Mobile interface designs"
        caption="Final mobile interface design system"
      />

      <CaseStudySection title="Design Decisions">
        <p>
          <strong>High Contrast, Large Targets:</strong> Emergency situations often involve reduced
          visibility or shaking hands. All interactive elements are large, highly visible, and work
          with gloves or wet hands.
        </p>
        <p>
          <strong>Progressive Disclosure:</strong> The SOS screen is deliberately simple—just one
          big button. Additional options (select emergency type, add details) appear only after
          activation so they don't slow down critical moments.
        </p>
        <p>
          <strong>Color Psychology:</strong> Used red sparingly and strategically only for actual
          emergencies. Helper mode uses calming blues to keep responders focused and clear-headed.
        </p>
        <p>
          <strong>Accessibility First:</strong> Designed for voice activation, screen reader
          support, and one-handed use. The app needed to work for everyone, regardless of ability.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Results & Recognition">
        <p>
          Saathi was selected as a finalist in the UMO Design Challenge, competing against 200+
          submissions from designers worldwide. The judges specifically recognized:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>Thoughtful balance between speed and safety</li>
          <li>Clear consideration of real-world constraints and edge cases</li>
          <li>Inclusive design approach addressing diverse user needs</li>
          <li>Practical implementation strategy that could scale</li>
        </ul>
        <p>
          The prototype was presented to emergency response professionals who provided positive
          feedback on the community-driven approach and expressed interest in pilot programs.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Key Learnings">
        <p>
          This project reinforced that good design under constraints requires ruthless
          prioritization. In an emergency, every second matters—so every design decision must
          either save time or save lives.
        </p>
        <p>
          I also learned the importance of designing for emotional states. Users interacting with
          Saathi would be scared, stressed, or in pain. The interface needed to be calming and
          confidence-inspiring even while facilitating urgent action.
        </p>
        <p>
          Finally, this challenge highlighted the power of community-centered design. Technology
          alone can't solve every problem, but it can help people help each other—and that's often
          more powerful than any algorithm.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
