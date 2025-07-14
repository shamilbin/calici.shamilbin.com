import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[320px]">
        <h1 className="text-2xl font-bold text-center mb-4">React Calculator</h1>
        <input
          type="text"
          value={input}
          readOnly
          className="w-full text-right text-xl mb-4 p-2 border rounded"
        />
        <div className="grid grid-cols-4 gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`p-4 text-xl font-semibold rounded-lg shadow-sm transition ${
                btn === "="
                  ? "bg-green-500 text-white"
                  : btn === "C"
                  ? "bg-red-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() =>
                btn === "="
                  ? handleCalculate()
                  : handleClick(btn)
              }
            >
              {btn}
            </button>
          ))}
          <button
            className="col-span-4 bg-red-400 text-white p-4 text-xl font-semibold rounded-lg"
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
