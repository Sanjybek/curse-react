
import { useState } from "react";
import styles from "./App.module.css"

import Addtask from "./components/AddTask/AddTask";
import List from "./components/List/List"
import UserList from "./components/UserList/UserList"
import TodoList from "./components/TodoList/TodoList";

function App() {

  const [count, setCount] = useState(1)
  // console.log(count);
  const handleCount = () => {
    setCount(2)
  }
  // const arr = ['item1','item2','item3']
  // const [a, b] = arr
  // console.log(a,b, 'кортедж');


  // const count = 1
  const str = 'l9'
  const arr = ['item1','item2','item3']
  const numer = 123456

  
  return (
      <>
          {/* <UserList/> */}
          {/* <h1 className={'list'}>TODO LIST</h1>
          <button onClick={handleCount}>click</button>
          <Addtask></Addtask>
          <List
          count = {count}
          str={str}
          arr={arr}
          numer={numer}
          /> */}
          <TodoList/>

          

        
      </>
  )

}

export default App;
