import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJs, FaJava, FaReact, FaNodeJs, FaDocker, FaGit, FaAws 
} from 'react-icons/fa';
import { 
  SiCplusplus, SiExpress, SiFlask, SiFastapi, SiPostgresql, 
  SiMongodb, SiMicrosoftazure, SiPytorch, SiPandas, SiScikitlearn, 
  SiApachespark, SiDask
} from 'react-icons/si';
import { skills } from '../../data/content';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const FilterTab = styled(motion.button)<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border: 2px solid ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background: ${({ theme, $active }) => $active ? theme.colors.accent : 'transparent'};
  color: ${({ theme, $active }) => $active ? 'white' : theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    background: ${({ theme, $active }) => $active ? theme.colors.accent : theme.colors.surface};
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SkillCard = styled(motion.div)`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SkillIcon = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  color: ${({ color, theme }) => color || theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background: ${({ color }) => color ? `${color}20` : 'rgba(0, 123, 255, 0.1)'};
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const SkillCategoryText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-transform: capitalize;
`;

const SkillLevelContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const LevelLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const LevelText = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text};
`;

const LevelValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

const ProgressFill = styled(motion.div)<{ level: number; color?: string }>`
  height: 100%;
  background: ${({ color, theme }) => color || theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

// Icon mapping
const iconMap = {
  FaPython: FaPython,
  SiCplusplus: SiCplusplus,
  FaJs: FaJs,
  FaJava: FaJava,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  SiExpress: SiExpress,
  SiFlask: SiFlask,
  SiFastapi: SiFastapi,
  SiPostgresql: SiPostgresql,
  SiMongodb: SiMongodb,
  FaAws: FaAws,
  SiMicrosoftazure: SiMicrosoftazure,
  FaDocker: FaDocker,
  FaGit: FaGit,
  SiPytorch: SiPytorch,
  SiPandas: SiPandas,
  SiScikitlearn: SiScikitlearn,
  SiApachespark: SiApachespark,
  SiDask: SiDask,
};

const levelLabels = {
  1: 'Beginner',
  2: 'Intermediate', 
  3: 'Advanced',
  4: 'Expert'
};

const categoryLabels = {
  languages: 'Languages',
  frontend: 'Frontend',
  backend: 'Backend', 
  database: 'Database',
  devops: 'DevOps',
  tools: 'ML & Tools'
};

const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Object.keys(categoryLabels)];
  
  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Debug log to check filtering
  console.log('Selected category:', selectedCategory);
  console.log('Filtered skills count:', filteredSkills.length);
  console.log('All skills count:', skills.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <Section id="skills">
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A comprehensive overview of my technical expertise across various domains
        </Subtitle>

        <FilterTabs>
          {categories.map((category, index) => (
            <FilterTab
              key={category}
              $active={selectedCategory === category}
              onClick={() => {
                console.log('Clicking category:', category);
                setSelectedCategory(category);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === 'all' ? 'All Skills' : categoryLabels[category as keyof typeof categoryLabels]}
            </FilterTab>
          ))}
        </FilterTabs>

        <motion.div
          key={selectedCategory} // Add key to force re-render when category changes
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SkillsGrid>
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => {
                const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                
                return (
                  <SkillCard
                    key={skill.id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <SkillHeader>
                      <SkillIcon color={skill.color}>
                        {IconComponent && <IconComponent />}
                      </SkillIcon>
                      <SkillInfo>
                        <SkillName>{skill.name}</SkillName>
                        <SkillCategoryText>{skill.category}</SkillCategoryText>
                      </SkillInfo>
                    </SkillHeader>
                    
                    <SkillLevelContainer>
                      <LevelLabel>
                        <LevelText>Proficiency</LevelText>
                        <LevelValue>{levelLabels[skill.level as keyof typeof levelLabels]}</LevelValue>
                      </LevelLabel>
                      <ProgressBar>
                        <ProgressFill
                          level={skill.level}
                          color={skill.color}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(skill.level / 4) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </ProgressBar>
                    </SkillLevelContainer>
                  </SkillCard>
                );
              })
            ) : (
              <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem' }}>
                <p>No skills found for category: {selectedCategory}</p>
              </div>
            )}
          </SkillsGrid>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Skills; 