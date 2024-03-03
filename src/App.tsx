import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Select } from "./components/ui/select";
import { ColorPicker } from "./components/ui/colorPicker";


export function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex justify-between px-5">
        <Menu />

        <div className="w-[14%] space-y-10">
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
            
            <ColorPicker />
          </div>

          <button
            className="box-border border-transparent border-4 w-full bg-blue-300 text-blue-950 text-center p-2 rounded-lg duration-300 hover:bg-blue-200 active:border-blue-300/75"
          >
            Salvar projeto
          </button>
        </div>
      </div>
    </div>
  )
}