import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';

const EducationSection = styled.section`
  min-height: 80vh;
  padding: 100px 0;
  background: ${theme.background};
  color: ${theme.text};
`;

const Container = styled.div`
  max-width: 800px;
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
    content: '03.';
    color: ${theme.accent};
    font-family: ${theme.fontMono};
    font-size: 1.2rem;
    margin-right: 10px;
    font-weight: 400;
  }

  &::after {
    content: '';
    display: block;
    width: 200px;
    height: 1px;
    background: ${theme.darkGray};
    margin-left: 20px;
  }

  ${device.tablet} {
    font-size: 2rem;
    &::after {
      width: 300px;
    }
  }
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  border-left: 2px solid ${theme.darkGray};
  transition: ${theme.transition};

  &:hover {
    border-left-color: ${theme.accent};
    padding-left: 25px;
  }

  ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.2rem;
  color: ${theme.lightGray};
  margin-bottom: 0.5rem;
  font-weight: 600;

  ${device.tablet} {
    font-size: 1.4rem;
  }
`;

const Institution = styled.p`
  font-size: 1rem;
  color: ${theme.secondary};
  margin-bottom: 0.5rem;
  font-family: ${theme.fontMono};
`;

const Year = styled.span`
  font-size: 0.9rem;
  color: ${theme.text};
  font-family: ${theme.fontMono};
  white-space: nowrap;
  
  ${device.tablet} {
    margin-left: 2rem;
  }
`;

const Description = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  color: ${theme.text};
  line-height: 1.6;
  max-width: 600px;
`;

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech Information Technology",
      institution: "Anna University",
      year: "2022 - 2026",
     // description: "Focusing on core computer science concepts, web development, and software engineering principles. Active member of the technical symposium organizer."
    },
    {
      degree: "Higher Secondary Education",
      institution: "Kurinchi Matric Higher Secondary School",
      year: "2021 - 2022",
      //description: "Completed. Specialized in Mathematics and Computer Science."
    }
  ];

  return (
    <EducationSection id="education">
      <Container>
        <Title data-aos="fade-up">Education</Title>
        <EducationList>
          {educationData.map((item, index) => (
            <EducationItem
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Content>
                <Degree>{item.degree}</Degree>
                <Institution>{item.institution}</Institution>
                <Description>{item.description}</Description>
              </Content>
              <Year>{item.year}</Year>
            </EducationItem>
          ))}
        </EducationList>
      </Container>
    </EducationSection>
  );
};

export default Education;