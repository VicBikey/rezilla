import React, { useMemo, useState } from "react";
import { dbDatas } from "./dt";

export const WorkingWithArray = () => {
  const [items, setItems] = useState(dbDatas);
  const [searchQuery, setSearchQuery] = useState("");

  const [toggle, setToggle] = useState(false);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const liking = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id == id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(updatedItems);
  };

  //
  const Liked = () => {
    // console.log("value")
    return items.filter((item) => item.checked == true);
  };

  // Filter the list of items based on the search query
  const filteredItems = items.filter((item) =>
    item.login.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center w-full flex-wrap gap-10 items-center bg-gray-600 ">
      <div className="w-[100%] bg-black h-[50px] flex items-center justify-center ">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="mr-10"
        />

        <button className="btn bg-gray-600 text-white px-3 py-2 rounded-2xl mr-10">
          Liked users {Liked().length}
        </button>

        <button
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className="btn bg-gray-600 text-white px-3 py-2 rounded-2xl"
        >
          Toggle
        </button>
      </div>

      {filteredItems.map((userName) => {
        if (!toggle) {
          return (
            <div className="" key={userName.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => liking(userName.id)}
                className={`w-6 h-6 ${
                userName.checked ? "fill-red-500" : "fill-none"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <div className="bg-blue-400 w-[200px] items-center flex flex-col">
                {/* <img src={userName.avatar_url} alt="" /> */}
                <img src="Goon.avif" alt="" />
              </div>
              <div className="flex flex-col text-center items-center ">
                <p>{userName.login}</p>
                <a className="py-1 bg-purple-700 w-[150px] rounded-lg" href="">
                  Visit my Portfolio
                </a>
              </div>
            </div>
          );
        } else {
          return (
            <div className="" key={userName.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                onClick={() => liking(userName.id)}
                className={`w-6 h-6 ${
                  userName.checked ? "fill-red-500" : "fill-none"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <div className="flex gap-5 ">
                <div className="bg-blue-400 w-[100px] items-center flex justify-center">
                  {/* <img src={userName.avatar_url} alt="" /> */}
                  <img src="Goon.avif" alt="" />
                </div>
                <div className="flex flex-col text-center items-center ">
                  <p>{userName.login}</p>
                  <a
                    className="py-1 bg-purple-700 w-[50px] rounded-lg text-sm"
                    href=""
                  >
                    Visit
                  </a>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
