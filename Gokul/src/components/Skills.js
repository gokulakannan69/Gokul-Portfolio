import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  ${device.tablet} {
    padding: 0 50px;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 3rem;
  color: ${theme.lightGray};
  white-space: nowrap;

  &::before {
    content: '04.';
    color: ${theme.accent};
    font-family: ${theme.fontMono};
    font-size: 1.2rem;
    margin-right: 10px;
    font-weight: 400;
  }

  &::after {
    content: '';
    display: block;
    width: 300px;
    height: 1px;
    background: ${theme.darkGray};
    margin-left: 20px;
  }

  ${device.tablet} {
    font-size: 2rem;
  }
`;

const CategoryContainer = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  color: ${theme.lightGray};
  margin-bottom: 1.5rem;
  font-family: ${theme.fontMono};
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 15px;
`;

const SkillCard = styled(motion.div)`
  background: ${theme.cardBackground};
  padding: 1rem;
  border-radius: ${theme.borderRadius};
  text-align: center;
  transition: ${theme.transition};
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    color: ${theme.accent};
  }
`;

const SkillName = styled.span`
  color: ${theme.text};
  font-size: 0.9rem;
  font-family: ${theme.fontMono};
  
  ${SkillCard}:hover & {
    color: ${theme.accent};
  }
`;

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS","Typescript"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js","Google Sheet APi"]
    },
    {
      title: "Tools & DevOps",
      skills: ["Git", "GitHub",  "VS Code", "Figma","Vibe Coder","System Hardware"]
    }
  ];

  return (
    <SkillsSection id="skills">
      <Container>
        <Title data-aos="fade-up">Skills & Technologies</Title>

        {skillCategories.map((category, catIndex) => (
          <CategoryContainer key={catIndex}>
            <CategoryTitle data-aos="fade-right">{category.title}</CategoryTitle>
            <SkillsGrid>
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <SkillName>{skill}</SkillName>
                </SkillCard>
              ))}
            </SkillsGrid>
          </CategoryContainer>
        ))}
      </Container>
    </SkillsSection>
  );
};

export default Skills;