import React from "react";
import styled from "styled-components";

const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript (ES6+)", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "Firebase", level: 70 },
    { name: "Git & GitHub", level: 85 },
  ];

  return (
    <SkillsSection id="skills">
      <Heading>
        My <Highlight>Skills</Highlight>
      </Heading>

      <SkillsWrapper>
        {skills.map((skill, index) => (
          <Skill key={index}>
            <SkillLabel>
              {skill.name} <span>{skill.level}%</span>
            </SkillLabel>
            <SkillBar>
              <SkillLevel style={{ width: `${skill.level}%` }} />
            </SkillBar>
          </Skill>
        ))}
      </SkillsWrapper>
    </SkillsSection>
  );
};

export default Skills;

/* ---------------- Styled Components ---------------- */

const SkillsSection = styled.section`
  background: #f6efe2;
  padding: 5rem 2rem;
  color: #333;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 3rem;
  color: #555e56;
`;

const Highlight = styled.span`
  color: #610D0D;
`;

const SkillsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Skill = styled.div`
  margin-bottom: 1.8rem;
  text-align: left;
`;

const SkillLabel = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  color: #555e56;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.9rem;
    font-weight: 500;
    color: #610D0D;
  }
`;

const SkillBar = styled.div`
  background: #ddd;
  border-radius: 10px;
  overflow: hidden;
  height: 12px;
`;

const SkillLevel = styled.div`
  background: linear-gradient(90deg, #610D0D, #8b1e1e);
  height: 100%;
  border-radius: 10px;
  transition: width 1s ease-in-out;
`;
