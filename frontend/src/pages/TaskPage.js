import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TaskPage = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          navigate('/');
          return;
        }

        const response = await axios.get(`http://localhost:8000/api/projects/${id}/tasks/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks', error);
      }
    };

    fetchTasks();
  }, [id, navigate]);

  return (
    <Container>
      <Header>Tasks</Header>
      <TaskList>
        {tasks.length ? (
          tasks.map((task) => (
            <TaskItem key={task.id}>{task.title}</TaskItem>
          ))
        ) : (
          <NoTasks>No tasks available for this project.</NoTasks>
        )}
      </TaskList>
    </Container>
  );
};

export default TaskPage;

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

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

const TaskItem = styled.li`
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

const NoTasks = styled.p`
  color: #666;
  font-size: 16px;
  text-align: center;
`;
