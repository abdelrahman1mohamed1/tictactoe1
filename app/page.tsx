"use client";
import { useEffect, useState } from "react";
import Cell from "./components/cell";

  const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

 function Home() {


  const [cells , setCells] = useState(["","","","","","","","",""]);

   const [go , setGo] = useState("circle");

   const [winMessage , setWinMessage] = useState("");

  useEffect(() => {

    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle" );
      const crossWins = combo.every((cell) => cells[cell] === "cross" );
      if (circleWins){
        setWinMessage("circle wins !!")
      }else if(crossWins){
        setWinMessage("cross wins !!")
      }
    })



  },[cells])


  useEffect(()=> {
    if (cells.every((cell) => cell !== "" && !winMessage)){
      setWinMessage("draw!")  
    }

  } , [cells , winMessage])



  return (
    <div className="flex justify-center h-[100vh] items-center flex-col">
      <div id="GameBoard" className=" border-[2px] border-black grid grid-cols-3 ">

       
      {cells.map((cell , index) => (
        <Cell id={index} winMessage={winMessage} cell={cell} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} />
      ))}


      </div>
      <h1>{winMessage}</h1>
      {!winMessage && <h1>it`s {go} turn</h1>}
    </div>
  );
}



export default Home ;