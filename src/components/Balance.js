import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalSate'

export const Balance=()=> {
    const {transactions}=useContext(GlobalContext)
    const total=transactions.reduce((acc,obj)=>acc+parseInt(obj.osszeg),0)
  return (
    <>
    <h4 className="text-center">Egyenleg</h4>
    <h1 className="m-2 text-center border-bottom">{total} Ft</h1>
    
    </>
  )
}
