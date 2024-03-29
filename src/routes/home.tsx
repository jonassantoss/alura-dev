import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import { ChangeEvent, useState } from "react";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"
import { ProjectsService } from "../../backend/projects-service";
import SyntaxHighlighter from "react-syntax-highlighter";
import arrowIcon from "../assets/arrow.svg";
import { ExportButton } from "../components/ui/exportButton";

export function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("xml")
  const [color, setColor] = useState("#FFFFFF");
  const [codeString, setCodeString] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  const postValues = {
    title: titleValue,
    description: descriptionValue,
    code: codeString,
    color: color,
    language: selectedLanguage
  }
  
  const selectItems = [
    { id: 0, name: "HTML", value: "xml" },
    { id: 1, name: "CSS", value: "css" },
    { id: 2, name: "Javascript", value: "javascript" }
  ]
  
  const pickerID = `color-picker_${Date.now()}`;

  function showHighlightCode() {
    setIsHighlighted(!isHighlighted);
  }

  function postProject(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ProjectsService.postProjects(postValues);
    setCodeString("")
    setTitleValue("")
    setDescriptionValue("")
    setSelectedLanguage("xml")
    setColor("#FFFFFF")
  }
  
  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setSelectedLanguage(value)
  }

  function handleCodeString(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setCodeString(value);
  }

  function handleTitleValue(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTitleValue(value);
  }

  function handleDescriptionValue(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setDescriptionValue(value);
  }

  function handleColorChange(event: ChangeEvent<HTMLInputElement>) {
    setColor(event.target.value)
  }

  return (
    <div className="w-full h-full space-y-10">
      <Header />
      <div className="h-full flex flex-col items-start gap-10 lg:flex-row lg:gap-20">
        <Menu />

        <div className="w-full flex flex-col justify-center gap-8 flex-grow-2">
          <div className="flex min-h-[300px] rounded-lg p-6" style={{ backgroundColor: color }} id="code__screen">
            <div className="flex flex-col gap-2 bg-gray-dark w-full flex-grow p-4 rounded-lg" >
              <div className="flex gap-2">
                <div className="bg-mac-red size-3 rounded-full" />
                <div className="bg-mac-yellow size-3 rounded-full" />
                <div className="bg-mac-green size-3 rounded-full" />
              </div>

              <textarea
                className={`${!isHighlighted ? 'block' : 'hidden'} outline-none bg-transparent w-full h-full resize-none font-roboto-mono`}
                onChange={handleCodeString}
                value={codeString}
              />

              {isHighlighted && (
                <div>
                  <SyntaxHighlighter language={selectedLanguage} style={atomOneDark} customStyle={{
                    width: "100%",
                    background: "#141414"
                  }}>
                    {codeString}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={showHighlightCode}
            className="bg-blue-300/[8%] p-3 rounded-lg border-4 border-transparent duration-300 hover:bg-blue-300/15 active:bg-blue-300/25 active:border-blue-300/15"
          >
            Visualizar com highlight
          </button>
        </div>

        <form className="space-y-10 w-full lg:w-[25%]" onSubmit={postProject}>
          <div className="space-y-4">
            <h3 className="sidebar-title uppercase">Seu Projeto</h3>
            <Input
              type="text"
              placeholder="Nome do seu projeto"
              value={titleValue}
              onChange={handleTitleValue}
              required
            />
            <Textarea
              placeholder="Descrição do projeto"
              value={descriptionValue}
              onChange={handleDescriptionValue}
            />
          </div>

          <div className="space-y-4">
            <h3 className="sidebar-title uppercase">Personalização</h3>

            <div className="relative">
              <select
                id="selectLanguages"
                name="Languages"
                value={selectedLanguage}
                onChange={handleLanguageChange}
                required
                className="appearance-none inline-flex items-center justify-between w-full bg-slate-700 text-slate-200/50 p-3 rounded-xl outline-none duration-300 ease-out hover:bg-slate-600"
              >
                {selectItems.map(selectItem => (
                  <option
                    className="text-white p-5 outline-none hover:bg-slate-600"
                    key={selectItem.id}
                    value={selectItem.value}
                  >
                    {selectItem.name}
                  </option>
                ))}
              </select>
              <img className="absolute top-5 right-3" src={arrowIcon} />
            </div>

            <div className="flex items-center border border-white rounded-md p-2">
              <input
                id={pickerID}
                className="w-0 h-0 opacity-0"
                type="color"
                onChange={handleColorChange}
              />

              <section className="w-full rounded-xl">
                <label htmlFor={pickerID}>
                  <div
                    style={{ backgroundColor: color }}
                    className=" w-full h-10 rounded-md"
                  />
                </label>
              </section>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <button
              type="submit"
              className="box-border border-transparent border-4 w-full bg-blue-300 text-blue-950 text-center p-1 rounded-lg duration-300 md:w-1/2 hover:bg-blue-200 active:border-blue-300/75"
            >
              Salvar projeto
            </button>

            <ExportButton />
          </div>
        </form>
      </div>
    </div>
  )
}