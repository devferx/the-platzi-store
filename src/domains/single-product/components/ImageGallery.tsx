import { useState } from "react";
import { flushSync } from "react-dom";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [currImg, setCurrImg] = useState(0);

  const handleImgClick = (idx: number) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setCurrImg(idx);
      });
    });
  };

  return (
    <div>
      <img
        className="single-prod-img"
        src={images[currImg]}
        alt={`${title} - photo ${currImg + 1}`}
      />

      <div className="mt-6 flex w-full justify-center gap-3">
        {images.map((img, idx) => (
          <button key={img} onClick={() => handleImgClick(idx)}>
            <img
              className="w-20"
              src={img}
              alt={`${title} - photo ${idx + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
