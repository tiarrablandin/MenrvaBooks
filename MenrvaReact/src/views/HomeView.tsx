import BookSlider from "@/components/CardSlider/BookSlider/BookSlider";
import React from "react";

const HomeView: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-start">
      <BookSlider />
    </div>
  );
};

export default HomeView;
