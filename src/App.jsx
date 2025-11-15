// import React, { useState } from 'react'

// function App() {
//   // get color values from localstorage
//   const colors = JSON.parse(localStorage.getItem('color'));
//   const [r,setR]=useState(colors && colors.r?colors.r:0);
//   const [g,setG]=useState(colors && colors.g?colors.g:0);
//   const [b,setB]=useState(colors && colors.b?colors.b:0);

//   // save color Combination in localStorage
//   function saveColor(){
//     console.log("saveColor");
    
//     localStorage.setItem("color",JSON.stringify({r,g,b}))
//   }
//   return (
//     <div>
//       <div style={{backgroundColor:'rgb('+r+','+g+','+b+')'}} className='w-50 h-50 text-2xl text-white flex justify-center'>color</div><br />
//       <label htmlFor="">Red</label>
//       <input type="range" value={r} onChange={(event)=>setR(event.target.value)} name="" id="" min={0} max={255} className='w-40 ml-2' /><br /><br />
//       <label htmlFor="">Green</label>
//       <input type="range" value={g} onChange={(event)=>setG(event.target.value)}  name="" id="" min={0} max={255} className='w-40 ml-2'/><br /><br />
//       <label htmlFor="">Blue</label>
//       <input type="range" value={b} onChange={(event)=>setB(event.target.value)} name="" id="" min={0} max={255} className='w-40 ml-2'/><br /><br />
//       <button onClick={saveColor} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">Save Combination of Colors</button>
//     </div>
//   )
// }

// export default App


// second way of color picker using useEffect hook

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function App() {
  // Load colors from localStorage (only once at start)
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("color"));
    if (colors) {
      setR(colors.r);
      setG(colors.g);
      setB(colors.b);
    }
  }, []);

  // Save color Combination in localStorage
  function saveColor() {
    localStorage.setItem("color", JSON.stringify({ r, g, b }));
    // alert("Color saved successfully! 🎨");
    Swal.fire({
      // title: "Success!",
      text: "Color saved successfully! 🎨",
      icon: "success",
      confirmButtonText: "OK"
    });
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Preview Box */}
      <div
        style={{ backgroundColor: `rgb(${r},${g},${b})` }}
        className="w-64 h-40 rounded-2xl shadow-lg flex items-center justify-center text-white text-2xl font-semibold"
      >
        RGB({r}, {g}, {b})
      </div>

      <div className="mt-8 space-y-6 w-full max-w-md">
        {/* Red */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Red: {r}</label>
          <input
            type="range"
            value={r}
            onChange={(e) => setR(Number(e.target.value))}
            min={0}
            max={255}
            className="w-full accent-red-500"
          />
        </div>

        {/* Green */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Green: {g}</label>
          <input
            type="range"
            value={g}
            onChange={(e) => setG(Number(e.target.value))}
            min={0}
            max={255}
            className="w-full accent-green-500"
          />
        </div>

        {/* Blue */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Blue: {b}</label>
          <input
            type="range"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            min={0}
            max={255}
            className="w-full accent-blue-500"
          />
        </div>

        {/* Save Button */}
        <button
          onClick={saveColor}
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-5 rounded-xl shadow-md transition duration-200"
        >
          Save Combination
        </button>
      </div>
    </div>
  );
}

export default App;
