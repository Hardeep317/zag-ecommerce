import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import AppContext from "@/AppContext";
import Image from "next/image";

function cart() {
  const { addToCart, cart, removeFromCart, subt, deleteItem } =
    useContext(AppContext);

  console.log(subt);

  return (
    <div>
      <div className="w-11/12 m-auto pt-4 min-h-screen">
        <div className="flex justify-between items-center mb-5">
          <Link href={"/"}>
            {" "}
            <AiOutlineArrowLeft className="text-xl" />
          </Link>
          <div><FiBell className="text-2xl" />
          <p className="absolute bg-black text-white top-7 right-4 lg:right-[614px] rounded-full w-3 text-center self-center text-[7px] h-3">1</p></div>
        </div>

        {Object.keys(cart).length == 0 && (
          <div>
            <h1>Your Cart is Empty</h1>
          </div>
        )}

        {Object.keys(cart).length > 0 &&
          Object.keys(cart).map((item, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-md my-2"
              >
                <div>
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-16 h-16 block"
                    src={`${cart[item].img}`}
                  />
                </div>
                <div className="flex flex-col justify-between h-[55px]">
                  <div className="">
                    <p className="text-xs font-semibold">
                      {cart[item].title.slice(0, 18)}
                    </p>
                    <p className="text-[10px] text-gray-400">
                      Size {cart[item].size}
                    </p>
                  </div>
                  <p className="text-xs font-semibold">
                    INR {cart[item].price}
                  </p>
                </div>
                <div className="flex flex-col justify-between items-end h-[55px] w-14 ">
                  <p className=" ml-[-30px]">
                    <RiDeleteBinLine
                      onClick={() => deleteItem(item)}
                      className="text-red-600 text-sm"
                    />
                  </p>
                  <div className="flex justify-between items-center w-full">
                    <button
                      className="border-[1px] border-gray-300 px-1 w-5 text-[15px] font-semibold"
                      onClick={() =>
                        removeFromCart(
                          item,
                          1,
                          cart[item].img,
                          cart[item].title,
                          cart[item].size,
                          cart[item].price
                        )
                      }
                    >
                      -
                    </button>
                    <p className="text-xs font-semibold">{cart[item].qty}</p>
                    <button
                      className="border-[1px] border-gray-300 w-5 px-1 text-[13px] font-semibold"
                      onClick={() => {
                        addToCart(
                          item,
                          1,
                          cart[item].img,
                          cart[item].title,
                          cart[item].size,
                          cart[item].price
                        );
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        <div className="mb-20">
          <input
            className="bg-gray-100 p-3 font-semibold rounded-r-lg outline-0 w-full text-xs my-3"
            type="text"
            placeholder="Add a Voucher"
          />

          <div className="flex justify-between items-center text-xs my-3 font-semibold">
            <p className="text-gray-300">Sub-total</p>
            <p>INR {subt}</p>
          </div>

          <div className="flex justify-between items-center text-xs my-3 font-semibold">
            <p className="text-gray-300">VAT (%)</p>
            <p>INR 0</p>
          </div>
          <div className="flex justify-between items-center text-xs my-3 font-semibold">
            <p className="text-gray-300">Shipping fee</p>
            <p>INR 80</p>
          </div>

          <div className="flex justify-between items-center text-xs my-2 font-semibold border-t-2 border-gray-200 pt-4">
            <p>Total</p>
            <p>INR {subt + 80}</p>
          </div>
        </div>

        <div className="bg-white fixed bottom-0 w-[294px] border-t-[1px] p-3 border-gray-200 m-auto">
          <button className="bg-black text-white m-auto py-3 rounded-md text-xs  w-11/12">Checkout <AiOutlineArrowRight className="inline text-lg"/></button>
        </div>
      </div>
    </div>
  );
}

export default cart;
