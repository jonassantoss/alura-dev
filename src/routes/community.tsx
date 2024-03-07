import { Header } from "../components/header";
import { Menu } from "../components/menu";

export function Community() {
    return (
        <div className="w-full h-full py-3 px-5 space-y-10">
            <Header />

            <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-20">
                <Menu />

                <div>
                    
                </div>
            </div>
        </div>
    )
}