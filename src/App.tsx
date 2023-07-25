import { useEffect, useState } from "react";
import GameCard from "./components/GameCard";
import { getGames } from "./services/games";
import { IGamesProps } from "./interfaces/gameInterfaces";

function App() {
  const [gameData, setGameData] = useState<IGamesProps[]>([]);
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
  return (
    <div>
      {gameData.map((game: IGamesProps) => (
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
