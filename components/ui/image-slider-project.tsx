import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import Image from "next/image";

interface ImageSliderProps {
  images: {
    url: string;
    alt: string;
  }[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const [imageIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const showPrevImage = () => {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  return (
    <section className="relative w-full h-[500px] md:h-[650px]">
      <div className="w-full h-full flex overflow-hidden ">
        {images.map(({ url, alt }, index) => (
          <div
            key={url}
            className="w-full h-full flex-shrink-0  transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${-100 * imageIndex}%)` }}
          >
            <Image
              src={url}
              alt={alt}
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50"
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden="true" />
      </button>
      <button
        onClick={showNextImage}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white bg-black bg-opacity-50"
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden="true" />
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className="p-1 rounded-full bg-white bg-opacity-50"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden="true" />
            ) : (
              <Circle aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
