// import './App.css';
// import Routes_path from './componenets/Routes_path';

// function App() {

//   return (
//     <div className="w-full max-w-full overflow-x-hidden">
//       <Routes_path/>
//     </div>
//   );
// }

// export default App;


import React from "react";
import Routes_path from './componenets/Routes_path';
import FloatingButton from "./componenets/FloatingButton"; // ✅ import here

function App() {
  return (
    <div className="relative">
      <Routes_path />   {/* ✅ all your routes */}
      <FloatingButton /> {/* ✅ floating button on all pages */}
    </div>
  );
}

export default App;
