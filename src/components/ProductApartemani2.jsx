import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductApartemani2 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products?categoryId=4")
      .then((response) => {
        setImages(response.data); // ذخیره داده‌ها در state
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <div className=" ">
      {images.map((product, index) => (
        <div
          key={product.id}
          className="h-[240px]"
          style={{ backgroundImage: `url(${product.image})` }}
        >
          {/* محتوای دیگر */}
        </div>
      ))}
    </div>
  );
};

export default ProductApartemani2;
