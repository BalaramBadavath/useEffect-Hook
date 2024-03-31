import React, { useEffect } from 'react'

const EffectUnmount = () => {
    useEffect(()=>{
        return ()=>{
            console.log("useEffect Acting like Component Will Unmount Method")
        }
    },[])
  return (
    <>EffectUnmount</>
  )
}

export default EffectUnmount