import { FiBell, FiSearch } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import { RiHome6Line, RiShoppingBag2Line } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isFilter, setIsFilter] = useState(true);
  const [category, setCategory] = useState("all");
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState('');

  const getData = (url) => {
    fetch(url)
    .then((res) => res.json())
    .then((res) => setData(res))
  }

  useEffect(() => {
    if((category === 'all' && data.length == 0)  || searchVal === ''){
    getData(`https://ecommerce-data-5t9j.onrender.com/all`);
    }

    
  },[data,category])

  useEffect(() => {
    const handleData = setTimeout(() => {
      
      setData(data.filter((item) => item.title.toLowerCase().includes(searchVal.toLowerCase()) || item.category.toLowerCase().includes(searchVal.toLowerCase())))
    }, 400)

    return () => clearTimeout(handleData)
  }, [searchVal])

  return (
    <div>
      <div className="w-11/12 m-auto pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Discover</h2>
          <div><FiBell className="text-2xl" />
          <p className="absolute bg-black text-white top-7 right-4 lg:right-[614px] rounded-full w-3 text-center self-center text-[7px] h-3">1</p></div>
          
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center">
            <p className="text-2xl h-10 bg-gray-100 p-2 rounded-l-xl">
              <FiSearch className="" />
            </p>
            <input
              className="bg-gray-100 p-2 rounded-r-lg outline-0"
              type="text"
              placeholder="Search anything"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </div>
          {isFilter && (
            <p
              className="text-2xl p-2 bg-black cursor-pointer text-white font-medium rounded-md"
              onClick={() => setIsFilter(!isFilter)}
            >
              <BsFilter />
            </p>
          )}
          {!isFilter && (
            <p
              className="text-2xl p-2  cursor-pointer bg-gray-100 font-medium rounded-md"
              onClick={() => setIsFilter(!isFilter)}
            >
              <BsFilter />
            </p>
          )}
        </div>

        {isFilter && (
          <div className="flex justify-between items-center mt-3">
            {category === "all" ? (
              <button className="bg-black text-white py-2 rounded-lg px-4 text-xs font-semibold">
                All
              </button>
            ) : (
              <button
                className="bg-gray-100 py-2 rounded-lg px-4 text-xs font-semibold"
                onClick={() => {
                  setCategory("all")
                  getData('https://ecommerce-data-5t9j.onrender.com/all')
                }}
              >
                All
              </button>
            )}
            {category === "men" ? (
              <button className="bg-black text-white py-2 rounded-lg px-4 text-xs font-semibold">
                Men
              </button>
            ) : (
              <button
                className="bg-gray-100 py-2 rounded-lg px-4 text-xs font-semibold"
                onClick={() => {
                  setCategory("men")
                  getData('https://ecommerce-data-5t9j.onrender.com/mens')
                }}
              >
                Men
              </button>
            )}
            {category === "women" ? (
              <button className="bg-black text-white py-2 rounded-lg px-4 text-xs font-semibold">
                Women
              </button>
            ) : (
              <button
                className="bg-gray-100 py-2 rounded-lg px-4 text-xs font-semibold"
                onClick={() => {
                  setCategory("women")
                  getData('https://ecommerce-data-5t9j.onrender.com/women')
                }}
              >
                Women
              </button>
            )}
            {category === "kids" ? (
              <button className="bg-black text-white py-2 rounded-lg px-4 text-xs font-semibold">
                Kids
              </button>
            ) : (
              <button
                className="bg-gray-100 py-2 rounded-lg px-4 text-xs font-semibold"
                onClick={() => {
                  setCategory("kids")
                  getData('https://ecommerce-data-5t9j.onrender.com/kids')
                }}
              >
                Kids
              </button>
            )}
          </div>
        )}

        <section className="text-gray-600 body-font">
          <div className="container mx-auto mt-2 mb-16">
            <div className="grid gap-x-3 grid-cols-2">
              {
                data.map((item,i) => {
                  return <Link key={i} href={`/products/${item.slug}`}>
                  <div className="w-full">
                    <a className="block relative h-36 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={`${item.img}`}
                      />
                      <AiOutlineHeart className="bg-white h-6 w-6 p-1 font-semibold rounded-md absolute top-2 right-1 shadow-md"/>
                    </a>
                    <div className="mt-1">
                      <h2 className="text-gray-900 title-font text-base font-medium">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs">INR {item.price}</p>
                    </div>
                  </div>
                </Link>
                })
              }
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 bg-white flex justify-between items-center w-[294px] m-auto p-3">
          <Link href={"/"}>
            <div className="text-center">
              <RiHome6Line className="text-lg m-auto" />
              <p className="text-[10px] font-semibold text-gray-500">Home</p>
            </div>
          </Link>

          <Link href={"#"}>
            <div className="text-center">
              <AiOutlineHeart className="text-lg m-auto text-gray-500" />
              <p className="text-[10px] font-semibold text-gray-500">Saved</p>
            </div>
          </Link>

          <Link href={"/cart"}>
            <div className="text-center">
              <RiShoppingBag2Line className="text-lg m-auto text-gray-500" />
              <p className="text-[10px] font-semibold text-gray-500">Cart</p>
            </div>
          </Link>

          <Link href={"#"}>
            <div className="text-center">
              <LuSettings className="text-lg m-auto text-gray-500" />
              <p className="text-[10px] font-semibold text-gray-500">
                Settings
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
