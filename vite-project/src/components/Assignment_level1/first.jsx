import { useState } from "react";

const First = () => {
  //state
  // 1st state
  const [inputText, setInput] = useState("");

  //2nd state
  const [isVisible, setIsVisible] = useState(true);

  // 3rd state
  const [inputValue, setInputValue] = useState("");

  // 4th state
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // 5th state
  const [selectedColor, setSelectedColor] = useState("");
  const colorOptions = ["Yellow", "Black", "Green", "Red"];

  // 6th States
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  // FUNCTIONS
  // first
  const inputChanger = (e) => {
    const changeInput = e.target.value;
    setInput(changeInput);
  };

  //second
  const handleKeyPress = (e) => {
    setIsVisible(!isVisible);
  };

  //3rd
  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const length = inputValue.length;

  // 4th

  // 5th
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };



  const AddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos((t) => [...t, [<input type="checkbox" />, `  ${newTodo}`]]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  // 6th Function
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter the list of items based on the search query
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex items-center w-screen justify-around bg-black gap-[100px] flex-wrap h-fit p-[50px]">
      <div className="w-full bg-blue-500 items-center justify-center rounded-3xl p-5 block text-center self-center text-5xl">
        Projects
      </div>

      {/* first Assignment */}
      <div className="w-[400px] h-[200px] flex flex-col bg-blue-500 items-center justify-center rounded-3xl">
        <input
          type="text"
          value={inputText}
          onChange={inputChanger}
          className="rounded-3xl"
        />
        <div className="flex flex-wrap flex-col">{inputText}</div>
      </div>

      {/* second Assignment */}
      <div className="w-[400px] h-[200px] flex flex-col bg-blue-500 items-center justify-center rounded-3xl ">
        <button
          className="border bg-gray-500 text-black p-4 rounded-2xl mb-3"
          onClick={handleKeyPress}
        >
          Show/Hide Text
        </button>
        {isVisible && <p>Toggle me</p>}
      </div>

      {/* third Assignment */}
      <div className="w-[400px] h-[200px] flex flex-col bg-blue-500 items-center justify-center rounded-3xl">
        <button
          className="border rounded-2xl bg-gray-500 text-black p-4 mb-3"
          onClick={(e) => setInputValue("")}
        >
          clear
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          className="rounded-3xl"
        />
        <div>{length}</div>
      </div>

      {/* Fourth */}
      <div className="to-do-list w-[400px] flex flex-col bg-blue-500 items-center justify-center rounded-3xl p-10">
        <div>
          <input
            className="rounded-3xl"
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Type a todo task..."
          />

          <button
            className="add-button border mt-2 p-1 rounded-md border-gray-600 bg-slate-400 inline"
            onClick={AddTodo}
          >
            Add
          </button>
        </div>
        <ul>  Q
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button
                className="delete-button border m-2 p-1 rounded-md border-gray-600 bg-slate-400"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 5th */}

      <div className="w-[400px] flex flex-col bg-blue-500 items-center justify-center rounded-3xl p-10">
        <select
          value={selectedColor}
          onChange={handleColorChange}
          className="rounded-3xl"
        >
          <option value="">Select a color</option>
          {colorOptions.map((color, index) => (
            <option value={color}>{color}</option>
          ))}
        </select>

        {selectedColor && (
          <div
            style={{
              backgroundColor: selectedColor,
            }}
            className="mt-[20px] w-[100px] h-[100px] rounded-full animate-bounce"
          ></div>
        )}
      </div>


      {/* 6th Assignment */}
      <div className="w-[400px] flex flex-col bg-blue-500 items-center justify-center rounded-3xl p-10">
        <input
          className="rounded-3xl"
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search items..."
        />

        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default First;
