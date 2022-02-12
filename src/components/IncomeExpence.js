import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalSate'

export const IncomeExpence=()=> {
    const {transactions}=useContext(GlobalContext)
    const totalMinus=transactions.reduce((acc,obj)=>parseInt(obj.osszeg)<0? acc+parseInt(obj.osszeg) : acc,0)
    const totalPlus=transactions.reduce((acc,obj)=>parseInt(obj.osszeg)>0? acc+parseInt(obj.osszeg) : acc,0)

  return (
    <div className="row">
        <div className="col" id="income">
            <h4 className="text-center text-success border-bottom border-success">Bevétel</h4>
            <p className="text-center text-success">{totalPlus} Ft</p>
        </div>
        <div className="col" id="expence">
            <h4 className="text-center text-danger border-bottom border-danger">Kiadás</h4>
            <p className="text-center text-danger">{totalMinus} Ft</p>
        </div>
    </div>
  )
}
