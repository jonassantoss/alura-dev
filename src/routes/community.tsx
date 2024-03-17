import { useEffect, useState } from "react";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Project, ProjectProps } from "../components/ui/project";
import avatar from "../assets/Avatar.png"

import { ProjectsService } from '../../backend/projects-service';

export function Community() {
    const [projects, setProjects] = useState<ProjectProps[]>([]);

    async function getProjectsFromDB() {
        try {
            const response = await ProjectsService.getProjects();
            setProjects(response)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getProjectsFromDB();
    }, [])

    return (
        <div className="w-full h-full space-y-10">
            <Header />

            <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-10">
                <Menu />

                <div className="w-full flex flex-col items-center gap-8 lg:grid grid-cols-2 grid-rows-auto lg:items-stretch">
                    {projects.map(project => (
                        <Project 
                            key={project.key}
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
                    ))}
                </div>
            </div>
        </div>
    )
}