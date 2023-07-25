import { FormEvent, useCallback, useEffect, useState } from "react";
import GameCard from "./components/GameCard";
import { getGames } from "./services/games";
import { IGamesProps } from "./interfaces/gameInterfaces";

import "./App.css";
import Carousel from "./components/Carousel";
import { Inputs } from "./components/Inputs";

function App() {
  const [gameData, setGameData] = useState<IGamesProps[]>([]);
  const [caroselNumber, setCaroselNumber] = useState<number>(6);
  const [selectedSortBy, setSelectedSortBy] = useState("a-z");
  const [selectedSearch, setSelectedSearch] = useState("");

  const fetchGames = useCallback(async () => {
    try {
      const data = await getGames({
        sort_by: selectedSortBy,
        num: caroselNumber,
        search: selectedSearch,
      });
      setGameData(data.result.games);
    } catch (error) {
      console.log(error);
    }
  }, [caroselNumber, selectedSortBy, selectedSearch]);

  const scrollLeft = () => {
    setCaroselNumber((prevPage) => prevPage - 6);
  };

  const scrollRight = () => {
    setCaroselNumber((prevPage) => prevPage + 6);
  };

  useEffect(() => {
    fetchGames();
  }, [fetchGames, caroselNumber]);

  console.log(selectedSearch);

  return (
    <div className="home-container">
      <div className="inputs-container">
        <Inputs.SortInput
          onChange={(e) => setSelectedSortBy(e.target.value)}
          value={selectedSortBy}
        />
        <Inputs.SearchInput
          onChange={(e) => setSelectedSearch(e.target.value)}
          value={selectedSearch}
        />
      </div>
      <Carousel
        disabled={gameData.length === 6}
        onScrollLeft={scrollLeft}
        onScrollRight={scrollRight}
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
