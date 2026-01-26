import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../utils/theme';
import { device } from '../utils/mediaQueries';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
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
    width: 300px;
    height: 1px;
    background: ${theme.darkGray};
    margin-left: 20px;
  }

  ${device.tablet} {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  
  ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.cardBackground};
  border-radius: ${theme.borderRadius};
  padding: 2rem 1.75rem;
  transition: ${theme.transition};
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);

  &:hover {
    transform: translateY(-7px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const FolderIcon = styled.div`
  color: ${theme.accent};
  font-size: 40px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: ${theme.text};
    font-size: 1.2rem;
    
    &:hover {
      color: ${theme.accent};
    }
  }
`;

const ProjectTitle = styled.h3`
  color: ${theme.lightGray};
  font-size: 1.4rem;
  margin-bottom: 1rem;
  font-weight: 600;
  
  a {
    position: static;
    
    &:before {
      content: '';
      display: block;
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
    }
  }
`;

const ProjectDescription = styled.p`
  color: ${theme.text};
  font-size: 1rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
  
  li {
    font-family: ${theme.fontMono};
    font-size: 0.8rem;
    color: ${theme.text};
    margin-right: 15px;
    margin-bottom: 5px;
  }
`;

const Projects = () => {
  const projects = [
    {
      title: "Order Management System",
      description: "A full-stack Customer Order Management System built with React, Node.js, and Google Sheet. Features include user details, product details, order details, and payment integration.",
      tech: ["React", "Node.js", "Google Sheet"],
      github: "https://github.com/vipsystem-1/hardware-shop-frontend",
      link: "https://vipsystems.pages.dev/admin/login"
    },
    {
      title: "Task Manager",
      description: "A responsive task management application with real-time updates. Built using React, Firebase, and Material-UI. Includes features like task categorization, due dates, and team collaboration.",
      tech: ["React", "Firebase", "MUI"],
      github: "https://github.com/yourusername/task-manager",
      link: "https://your-task-app-demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather forecast application that provides real-time weather data using OpenWeatherMap API. Built with React and styled-components, featuring location search and 5-day forecast.",
      tech: ["React", "OpenWeatherMap", "Styled Components"],
      github: "https://github.com/yourusername/weather-dashboard",
      link: "https://your-weather-demo.com"
    },
    {
      title: "Portfolio V1",
      description: "A modern portfolio website built with React and styled-components. Features smooth scrolling, responsive design, and animated components using Framer Motion.",
      tech: ["React", "Framer Motion", "Styled Components"],
      github: "https://github.com/yourusername/portfolio",
      link: "https://your-portfolio-demo.com"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <Title data-aos="fade-up">Some Things I've Built</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <ProjectHeader>
                <FolderIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </FolderIcon>
                <ProjectLinks>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                    <FaGithub />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                    <FaExternalLinkAlt />
                  </a>
                </ProjectLinks>
              </ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </TechList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;