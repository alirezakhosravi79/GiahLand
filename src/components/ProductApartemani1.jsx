import { useEffect, useState } from "react";
import axios from "axios";

const ProductApartemani1 = ({ categoryId }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products?categoryId=2")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [categoryId]);


  return (
    <div>
      <h2>Products</h2>
      <section>
        <ul className="flex gap-4 py-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="w-[288px] h-[440px] px-[16px] rounded-[12px] border-1 border-[#D9D9D9]"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.name}
                  width="256"
                  height="261"
                  className="pt-4 mx-auto rounded-[8px] bg-[#FFFFFF]"
                />
                <h3 className="py-5 text-[18px] font-normal">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span>قیمت:</span>
                  <span>{product.price} تومان</span>
                </div>
                <strong>Weight: {product.weight}</strong>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ProductApartemani1;
