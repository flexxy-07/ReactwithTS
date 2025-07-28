import User from "./Components/User"
import { Button } from "./Components/Button"
import { useState } from "react"
import UserProfile from "./Components/UserProfile";
import Todo from "./Components/Todo";



 const App = () => {
  const[count, setCount] = useState<number>(0);


   return (

    <div>
      {/* <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}

      <Todo />
    </div>
   )
 }
 
 export default App