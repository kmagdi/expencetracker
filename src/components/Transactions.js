import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalSate'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export const Transactions=()=> {
    const {transactions}=useContext(GlobalContext)
    const {deleteTransaction}=useContext(GlobalContext)

    console.log(transactions)
 
  return (
    <div className="row mt-2 border">
      <h4 className="text-center ">Tranzakciók listája</h4>
      {transactions.map(transaction=>
            <div key={transaction.id} className="col-12 mb-1 border d-flex justify-content-between align-items-center">
                <FontAwesomeIcon icon={faTrash} className="icon" onClick={()=>deleteTransaction(transaction.id)}/>
                <p>{transaction.megjegyzes}</p>
                <p className={transaction.osszeg>0? "border-success border-end border-3 " : 
                                                    "border-danger border-end border-3 " }>
                    {transaction.osszeg}
                </p>
            </div>
        )}
      
      
    </div>
  )
}
