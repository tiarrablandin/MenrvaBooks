import BookSlider from "@/components/CardSlider/BookSlider/BookSlider";
import React from "react";

const HomeView: React.FC = () => {
  return (
    <div className="h-full w-full flex items-start justify-center">
      <BookSlider />
    </div>
  );
};

export default HomeView;
