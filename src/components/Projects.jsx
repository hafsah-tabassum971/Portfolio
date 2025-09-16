import React from "react";
import styled from "styled-components";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const Projects = () => {
  const projectList = [
    {
      title: "Blood & Stem Cell Donation Platform",
      description:
        "A MERN stack platform integrating donor, hospital, and admin panels with AI-based CBC analysis.",
      link: "https://blood-and-stem-cell-donation-platfo-ten.vercel.app/",
      image: img2,
      tags: ["Web Design", "Web Development"],
    },
    {
      title: "QuizArena App",
      description:
        "A fun real-time quiz game built with React & Firebase, featuring live scoring and multiplayer.",
      link: "https://quiz-app-5df68.web.app/",
      image: img1,
      tags: ["Full-Stack", "React", "Firebase"],
    },
    {
      title: "Invoice Generator",
      description:
        "A modern invoice generator with clean UI, responsive design, and PDF export features.",
      link: "https://invoice-generator-gilt-seven.vercel.app/",
      image: img3,
      tags: ["Web Development", "UI/UX"],
    },

  ];

  return (
    <ProjectsSection id="projects">
      
      <Heading>
       <Highlight> Featured  Projects</Highlight>
      </Heading>

      <ProjectGrid>
        {projectList.map((project, index) => (
          <ProjectCard key={index}>
            <CardImageWrapper>
              <CardImage src={project.image} alt={project.title} />
            </CardImageWrapper>
            <CardContent>
              <Tags>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </Tags>
              <CardTitle>{project.title}</CardTitle>
              {/* <CardDesc>{project.description}</CardDesc> */}
              <CardLink href={project.link} target="_blank">
                View Project ↗
              </CardLink>
            </CardContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;

/* ---------------- Styled Components ---------------- */

const ProjectsSection = styled.section`
  background: linear-gradient(to bottom, #59625c 0%, #555e56 100%);
  color: white;
  min-height: 100vh;
  padding: 3rem 2rem;
  text-align: center;
    @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;


const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 3rem;
    @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Highlight = styled.span`
  color: white;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* always 3 cards */
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;


const ProjectCard = styled.div`
  background: #F6EFE2;
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 230px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const CardImage = styled.img.attrs(() => ({
  loading: "lazy",  // ✅ lazy load
}))`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  /* space between top and bottom */
  min-height: 150px; /* keeps consistent height across cards */
    @media (max-width: 480px) {
    padding: 1rem;
  }
`;
const Tags = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;   /* ✅ keeps tags neat in one place */
  gap: 0.5rem;
  /* margin-bottom: 0.3rem; */
`;

const Tag = styled.span`
  display: inline-block;
  background: #610D0D;
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 6px;
  font-size: 0.9rem;
  margin: 0 0.3rem;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  color: #610D0D;
  margin-bottom: 1rem;
  text-align: center;
    @media (max-width: 480px) {
    font-size: 1.3rem;
      margin-bottom: 0rem;

  }
`;

const CardDesc = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
    color: #610D0D;

  opacity: 0.9;
`;

const CardLink = styled.a`
  display: inline-block;
  color: #610D0D;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #610D0D; /* keeps color same or change if you like */
  }

  /* underline animation */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0%;
    height: 2px;
    background: #610D0D;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
    @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;
