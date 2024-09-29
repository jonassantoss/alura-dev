import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import type { ProjectProps, ProjectPropsPost } from 'ProjectProps';
import { ProjectsService } from '../../backend/projects-service';
import arrowIcon from '../assets/arrow.svg';
import { ExportButton } from '../components/ui/exportButton';
import { Input } from './../components/ui/input';
import { Textarea } from './../components/ui/textarea';

export function Project() {
  const { projectId } = useParams();
  const [project, setProject] = useState<ProjectProps | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProject() {
      try {
        if (projectId) {
          const result = await ProjectsService.getProject(projectId);
          if (result) {
            setProject(result);
          } else {
            navigate('/404');
          }
        }
      } catch (error) {
        console.error(error);
        navigate('/404');
      }
    }

    fetchProject();
  }, [projectId, navigate]);

  if (!project) {
    return null;
  }

  const pickerId = `color-picker_${Date.now()}`;

  const selectItems = [
    { id: 0, name: 'HTML', value: 'xml' },
    { id: 1, name: 'CSS', value: 'css' },
    { id: 2, name: 'JavaScript', value: 'javascript' },
  ];

  const postValues: ProjectPropsPost = {
    title: project.title,
    description: project.description,
    code: project.code,
    color: project.color,
    language: project.language,
  };

  function updateProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ProjectsService.putProjects({ ...postValues, id: projectId });
  }

  function showHighlightCode() {
    setIsHighlighted(!isHighlighted);
  }

  function handleCodeString(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setProject((prevProject) =>
      prevProject ? { ...prevProject, code: value } : prevProject,
    );
  }

  function handleTitleValue(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setProject((prevProject) =>
      prevProject ? { ...prevProject, title: value } : prevProject,
    );
  }

  function handleDescriptionValue(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setProject((prevProject) =>
      prevProject ? { ...prevProject, description: value } : prevProject,
    );
  }

  function handleLanguageValue(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setProject((prevProject) =>
      prevProject ? { ...prevProject, language: value } : prevProject,
    );
  }

  function handleColorValue(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setProject((prevProject) =>
      prevProject ? { ...prevProject, color: value } : prevProject,
    );
  }

  return (
    <div className="w-full flex flex-col justify-between gap-16 lg:flex-row">
      {/* Tela do código */}
      <div className="w-full flex flex-col justify-center gap-8 flex-grow-2">
        <div
          className="flex min-h-[500px] rounded-lg p-6"
          style={{ backgroundColor: project.color }}
          id="code__screen">
          <div className="flex flex-col gap-2 bg-gray-dark w-full flex-grow p-4 rounded-lg">
            <div className="flex gap-2">
              <div className="bg-mac-red size-3 rounded-full" />
              <div className="bg-mac-yellow size-3 rounded-full" />
              <div className="bg-mac-green size-3 rounded-full" />
            </div>
            <textarea
              className={`${
                !isHighlighted ? 'block' : 'hidden'
              } outline-none bg-transparent w-full h-full resize-none font-roboto-mono`}
              onChange={handleCodeString}
              value={project.code}
            />
            {isHighlighted && (
              <div>
                <SyntaxHighlighter
                  language={project.language}
                  style={atomOneDark}
                  customStyle={{
                    width: '100%',
                    background: '#141414',
                  }}>
                  {project.code}
                </SyntaxHighlighter>
              </div>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={showHighlightCode}
          className="bg-blue-300/[8%] p-3 rounded-lg border-4 border-transparent duration-300 hover:bg-blue-300/15 active:bg-blue-300/25 active:border-blue-300/15">
          Visualizar com highlight
        </button>
      </div>

      {/* Formulário */}
      <form className="space-y-10 w-full lg:w-[25%]" onSubmit={updateProject}>
        <div className="space-y-4">
          <h3 className="sidebar-title uppercase">Seu projeto</h3>
          <Input
            type="text"
            placeholder="Nome do seu projeto"
            value={project.title}
            onChange={handleTitleValue}
            required
          />
          <Textarea
            placeholder="Descrição do projeto"
            value={project.description}
            onChange={handleDescriptionValue}
          />
        </div>

        <div className="space-y-4">
          <div className="sidebar-title uppercase">Personalização</div>
          <div className="relative">
            <select
              className="appearance-none inline-flex items-center justify-between w-full bg-slate-700 text-slate-200/50 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
              id="selectLanguages"
              name="languages"
              value={project.language}
              onChange={handleLanguageValue}
              required>
              {selectItems.map((selectItem) => (
                <option
                  className="text-white p-5 outline-none hover:bg-slate-600"
                  key={selectItem.id}
                  value={selectItem.value}>
                  {selectItem.name}
                </option>
              ))}
            </select>
            <img className="absolute top-5 right-3" src={arrowIcon} />
          </div>
          <div className="flex items-center border border-white rounded-md p-2">
            <input
              id={pickerId}
              className="w-0 h-0 opacity-0"
              type="color"
              onChange={handleColorValue}
            />
            <section className="w-full rounded-xl">
              <label htmlFor={pickerId}>
                <div
                  className="w-full h-10 rounded-md"
                  style={{ backgroundColor: project.color }}
                />
              </label>
            </section>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:flex-row">
          <button
            type="submit"
            className="box-border border-transparent border-4 w-full bg-blue-300 text-blue-950 text-center p-1 rounded-lg duration-300 md:w-1/2 hover:bg-blue-200 active:border-blue-300/75">
            Salvar projeto
          </button>
          <ExportButton />
        </div>
      </form>
    </div>
  );
}
