// import React from 'react';
import Link from "next/link";
import React, { useEffect, useState,useContext } from "react";
import { AiOutlineArrowLeft, AiFillStar, AiOutlineHeart } from "react-icons/ai";
import AppContext from "@/AppContext";
import { FiBell } from "react-icons/fi";
import { RiHome6Line, RiShoppingBag2Line } from "react-icons/ri";
import { useRouter } from "next/router";

function slug() {
  const [size, setSize] = useState("s");
  const { addToCart } = useContext(AppContext);
  const [data, setData] = useState([]);
  const router = useRouter();

  const slug = router.query.slug;

  useEffect(() => {
    if (slug != null) {
      fetch("https://ecommerce-data-5t9j.onrender.com/all")
        .then((res) => res.json())
        .then((res) => {
          setData(res.filter((item) => item.slug === slug));
        });
    }
  }, [slug]);

  return (
    <div>
      <div className="w-11/12  m-auto pt-4 min-h-screen">
        <div className="flex justify-between items-center ">
          <Link href={"/"}>
            {" "}
            <AiOutlineArrowLeft className="text-xl" />
          </Link>
          <div><FiBell className="text-2xl" />
          <p className="absolute bg-black text-white top-7 right-4 lg:right-[614px] rounded-full w-3 text-center self-center text-[7px] h-3">1</p></div>
        </div>
        {data[0] != null ? (
          <div key={data[0].id} className="mb-16">
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-3 py-5 mx-auto">
                <div className="mx-auto flex flex-wrap">
                  <img
                    alt="ecommerce"
                    className=" w-full h-64 object-cover object-center rounded"
                    src={data[0].img}
                  />
                  <AiOutlineHeart className="bg-white w-12 h-11 shadow-lg rounded-lg p-2  absolute top-[75px] right-8 lg:right-[622px]"/>
                  <div className=" w-full   mt-3 ">
                    <h1 className="text-gray-900 text-xl title-font font-medium mb-1">
                      {data[0].title}
                    </h1>

                    <div className="flex items-center mb-4">
                      <AiFillStar className="text-yellow-500 text-xl" />{" "}
                      4.5/5(45 reviews)
                    </div>

                    <p className="text-xs">{data[0].des}</p>
                  </div>

                  <div className="mt-2">
                    <p>Choose Size</p>
                    <div className="mt-3">
                      {size === "s" ? (
                        <button className="bg-blue-500 text-white py-1 px-3 text-sm font-semibold mr-3 ">
                          S
                        </button>
                      ) : (
                        <button
                          onClick={() => setSize("s")}
                          className="border-[1px] py-1 px-3 text-sm font-semibold mr-3 border-gray-300"
                        >
                          S
                        </button>
                      )}
                      {size === "m" ? (
                        <button className="bg-blue-500 text-white py-1 px-3 text-sm font-semibold mr-3 ">
                          M
                        </button>
                      ) : (
                        <button
                          onClick={() => setSize("m")}
                          className="border-[1px] py-1 px-3 text-sm font-semibold mr-3 border-gray-300"
                        >
                          M
                        </button>
                      )}
                      {size === "l" ? (
                        <button className="bg-blue-500 text-white py-1 px-3 text-sm font-semibold mr-3 ">
                          L
                        </button>
                      ) : (
                        <button
                          onClick={() => setSize("l")}
                          className="border-[1px] py-1 px-3 text-sm font-semibold mr-3 border-gray-300"
                        >
                          L
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div
            role="status"
            className="space-y-8 animate-pulse "
          >
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 ">
              <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <div className="fixed bottom-0 w-[294px] m-auto flex justify-between items-center bg-white p-3 border-t-[1px] border-gray-300">
          <div>
            {data[0] != null ? (
              <div>
                {" "}
                <p className="text-sm text-gray-500">Price</p>
                <p className="text-xl">INR {data[0].price}</p>
              </div>
            ) : (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
          <div>
           <Link href={'/cart'}> <button className="bg-black text-white flex items-center py-3 px-6 text-[13px] rounded-lg" onClick={() => {
                addToCart(
                    slug,
                    1,
                    data[0].img
                    ,
                    data[0].title,
                    size,
                    data[0].price
                )
            }}>
              <RiShoppingBag2Line className="mr-2 text-lg" /> Add to Cart
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default slug;
