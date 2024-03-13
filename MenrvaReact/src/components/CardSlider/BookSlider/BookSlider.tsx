import BookCard from "./BookCard";

interface BookSliderProps {}

const BookSlider: React.FC<BookSliderProps> = ({}) => {
  return (
    <div className="flex w-[250%] justify-center overflow-scroll">
      {[0, 1, 2, 3, 4, 5].map(() => {
        return <BookCard></BookCard>;
      })}
    </div>
  );
};

export default BookSlider;
