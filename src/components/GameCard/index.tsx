import { useEffect, useState } from "react";
import { getGames } from "../../services/games";

export default function GameCard() {
  const [gameData, setGameData] = useState([]);
  const fetchGames = async () => {
    try {
      const data = await getGames();
      setGameData(data.result.games);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(gameData);

  useEffect(() => {
    fetchGames();
  }, []);
  return <div className="gameCardContainer">GAME CARD</div>;
}
