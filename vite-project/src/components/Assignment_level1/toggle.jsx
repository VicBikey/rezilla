import React, { useState } from "react";
import { dbDatas } from "../dt";

export const Toggle = () => {
  const [items, setItems] = useState(dbDatas);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setItems(
      items.filter((item) =>item.login.toLowerCase().startsWith(searchQuery.toLowerCase()))
    )
  };

  // Filter the list of items based on the search query
  const filteredItems = items.filter((item) =>
    item.login.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="flex justify-center w-full flex-wrap gap-10 items-center bg-gray-600 ">
      <div className="w-[100%] bg-black h-[50px] flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      {items.map((userName) => {
        return (
          <div className="" key={userName.id}>
            <div className="bg-blue-400 w-[200px] items-center flex flex-col">
              <img src={userName.avatar_url} alt="" />
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
      })}
    </div>
  );
};
