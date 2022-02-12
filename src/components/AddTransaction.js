import React, { useState,useContext } from 'react'
import {GlobalContext} from '../context/GlobalSate'

export const AddTransaction=()=> {
    const [text,setText]=useState('')
    const [nr, setNr]=useState(0)
    const {addTransaction}=useContext(GlobalContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTransaction={
            id:Math.floor(Math.random()*1000000),
            megjegyzes:text,
            osszeg:nr
        }
        addTransaction(newTransaction)
    }
   
  return (
    <div className="row">
        <h3 className="text-center">Tranzakció hozzáadása</h3>
        <form className="text-center" onSubmit={handleSubmit}>
            <input className="form-control " type="text" placeholder="megjegyzés..." 
                value={text} onChange={(e)=>setText(e.target.value)}/>
            <input className="form-control" type="number" placeholder="kiadás/bevétel összege" 
                value={nr} onChange={(e)=>setNr(e.target.value)}/>
            <button className="btn btn-primary">Hozzáadás</button>
        </form>
    </div>
  )
}
