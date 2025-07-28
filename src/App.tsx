import User from "./Components/User"
import { Button } from "./Components/Button"
import { useState } from "react"
import UserProfile from "./Components/UserProfile";
import Todo from "./Components/Todo";
import FocusInput from "./Components/FocuInput";
import ContactForm from "./Components/ContactForm";
import EventHandling from "./Components/EventHandling";
import MyComponent from "./Components/MyComponent";



 const App = () => {
  const[count, setCount] = useState<number>(0);


   return (

    <div>
      {/* <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button> */}

      {/* <FocusInput /> */}
      {/* <ContactForm/> */}
      <MyComponent/>
    </div>
   )
 }
 
 export default App