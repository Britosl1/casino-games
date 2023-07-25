import "./styles.css";

interface ICarouselProps {
  children: React.ReactNode[] | React.ReactNode;
  onScrollLeft: () => void;
  onScrollRight: () => void;
  disabled: boolean;
}

export default function Carousel({
  children,
  onScrollRight,
  onScrollLeft,
  disabled,
}: ICarouselProps) {
  return (
    <div className="carosel-container">
      <button
        className={
          disabled ? "buttons-slider-container-disabled" : "button-abled-left"
        }
        onClick={onScrollLeft}
        disabled={disabled}
      >
        &#12296;
      </button>
      {children}
      <div className="buttons-slider-container">
        <button className="button-abled-right" onClick={onScrollRight}>
          &#12297;
        </button>
      </div>
    </div>
  );
}
