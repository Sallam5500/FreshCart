import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { CartContext } from "../Context/CartContext";
import { wishListContext } from "../Context/WishListContext";

export default function RecentProduct() {
  const [product, setProduts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addProductToCart } = useContext(CartContext);
  const { wishList, addProductToWishList } = useContext(wishListContext);
  async function getProducts() {
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products`
    );

    setProduts(data.data);
    setLoading(false);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mx-auto flex flex-wrap gap-y-4 py-8 justify-center  ">
          {product.map((product, index) => {
            const isFavourite = wishList?.data?.some(
              (item) => item.id === product.id
            );

            return (
              <div
                key={index}
                className="product p-2 rounded-lg group main-w-[200px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 px-1  "
              >
                <Link to={`   /productdetails/${product.id}  `}>
                  <img
                    src={product.imageCover}
                    className="w-full"
                    alt={product.title}
                  />
                  <h3 className="text-main">{product.category.name}</h3>
                  <h3 className="text-xl">
                    {product.title.split(" ", 2).join(" ")}
                  </h3>
                  <div className="flex justify-between">
                    <span>{product.price}EGP</span>
                    <span>
                      <i className="fas fa-star rating-color"></i>{" "}
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>
                <div className="flex justify-between py-3">
                  <button
                    onClick={() => addProductToCart(product.id)}
                    className="btn w-full"
                  >
                    AddToCart
                  </button>
                  {isFavourite ? (
                    <button
                      onClick={() => addProductToWishList(product.id)}
                      className=" bg-transparent hover:bg-transparent text-slate-900 "
                    >
                      {" "}
                      <i className="icon fa-solid fa-heart w-15 text-2xl "></i>
                    </button>
                  ) : (
                    <button
                      onClick={() => addProductToWishList(product.id)}
                      className=" bg-transparent hover:bg-transparent text-red-700 "
                    >
                      {" "}
                      <i className="icon fa-regular fa-heart w-15 text-2xl "></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
