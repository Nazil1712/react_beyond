import { useRef, useState } from "react";

const Referencing = () => {
  const [y, setY] = useState(0);

  let x = 0;

  console.log("Rendering...");

  const ref = useRef(0);

  return (
    <div>
      <div
        id="container"
        className="w-96 h-96 border border-black m-4 rounded-lg p-4 flex flex-col gap-6"
      >
        <div id="number-container" className="">
          <button
            onClick={() => {
              x = x + 1;
              console.log("x = " + x);
            }}
            className="bg-green-300 border rounded-lg p-2"
          >
            Increase X
          </button>
          <span className="ml-6">Let = {x}</span>
        </div>
        <div className="h-1 bg-gray-600"></div>
        <div id="number-container" className="">
          <button
            onClick={() => {
              setY(y+1);
            }}
            className="bg-green-300 border rounded-lg p-2"
          >
            Increase Y
          </button>
          <span className="ml-6">State = {y}</span>
        </div>
        <div className="h-1 bg-gray-600"></div>
        <div id="number-container" className="">
          <button
            onClick={() => {
              ref.current = ref.current + 1;
              console.log("Ref = " + ref.current)
            }}
            className="bg-green-300 border rounded-lg p-2"
          >
            Increase Ref
          </button>
          <span className="ml-6">Ref = {ref.current}</span>
        </div>
      </div>
    </div>
  );
};

export default Referencing;
