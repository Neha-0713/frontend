"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllProduct = () => {
  const [productList, setProductList] = useState([]);
  const fetchProduct = async () => {
    const res = await axios.get("http://localhost:5000/product/getall");
    setProductList(res.data);
  };
  const deleteProduct = (id) => {
    axios
      .delete("http://localhost:5000/product/delete/" + id)
      .then((response) => {
        toast.success("Product Deleted");
        fetchProduct();
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to delete product");
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      {/* Card Blog */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card */}
          {productList.map((product) => {
            return (
              <div
                key={product._id}
                className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
              >
                <div className="h-52 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                  <img src={product.image} alt="logo" w={29} h={29} />
                </div>
                <div className="p-4 md:p-6">
                  <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                    {product.brand}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                    {product.title}
                  </h3>
                  <p className="mt-3 text-gray-500 dark:text-neutral-500">
                    {product.category}
                  </p>
                </div>
                <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                  <Link
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-blue-500  text-gray-800 shadow-sm hover:bg-blue-400"
                    href={"/updateproduct/" + product._id}
                  >
                    Edit
                  </Link>
                  <button
                    onClick={ ()=>{deleteProduct(product._id)}}
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-red-600  text-gray-800 shadow-sm hover:bg-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* End Card Blog */}
    </>
  );
};

export default AllProduct;