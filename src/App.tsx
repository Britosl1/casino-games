import { useCallback, useEffect, useState } from "react";
import GameCard from "./components/GameCard";
import { getGames } from "./services/games";
import { IGamesProps } from "./interfaces/gameInterfaces";

import "./App.css";

function App() {
  const [gameData, setGameData] = useState<IGamesProps[]>([]);
  // const [caroselNumber, setCaroselNumber] = useState<number>(6);

  const fetchGames = useCallback(async () => {
    try {
      const data = await getGames({});
      setGameData(data.result.games);
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(gameData);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  console.log(gameData);

  return (
    <div className="home-container">
      {/* {gameData.splice(0, 6).map((game: IGamesProps) => ( */}
      {gameData.splice(0, 6).map((game: IGamesProps) => (
        <GameCard
          name={game.name}
          icon={game.icon}
          url={game.url}
          key={game.id}
        />
      ))}
    </div>
  );
}

export default App;
