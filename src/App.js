import "./App.css";
import React, { useState, useEffect } from "react";

/*
function App() {
  const [second,setSecond]=useState(0);
  const [min,setMin]=useState(0);
  const [show,setShow]=useState(true);
  var timer
  useEffect(()=>{
    timer=setInterval(()=>{
      setSecond(second+1);

      if(second===59){
        setMin(min+1);
        setSecond(0);
      }
    },1000);

    return()=>clearInterval(timer);
  },[true,second,min])

 function handleToggle(){
  setShow(!show) 
    
 }
    

    
console.log(show)

 function handleReset(){
  setSecond(0);
  setMin(0);
  
 }


  return (
    <div className="App">
      <div>timer</div>
      <h1>{min<10 ? "0"+min:min}:{second<10 ? "0"+second:second}</h1>
       <button onClick={handleToggle}>
        {show ? "pause":"start"}
       </button>
       <button onClick={handleReset}>reset</button>
     
    </div>
  );
}

export default App;

 */

function App() {
  const [second, setSecond] = useState(0);
  const [min, setMin] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer;
    if (show) {
      timer = setInterval(() => {
        if (second === 59) {
          setSecond(0);
          setMin((min) => min + 1);
        } else {
          setSecond((second) => second + 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [show, second, min]);

  function handleReset() {
    setSecond(0);
    setMin(0);
    setShow(false);
  }

  function handleToggle() {
    setShow(!show);
  }
  return (
    <>
    <div className="container">
      <div>timer </div>
      <div>
        {min < 10 ? "0" + min : min}:{second < 10 ? "0" + second : second}
      </div>

      {// method 2 :
       /*<div>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
         </div>*/}
      <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleToggle}>{show ? "Pause" : "Start"}</button>
      </div>
      </div>
    </>
  );
}
export default App;
