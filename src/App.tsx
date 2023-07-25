import { useCallback, useEffect, useState } from "react";
import GameCard from "./components/GameCard";
import { getGames } from "./services/games";
import { IGamesProps } from "./interfaces/gameInterfaces";

import "./App.css";
import Carousel from "./components/Carousel";

function App() {
  const [gameData, setGameData] = useState<IGamesProps[]>([]);
  const [caroselNumber, setCaroselNumber] = useState<number>(6);

  const fetchGames = useCallback(async () => {
    try {
      const data = await getGames({ sort_by: "a-z", num: caroselNumber });
      setGameData(data.result.games);
    } catch (error) {
      console.log(error);
    }
  }, [caroselNumber]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames, caroselNumber]);

  console.log(caroselNumber);

  return (
    <div className="home-container">
      <Carousel
        disabled={gameData.length === 6}
        onScrollLeft={() => setCaroselNumber((prevPage) => prevPage - 6)}
        onScrollRight={() => setCaroselNumber((prevPage) => prevPage + 6)}
      >
        {gameData.map((game: IGamesProps) => (
          <GameCard
            name={game.name}
            icon={game.icon}
            url={game.url}
            key={game.id}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
