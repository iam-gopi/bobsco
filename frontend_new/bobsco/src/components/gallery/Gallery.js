import React from "react";
import { ImageGallery } from "react-image-grid-gallery";

const Gallery = () => {
  let images = [];
  for (let index = 1; index <= 50; index++)
    images.push({
      src: `${process.env.PUBLIC_URL}/images/Gallery/${index}.jpeg`,
    });

  return (
    <main className="mx-auto my-14 sm:container">
      <ImageGallery
        imagesInfoArray={images}
        columnWidth={330}
        gapSize={24}
        className="rounded"
      />
    </main>
  );
};

export default Gallery;
