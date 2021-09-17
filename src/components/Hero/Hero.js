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
          </SectionText>
          <Button onClick={() => window.location = 'https://github.com/JamFin92'}>See My Github</Button>
      </LeftSection>
  </Section>
);

export default Hero;