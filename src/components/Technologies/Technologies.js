import React from 'react';
import { SiSolidity} from 'react-icons/si';
import { DiFirebase, DiReact} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider/>
      <br />
        <SectionTitle>Technologies</SectionTitle>
          <SectionText>
              I'm focused on Full-Stack Development, starting with front-end development and working with databases
              in the back-end. <br />
              These are the technologies I'm actively building with:
          </SectionText>
          <List>
              <ListItem>
                  <DiReact size="3rem" />
                  <ListContainer>
                      <ListTitle>Front-End
                      </ListTitle>
                      <ListParagraph>
                          Experience with <br />
                          React.js
                      </ListParagraph>
                  </ListContainer>
              </ListItem>
              <ListItem>
                  <DiFirebase size="3rem" />
                  <ListContainer>
                      <ListTitle>Back-End
                      </ListTitle>
                      <ListParagraph>
                          Experience with <br />
                          Node.js and Databases
                      </ListParagraph>
                  </ListContainer>
              </ListItem>
              <ListItem>
                  <SiSolidity size="3rem" />
                  <ListContainer>
                      <ListTitle>Full-Stack
                      </ListTitle>
                      <ListParagraph>
                          Experience with <br />
                          Solidity
                      </ListParagraph>
                  </ListContainer>
              </ListItem>
          </List>
  </Section>
);

export default Technologies;
