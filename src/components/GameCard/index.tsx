import "./styles.css";

import { IGamesProps } from "../../interfaces/gameInterfaces";

type ITransformProps = {
  transform?: number;
};

type IGameCardProps = Pick<IGamesProps, "name" | "url" | "icon"> &
  ITransformProps;

export default function GameCard({ icon, url, name }: IGameCardProps) {
  return (
    <a className="game-card-container" href={url}>
      <img src={icon} alt={name} />
    </a>
  );
}
