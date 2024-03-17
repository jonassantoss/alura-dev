import * as Popover from '@radix-ui/react-popover';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { useState, ChangeEvent } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf'

export function ExportButton() {
    const codeScreen = document.querySelector('#code__screen');
    const [fileNameValue, setFileNameValue] = useState("")
    const [sizeButtons, setSizeButtons] = useState([
        { id: "0", text: "1x", value: 1, selected: false },
        { id: "1", text: "2x", value: 2, selected: true },
        { id: "2", text: "3x", value: 3, selected: false }
    ]);

    const [imageButtons, setImageButtons] = useState([
        { id: "0", text: "PNG", value: "png", selected: false },
        { id: "1", text: "SVG", value: "svg", selected: true },
        { id: "2", text: "JPG", value: "jpg", selected: false }
    ]);

    const exportValues = {
        filename: fileNameValue == "" ? "code" : fileNameValue,
        size: getSelectedSize(),
        type: getSelectedType()
    }

    async function exportCode() {
        const img = await screenshotCodeScreen()

        if (img) {
            if (exportValues.type === 'svg') {
                const svg = createSVG(img.width, img.height, img.src);

                const blob = new Blob([svg], { type: 'image/svg+xml' })
                saveAs(blob, `${exportValues.filename}.svg`)
            } else {
                const blob = await fetch(img.src).then(response => response.blob());
                saveAs(blob, `${exportValues.filename}.${exportValues.type}`)
            }
        } else {
            console.error("Não foi possivel capturar a imagem!")
        }
    }

    function createSVG(width: number, height: number, src: string) {
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.setAttribute("width", `${width}`);
        svg.setAttribute("height", `${height}`);
        
        const img = document.createElementNS("http://www.w3.org/2000/svg", "image")
        img.setAttribute("x", '0')
        img.setAttribute("y", '0')
        img.setAttribute("width", `${width}`)
        img.setAttribute("height", `${height}`)
        img.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", src)

        svg.appendChild(img);
        const svgString = new XMLSerializer().serializeToString(svg);

        return svgString
    }

    async function screenshotCodeScreen() {
        if (codeScreen instanceof HTMLElement) {
            const canvas = await html2canvas(codeScreen);
            const width = codeScreen?.clientWidth * exportValues.size
            const height = codeScreen?.clientHeight * exportValues.size
            let image = new Image(width, height);
            image.src = canvas.toDataURL();

            return image;
        }
    }

    function getSelectedSize() {
        const selectedSize = sizeButtons.filter(button => button.selected)[0].value

        return selectedSize
    }

    function getSelectedType() {
        const selectedType = imageButtons.filter(button => button.selected)[0].value

        return selectedType
    }

    function handleFileName(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setFileNameValue(value)
    }

    function handleSelectedSizeButtons(id: string) {
        const newButtons = sizeButtons.map(button => ({
            ...button,
            selected: button.id === id,
        }));

        setSizeButtons(newButtons);
    }

    function handleSelectedImageButtons(id: string) {
        const newButtons = imageButtons.map(button => ({
            ...button,
            selected: button.id === id,
        }));

        setImageButtons(newButtons);
    }

    return (
        <div className="flex w-full md:w-1/2">
            <button
                type="button"
                onClick={exportCode}
                className="box-border border-transparent border-4 w-full bg-slate-100 text-blue-950 text-center p-1 rounded-l-lg duration-300 hover:bg-slate-300 active:bg-slate-400"
            >
                Exportar
            </button>

            <Popover.Root>
                <Popover.Trigger asChild>
                    <button className="w-1/5 flex justify-center items-center box-border border-transparent border-4 border-l-2 border-l-slate-800/40 bg-slate-100 text-blue-950 text-center p-1 rounded-r-lg duration-300 md:w-1/6 lg:w-1/4 hover:bg-slate-300 active:bg-slate-400">
                        <ChevronDownIcon />
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className="w-56" align="end" sideOffset={6}>
                        <div className="flex flex-col space-y-2 bg-slate-100 text-blue-950 p-2 rounded-md shadow-alura">
                            <div className="border-b-[1px] w-full border-b-slate-800/40 pb-1">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs w-1/2 ml-2" htmlFor="namefile">
                                        Nome do arquivo
                                    </label>
                                    <input
                                        type="text"
                                        id="namefile"
                                        placeholder="Code"
                                        value={fileNameValue}
                                        onChange={handleFileName}
                                        className=" w-1/2 mr-2 border-transparent bg-transparent outline-none text-sm text-right placeholder:text-end"
                                    />
                                </div>
                            </div>
                            <div className="border-b-[1px] w-full border-b-slate-800/40 pb-1">
                                <div className="flex items-center justify-between text-xs">
                                    <p className="w-1/2 ml-2">
                                        Tamanho
                                    </p>
                                    <div className="flex gap-4">
                                        {sizeButtons.map(button => (
                                            <button
                                                key={button.id}
                                                id={`${button.id}`}
                                                value={button.value}
                                                className={`p-2 rounded-md duration-300 ${button.selected ? 'bg-slate-500/40' : ''} hover:bg-slate-300`}
                                                onClick={() => handleSelectedSizeButtons(button.id)}
                                            >
                                                {button.text}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="border-b-[1px] w-full border-b-slate-800/40 pb-1">
                                <div className="flex items-center justify-between text-xs">
                                    <p className="text-xs w-1/2 ml-2">
                                        Tipo da imagem
                                    </p>
                                    <div className="flex gap-1">
                                        {imageButtons.map(button => (
                                            <button
                                                key={button.id}
                                                id={`${button.id}`}
                                                value={button.value}
                                                className={`p-2 text-xs rounded-md duration-300 ${button.selected ? 'bg-slate-500/40' : ''} hover:bg-slate-300`}
                                                onClick={() => handleSelectedImageButtons(button.id)}
                                            >
                                                {button.text}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
    )
}