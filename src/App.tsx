import { Header } from "./components/header";
import { Menu } from "./components/menu";
import { Input } from "./components/ui/input";


export function App() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex justify-between px-5">
        <Menu />

        <div className="w-[14%] space-y-4">
          <h3 className="sidebar-title uppercase">Seu Projeto</h3>

          <Input
            type="text"
            placeholder="Nome do seu projeto"
            isRequired={true}
          />

          <div>
            <Input
              type="text"
              placeholder="Descrição do projeto"
              isRequired={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}