import { Link, useParams } from "react-router-dom";
import GameCard from "../../UtillsComponet/GamesCard/GamesCard";
import { useEffect } from "react";
import TicTacToeGame from "./TicTacToeGame/TicTacToeGame";

export default function GamesComponent() {
    const params = useParams();

    useEffect(()=>{
        console.log(params.gameName)
    })
 
    if(!params.gameName){
  return (
    <div className="grid grid-cols-3 p-4 gap-4 bg-gradient-to-tr from-violet-700 via-red-600 to-green-600 ">
      <Link  to='/games/tic-tac-toe'>
      <GameCard
        title="Tic Tac Toe"
        description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players."
        image="https://play-lh.googleusercontent.com/HBEuGOwUfdMoAuGSWE_k8cyd9X0btN3d_NK4fSffkV5BJoCduo_nWz1EE_KHkfWH2BU7=w480-h960-rw"
      /></Link>
      <GameCard
        title="Tic Tac Toe"
        description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players."
        image="https://play-lh.googleusercontent.com/HBEuGOwUfdMoAuGSWE_k8cyd9X0btN3d_NK4fSffkV5BJoCduo_nWz1EE_KHkfWH2BU7=w480-h960-rw"
      />
      <GameCard
        title="Tic Tac Toe"
        description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players."
        image="https://play-lh.googleusercontent.com/HBEuGOwUfdMoAuGSWE_k8cyd9X0btN3d_NK4fSffkV5BJoCduo_nWz1EE_KHkfWH2BU7=w480-h960-rw"
      />
      <GameCard
        title="Tic Tac Toe"
        description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players."
        image="https://play-lh.googleusercontent.com/HBEuGOwUfdMoAuGSWE_k8cyd9X0btN3d_NK4fSffkV5BJoCduo_nWz1EE_KHkfWH2BU7=w480-h960-rw"
      />
      <GameCard
        title="Tic Tac Toe"
        description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players."
        image="https://play-lh.googleusercontent.com/HBEuGOwUfdMoAuGSWE_k8cyd9X0btN3d_NK4fSffkV5BJoCduo_nWz1EE_KHkfWH2BU7=w480-h960-rw"
      />
      <GameCard
        title="Tic Tac Toe"
        description="Play the classic Tic-Tac-Toe game (also called Noughts and Crosses) for free online with one or two players."
        image="https://play-lh.googleusercontent.com/HBEuGOwUfdMoAuGSWE_k8cyd9X0btN3d_NK4fSffkV5BJoCduo_nWz1EE_KHkfWH2BU7=w480-h960-rw"
      />
    </div>
    
  );
} else {
    return (
        <> <TicTacToeGame /></>
    )
}
}
