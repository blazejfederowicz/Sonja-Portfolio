import React, { createContext, useContext } from 'react';
import projectsArr from '../utils/ProjectStore'

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  return (
    <ProjectContext.Provider value={projectsArr}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => useContext(ProjectContext);
