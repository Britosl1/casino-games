import "./styles.css";

interface ICarouselProps {
  children: React.ReactNode[];
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
    <div>
      {children}
      <div className="buttons-slider-container">
        <button
          className={
            disabled ? "buttons-slider-container-disabled" : "button-abled"
          }
          onClick={onScrollLeft}
          disabled={disabled}
        >
          &#12296;
        </button>
        <button className="button-abled" onClick={onScrollRight}>
          &#12297;
        </button>
      </div>
    </div>
  );
}
