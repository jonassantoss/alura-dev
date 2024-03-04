import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select } from "../components/ui/select";

import { ChangeEvent, useState } from "react";

export function Home() {
    const [color, setColor] = useState("#FFFFFF");
    const pickerID = `color-picker_${Date.now()}`;

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    return (
        <div className="w-full h-full py-3 px-5 space-y-10">
      <Header />
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
        <Menu />

        <div className="w-full flex flex-col justify-center gap-8">
          <div className=" h-[399px] rounded-lg p-8" style={{ backgroundColor: color }}>
            <textarea
              className="bg-gray-dark w-full h-full outline-none resize-none p-4 rounded-lg"
            />
          </div>

          <button className="bg-blue-300/[8%] p-3 rounded-lg border-4 border-transparent hover:bg-blue-300/15 active:bg-blue-300/25 active:border-blue-300/15">Visualizar com highlight</button>
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

            <Select
              name="Languages"
              defaultValue={"HTML"}
              required
            />

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