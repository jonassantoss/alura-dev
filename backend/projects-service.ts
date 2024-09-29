import { v4 as uuid } from "uuid";
import avatar from "../src/assets/Avatar.png";
import { ProjectProps, ProjectPropsPost } from "ProjectProps";

const getProjects = async (): Promise<ProjectProps[]> => {
  return (await fetch("http://localhost:3000/projects").then((response) => {
    if (!response.ok) {
      throw new Error("Erro: Falha na requisição");
    }

    return response.json();
  })) as ProjectProps[];
};

const getProject = async (
  projectId: string | undefined
): Promise<ProjectProps> => {
  return (await fetch(`http://localhost:3000/projects/${projectId}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error("Erro: Falha na requisição");
      }

      return response.json();
    }
  )) as ProjectProps;
};

const postProjects = async ({
  title,
  description,
  code,
  color,
  language,
}: ProjectPropsPost) => {
  await fetch("http://localhost:3000/projects", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuid(),
      owner: "Harry",
      avatar,
      title,
      description,
      comments: 0,
      likes: 0,
      code: code.replace(/\n/g, "\n"),
      color,
      language,
    }),
  })
    .then((data) => {
      if (!data.ok) {
        throw new Error("Erro: Falha na requisição");
      }
    })
    .catch((error) => {
      alert("Erro: Falha na requisição");
      console.error(`${error}`);
    });
};

const putProjects = async ({
  id,
  title,
  description,
  code,
  color,
  language,
}: ProjectPropsPost) => {
  try {
    console.log(id);
    const project = await fetch(`http://localhost:3000/projects/${id}`);
    if (project) {
      console.log(id);
      const response = await fetch(`http://localhost:3000/projects/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...project,
          title,
          description,
          code: code.replace(/\n/g, "\n"),
          color,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro: Falha na requisição");
      }
    }
  } catch (error) {
    console.error(error);
    alert("Erro: Falha na requisição!");
  }
};

export const ProjectsService = {
  getProjects,
  getProject,
  postProjects,
  putProjects,
};
