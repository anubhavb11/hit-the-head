import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import mole from "./mole.png";
import molehole from './molehole.png'
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const arr = ["ß", "dwd", "dwd", "frf", "defd", "dewfd"];
  const [point, setPoint] = useState([0,0])
  const [score,setScore] = useState(0)
  const [size, setSize] =useState( [[0,1,1],[1,1,1],[1,1,1]]);
  const data = useRef(null);
  function generateRandom(){
  const val1 = Math.floor(Math.random() *100 %3)
  const val2 = Math.floor(Math.random() *100 %3)
  return [val1,val2];
  }
  useEffect(()=>{
     setInterval(() => {

      const [a,b] = generateRandom();
      setPoint([a,b]);
      setSize((prv)=>{
        
        prv[point[0]][point[1]] = 1;
        prv[a][b] = 0
        console.log(a,b,"ab");
        console.log(point,[a,b],"pb");
        // console.log(prv);

        return prv
        
      })
     }, 5000);
  },[point])
  


  function handleClick(i,j){
    setSize((prv)=>{
      console.log("CLICK",size[i][j]);
      
      if(!prv[i][j]){
        setScore((prv)=> prv+1)
      }
      prv[i][j] = 1;
      return prv
    })
    
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{score}</h1>
      {
        size.map((val,i)=>(
          <div>
              {
                val.map((item,j)=>(
                  item ? <img onClick={() => handleClick(i,j)}ref ={data}src= {mole}/> : <img onClick={() =>handleClick(i,j)}ref ={data}src= {molehole}/>
                ))
              }
            </div>
        ))
        
      }
    </div>
  );
}

function Word({ item }) {
  const [words, setWords] = useState(item.slice(0));
  return words.map((val) => <div>{val}</div>);
}

export default App;
