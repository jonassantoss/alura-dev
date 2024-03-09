import { ProjectProps } from '../src/components/ui/project';
import { v4 as uuid } from 'uuid';
import avatar from '../src/assets/Avatar.png'
import { ProjectPropsPost } from '../src/routes/home';

const getProjects = async (): Promise<ProjectProps[]> => {
    return await fetch('http://localhost:3000/projects')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro: Falha na requisição');
        }

        return response.json();
    }) as ProjectProps[];
}

const postProjects = async ({title, description, code, color, language}: ProjectPropsPost) => {
    return await fetch('http://localhost:3000/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: uuid(),
            owner: "Harry",
            avatar,
            title,
            description,
            comments: 0,
            likes: 0,
            code: code.replace(/\n/g, '\n'),
            color,
            language
        })
    })
    .then(data => {
        if (!data.ok) {
            throw new Error('Erro: Falha na requisição')
        }

        return data.json();
    })
    .catch(error => {
        alert('Erro: Falha na requisição')
        console.error(`${error}`)
    })
}

export const ProjectsService = {
    getProjects,
    postProjects
}