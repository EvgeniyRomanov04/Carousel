import React from "react";
import './App.css'
import Carousel from "./components/carousel/Carousel";

function App() {

  return (
    <div className="App">

      <div className="container">
        <div className="card">
          <Carousel>
            <div className="item item-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dolores consequuntur corrupti quis veritatis repellat.</div>
            <div className="item item-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dolores consequuntur corrupti quis veritatis repellat.</div>
            <div className="item item-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti dolores consequuntur corrupti quis veritatis repellat.</div>
          </Carousel>
        </div>
      </div>

    </div>
  );
}
export default App;
