import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          navigate('/');
          return;
        }

        const response = await axios.get('http://localhost:8000/api/projects/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects', error);
      }
    };

    fetchProjects();
  }, [navigate]);

  return (
    <Container>
      <Header>Projects</Header>
      <ProjectList>
        {projects.length ? (
          projects.map((project) => (
            <ProjectItem key={project.id}>
              <ProjectLink to={`/projects/${project.id}/tasks`}>{project.name}</ProjectLink>
            </ProjectItem>
          ))
        ) : (
          <NoProjects>No projects available.</NoProjects>
        )}
      </ProjectList>
    </Container>
  );
};

export default ProjectPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #f4f7f6;
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

const ProjectList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

const ProjectItem = styled.li`
  background: #fff;
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s, box-shadow 0.3s;

  &:hover {
    background: #e7eaf0;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: #6e8efb;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const NoProjects = styled.p`
  color: #666;
  font-size: 16px;
  text-align: center;
`;
