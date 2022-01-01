import React, {useState} from "react";


function App() {
  const [value,setValue] = useState(0);

  const classFor = value>0?"hot":(value===0)?'res':"cold";
  if(value>30) setValue(30);
  if(value<-30) setValue(-30);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display `+classFor}>{value}°C</div>
      </div>
      <div className="button-container">
        <button className="hot" onClick={()=> setValue(value+1)}>+</button>
        <button className="cold" onClick={()=> setValue(value-1)}>-</button>
        <button className="res" onClick={()=> setValue(0)}>res</button>
      </div>
    </div>
  );
}

export default App;
