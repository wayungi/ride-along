import { useState } from "react";

interface VehicleGalleryProps {
  images: string[];
  vehicleName: string;
}

const VehicleGallery = ({images, vehicleName }: VehicleGalleryProps) => {

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <div className="overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={images[selectedImage]}
          alt={vehicleName}
          className="h-[450px] w-full object-cover" 
        />
      </div>


      <div className="mt-4 grid grid-cols-4 gap-4">
        {images.slice(0, 4).map((image, index) => (
          <button
            key={image}
            onClick={() => setSelectedImage(index)}
            className={`overflow-hidden rounded-xl border-2 ${
              selectedImage === index ? "border-blue-600" : "border-transparent"}`}
          >
            <img src={image} alt={`${vehicleName} ${index + 1}`}  className="h-24 w-full object-cover"/>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VehicleGallery;