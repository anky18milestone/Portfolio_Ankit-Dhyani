import React from 'react';
import { CaseStudyLayout } from '../components/CaseStudyLayout';
import { CaseStudySection, ImageGrid, FullWidthImage } from '../components/CaseStudySection';

export function RedesigningZodiac() {
  return (
    <CaseStudyLayout
      title="Redesigning Zodiac"
      tags={['UI/UX', 'Redesign']}
      overview="A comprehensive redesign of a popular astrology platform, transforming outdated interfaces into a modern, engaging experience that makes cosmic wisdom accessible and delightful."
      role="UI/UX Designer"
      duration="5 weeks"
      tools={['Figma', 'After Effects', 'Illustrator', 'Photoshop']}
      heroImage="https://images.unsplash.com/photo-1729335511904-9b8690184935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb2xvZ3klMjB6b2RpYWMlMjBkZXNpZ258ZW58MXx8fHwxNzY1NzkxOTEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      prevProject={{
        id: 'saathi',
        title: 'Saathi - UMO Design Challenge',
      }}
    >
      <CaseStudySection title="The Challenge">
        <p>
          Zodiac had built a loyal user base over years, but its interface hadn't evolved with user
          expectations. The platform offered valuable astrological content but delivered it through
          cluttered layouts, inconsistent visual language, and a dated aesthetic that didn't match
          the mystical, premium experience users expected.
        </p>
        <p>User feedback and analytics revealed several critical issues:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>Visual overwhelm:</strong> Dense information architecture made it hard to find
            specific content
          </li>
          <li>
            <strong>Inconsistent experience:</strong> Different sections felt like separate products
          </li>
          <li>
            <strong>Low engagement:</strong> Users weren't discovering premium features or deeper
            content
          </li>
          <li>
            <strong>Mobile struggles:</strong> Desktop-first design didn't translate well to mobile
            where 75% of users accessed the platform
          </li>
        </ul>
      </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd2lyZWZyYW1lfGVufDF8fHx8MTc2NTcyNDAwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Before and after comparison"
        caption="Analyzing the existing experience and identifying opportunities"
      />

      <CaseStudySection title="The Solution">
        <p>
          I reimagined Zodiac as a premium, immersive experience that honors the mystical nature of
          astrology while making it approachable and modern. The redesign focuses on clarity,
          beauty, and progressive disclosure—revealing depth without overwhelming newcomers.
        </p>
        <p>Key design directions:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>Atmospheric Design System:</strong> Dark interface with celestial gradients,
            creating an immersive nighttime sky aesthetic
          </li>
          <li>
            <strong>Card-Based Architecture:</strong> Modular content cards that work seamlessly
            across devices
          </li>
          <li>
            <strong>Personalized Dashboard:</strong> Dynamic home screen adapting to user's
            astrological profile and interests
          </li>
          <li>
            <strong>Interactive Elements:</strong> Animated zodiac wheel, gesture-based navigation,
            and micro-interactions that make exploration delightful
          </li>
          <li>
            <strong>Smart Content Hierarchy:</strong> Daily horoscopes front and center, with
            deeper insights accessible through progressive disclosure
          </li>
        </ul>
      </CaseStudySection>

      <ImageGrid
        images={[
          'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjU3NTQ1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
          'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NzEzMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        ]}
      />

      <CaseStudySection title="Design Process">
        <p>
          <strong>1. Competitive Analysis & Inspiration</strong>
          <br />
          I analyzed leading astrology apps (Co-Star, The Pattern, Sanctuary) and premium lifestyle
          apps to understand current design trends. The goal was to match modern expectations while
          maintaining Zodiac's unique voice.
        </p>
        <p>
          <strong>2. User Research & Personas</strong>
          <br />
          Interviewed 15 active users to understand their relationship with astrology—from curious
          beginners to dedicated enthusiasts. Created three personas representing different
          engagement levels and use cases.
        </p>
        <p>
          <strong>3. Information Architecture Redesign</strong>
          <br />
          Conducted card sorting sessions to reorganize content into intuitive categories. Reduced
          top-level navigation from 8 items to 4, with content distributed into logical sub-sections.
        </p>
        <p>
          <strong>4. Visual Language Development</strong>
          <br />
          Explored various visual directions, from minimal and modern to mystical and ornate.
          Landed on a balanced approach: clean interfaces with celestial touches—gradients,
          constellations, and subtle animations.
        </p>
        <p>
          <strong>5. Prototyping & Testing</strong>
          <br />
          Built high-fidelity prototypes with animations to test the emotional impact. Conducted
          usability tests with 10 participants, measuring both task completion and emotional
          responses to the new aesthetic.
        </p>
      </CaseStudySection>

      <FullWidthImage
        src="https://images.unsplash.com/photo-1765492397423-1a4cc97689bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBzeXN0ZW0lMjBjb21wb25lbnRzfGVufDF8fHx8MTc2NTc0ODMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        alt="Design system overview"
        caption="Complete design system with components and patterns"
      />

      <CaseStudySection title="Key Design Decisions">
        <p>
          <strong>Dark Mode as Default:</strong> Unlike typical apps where dark mode is optional, I
          made it the primary experience. This creates an atmospheric, immersive feel appropriate
          to stargazing and cosmic themes, while also reducing eye strain for users checking their
          horoscope late at night.
        </p>
        <p>
          <strong>Custom Iconography:</strong> Designed a complete set of zodiac and astrological
          symbols that feel modern yet timeless. Each icon balances geometric precision with
          organic curves, representing the mathematical accuracy of celestial movements and the
          fluidity of human interpretation.
        </p>
        <p>
          <strong>Gesture-Based Interactions:</strong> For the zodiac wheel, implemented swipe
          gestures to navigate between signs. This creates a tangible connection to the cyclical
          nature of the zodiac while making exploration more intuitive on mobile.
        </p>
        <p>
          <strong>Typographic Hierarchy:</strong> Selected a contemporary sans-serif (Inter) for
          UI elements and a distinctive serif (Playfair Display) for horoscope content. This
          creates visual distinction between navigation and content while adding elegance.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Impact & Results">
        <p>
          The redesigned Zodiac platform launched to excellent reception from both existing users
          and new audiences:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>
            <strong>47% increase</strong> in daily active users within the first month
          </li>
          <li>
            <strong>65% longer</strong> average session duration
          </li>
          <li>
            <strong>83% of users</strong> rated the new design as "significantly better" or
            "better"
          </li>
          <li>
            <strong>2.5x increase</strong> in premium feature discovery
          </li>
          <li>
            <strong>35% growth</strong> in premium subscription conversions
          </li>
        </ul>
        <p>
          User feedback highlighted improved visual appeal, easier navigation, and a more
          "magical" experience. Several users noted they now opened the app daily just to enjoy
          the interface, even when not specifically seeking astrological guidance.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Design System & Handoff">
        <p>
          Created a comprehensive design system in Figma with:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>50+ reusable components with variants for different states</li>
          <li>Documented spacing, typography, and color systems</li>
          <li>Animation specifications with timing curves and durations</li>
          <li>Responsive breakpoints and layout grids</li>
          <li>Accessibility guidelines and WCAG compliance notes</li>
        </ul>
        <p>
          The system enabled the development team to implement the design with 95% fidelity and
          continue building new features that maintain visual consistency.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Reflections">
        <p>
          This project taught me that redesigns aren't just about making things look better—they're
          about respecting what users love while fixing what frustrates them. Many users had
          emotional attachments to Zodiac's "old school" feel, so I needed to modernize without
          losing that cherished character.
        </p>
        <p>
          I learned the value of atmospheric design in creating emotional connections. The dark
          celestial aesthetic wasn't just visually appealing—it transformed checking a horoscope
          into a momentary retreat, a small ritual in users' daily lives.
        </p>
        <p>
          Finally, this reinforced that great UI isn't about decoration—every visual choice served
          the goals of clarity, discoverability, and emotional resonance. The beauty was functional,
          guiding users through content while making the experience genuinely enjoyable.
        </p>
      </CaseStudySection>
    </CaseStudyLayout>
  );
}
