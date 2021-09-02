import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              Hi! I'm James. <br />
              Join me on my journey in Software Engineering!
          </SectionTitle>
          <SectionText>
              Current stacks include:
              Java, C#, SQL (PostgreSQL), and ReactJS. <br/>
              The quest for knowledge never stops! More to come soon.
          </SectionText>
          <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;