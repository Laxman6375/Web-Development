import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div
      className={
        " m-4 p-2 w-96 h-96 border border-black " +
        (isDark && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className=" m-10 p-2 bg-green-400"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="outline outline-2 w-72 px-2 "
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1>nth Prime: {prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
