import { Dispatch, SetStateAction } from "react";

type cellprops = {
    go: string;
    id: number;
    setGo: Dispatch<SetStateAction<string>>;
    cells: string[];
    setCells: Dispatch<SetStateAction<string[]>>;
    cell: string;
    winMessage: string;
}


const Cell = ( {go , setGo, id , setCells, cells, cell, winMessage} : cellprops) => {




    const handleClick = (e: any) => {
        const taken = !!cells[id];
        if(winMessage) {
            return
        }
    

        if (!taken) {
         if (go == "circle") {
            setGo("cross") 
            handleCellChange("circle")
           } else {
            setGo("circle") 
            handleCellChange("cross")
           }     
        }

        
        }

    const handleCellChange = (cellToChange: string) => {
        let copyCells = [...cells]; 
        copyCells[id] = cellToChange
        setCells(copyCells)
    }

    return (

        <div onClick={handleClick} className=" flex justify-center items-center text-center border-[2px] w-[140px] h-[140px] cursor-pointer border-black ">

            <div className={cell}>  {cell ? (cell === "circle" ? "o" : "x" ) : ""} </div>


        </div>

    )
}


export default  Cell ;