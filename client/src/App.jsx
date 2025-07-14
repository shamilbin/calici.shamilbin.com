import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(true); // true = dark, false = light

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
  ];

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-gray-100"} min-h-screen flex items-center justify-center`}>
      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        } rounded-2xl shadow-xl p-6 w-[320px]`}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">React Calculator</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition ${
              darkMode
                ? "bg-gray-700 hover:bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <input
          type="text"
          value={input}
          readOnly
          className={`w-full text-right text-2xl mb-4 p-3 rounded-lg border ${
            darkMode
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-gray-100 text-gray-900 border-gray-300"
          }`}
        />

        <div className="grid grid-cols-4 gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`p-4 text-xl font-semibold rounded-lg transition ${
                btn === "="
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-900"
              }`}
              onClick={() => (btn === "=" ? handleCalculate() : handleClick(btn))}
            >
              {btn}
            </button>
          ))}
          <button
            className={`col-span-4 p-4 text-xl font-semibold rounded-lg transition ${
              darkMode
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
