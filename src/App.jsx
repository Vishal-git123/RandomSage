import axios from 'axios';
import  { useState } from "react";
const App = () =>{
  const[advice,setadvice] = useState('');
  const [count,setcount] = useState(0);
  async function handlecheck(){
   const response = await axios.get("https://api.adviceslip.com/advice");
  setadvice(response.data.slip.advice)
  setcount(count+1);


   }
  return(
    <div>
      <h1>Random sage</h1>
      <button onClick={handlecheck}>Get advice</button>
      <h2>this is your advice:{advice}</h2>
      <h3>you have read {count}pieces of advice today</h3>
      </div>
  );
};
 export default App;