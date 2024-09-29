import { useEffect, useState } from 'react';
import avatar from '../assets/Avatar.png';
import { ProjectItem } from '../components/ui/projectItem';

import type { ProjectProps } from 'ProjectProps';
import { ProjectsService } from '../../backend/projects-service';

export function Community() {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getProjectsFromDB() {
      try {
        setIsLoading(true);
        const response = await ProjectsService.getProjects();
        setProjects(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProjectsFromDB();
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-8 lg:grid grid-cols-2 grid-rows-auto lg:items-stretch">
      {isLoading ? (
        <p>Carregando projetos...</p>
      ) : projects.length > 0 ? (
        projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            owner={project.owner}
            avatar={avatar}
            title={project.title}
            description={project.description}
            comments={project.comments}
            likes={project.likes}
            code={project.code}
            color={project.color}
            language={project.language}
          />
        ))
      ) : (
        <p>Falha ao carregar projetos da comunidade</p>
      )}
    </div>
  );
}
