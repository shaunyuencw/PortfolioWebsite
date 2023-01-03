import React from 'react';
import { DiFirebase } from 'react-icons/di';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { BsCodeSlash } from 'react-icons/bs';
import { GoTools } from 'react-icons/go';
import { AiTwotoneApi } from 'react-icons/ai';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I consider myself to be a generalist, with a little bit of experience in a lot of different areas. I am always looking to learn more and expand my skillset.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <GiArtificialIntelligence size="2.5rem" />
        </picture>
        <ListContainer>
          <ListTitle>ML/AI</ListTitle>
          <ListParagraph>
            Experiece with <br />
            PyTorch, Tensorflow and Data Visualization
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <GoTools size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Databases and APIs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsCodeSlash size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Development</ListTitle>
          <ListParagraph>
            Experience with <br />
            Web Development and Mobile App Development
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
