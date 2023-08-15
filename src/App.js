// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import GoogleMapReact from "google-map-react";

function App() {
  return (
    <div className="app">
      <h1>Google Maps</h1>

      <figure className="maps_wrapper">
        <GoogleMapReact
          defaultZoom={1}
          defaultCenter={{ lng: 3.3792, lat: 6.5244 }}
        />
      </figure>
    </div>
  );
}

export default App;
