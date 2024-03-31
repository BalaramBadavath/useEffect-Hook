import React, { useEffect, useState } from 'react'
import EffectUnmount from './EffectUnmount'

const Effect = () => {

    let [count,setCount]=useState(0)
    let [salary,setSalary]=useState(10000)
    let [unmount,setUnmount] = useState(true)

    //  useEffect(()=>{
    //*      console.log("useEffect Acting like Component Did Update Method")
    //  })

    // useEffect(()=>{
    //*    console.log("useEffect Acting like Component Did Mount Method")
    // },[])

    useEffect(()=>{
        console.log("useEffect Efficiently updating whenever only the dependency changes")
   },[salary])

    let handleIncrement=()=>{
       setCount(count+1)
    }
    let handleSalary=()=>{
       setSalary(salary+10000)
    }

    let handleUnmount=()=>{
        setUnmount(!unmount)
    }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={handleIncrement}>Increment</button>
   <h1>{salary}</h1>
    <button onClick={handleSalary}>Increment Salary</button>
  <br /><br />
  {unmount?<EffectUnmount/>:<></>}
<br /><br />
  <button onClick={handleUnmount}>Click To Remove Component</button>

    </>
  )
}

export default Effect