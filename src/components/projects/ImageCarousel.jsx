import { useState } from "react";

export default function ImageCarousel({
  screenshots = [],
}) {
  const [current, setCurrent] = useState(0);

  if (!screenshots.length) {
    return (
      <div className="h-96 border rounded-3xl flex items-center justify-center">
        No Screenshots Available
      </div>
    );
  }

  return (
    <div>
      {/* Main Image */}
      <div className="overflow-auto rounded-3xl border h-[500px]">
        <img
          src={screenshots[current]}
          alt={`Screenshot ${current + 1}`}
          className="max-w-none"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
        {screenshots.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`flex-shrink-0 w-20 h-20 border rounded-xl overflow-hidden ${
              current === index
                ? "ring-2 ring-black"
                : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}