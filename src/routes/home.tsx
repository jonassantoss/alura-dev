import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import arrowIcon from "../assets/arrow.svg";

import { ChangeEvent, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

export function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("xml")
  const [color, setColor] = useState("#FFFFFF");
  const [codeString, setCodeString] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);
  const pickerID = `color-picker_${Date.now()}`;

  const selectItems = [
    { id: 0, name: "HTML", value: "xml" },
    { id: 1, name: "CSS", value: "css" },
    { id: 2, name: "Javascript", value: "javascript" }
  ]

  function showHighlightCode() {
    setIsHighlighted(!isHighlighted);
  }

  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    setSelectedLanguage(value)
  }

  function handleCodeString(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;
    setCodeString(value);
  }

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  return (
    <div className="w-full h-full py-3 px-5 space-y-10">
      <Header />
      <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-20">
        <Menu />

        <div className="w-full flex flex-col justify-center gap-8">
          <div className="flex min-h-[399px] rounded-lg p-8" style={{ backgroundColor: color }}>
            <div className="flex bg-gray-dark w-full flex-grow p-4 rounded-lg min-h-[399px]" >
              <textarea
                className={`${!isHighlighted ? 'block' : 'hidden'} outline-none bg-transparent w-full resize-none auto-resize`}
                onChange={handleCodeString}
                value={codeString}
              />
              {isHighlighted && (
                <SyntaxHighlighter language={selectedLanguage} style={atomOneDark} customStyle={{
                  width: "100%",
                  background: "#141414"
                }}>
                  {codeString}
                </SyntaxHighlighter>
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

        <form className="space-y-10 w-full lg:w-[35%]">
          <div className="space-y-4">
            <h3 className="sidebar-title uppercase">Seu Projeto</h3>
            <Input
              type="text"
              placeholder="Nome do seu projeto"
              required
            />
            <Textarea
              placeholder="Descrição do projeto"
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

          <button
            className="box-border border-transparent border-4 w-full bg-blue-300 text-blue-950 text-center p-2 rounded-lg duration-300 hover:bg-blue-200 active:border-blue-300/75"
          >
            Salvar projeto
          </button>
        </form>
      </div>
    </div>
  )
}