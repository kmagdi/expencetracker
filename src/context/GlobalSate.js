import React,{createContext,useReducer} from 'react'

const initialState={
    transactions:[
        {id:1, megjegyzes:'virág', osszeg:-1000},
        {id:2, megjegyzes:'könyv', osszeg:-3000},
        {id:3, megjegyzes:'havibér', osszeg:100000},
        {id:4, megjegyzes:'benzin', osszeg:-10000},
    ]
}

//létrehozzuk a globális state-t
export const GlobalContext =createContext(initialState)

//ahhoz, h a többi komponens hozzáférjen a GlobalState-hez szükséges egy Provider(intéző) komponens:
export const GlobalProvider=({children})=>{
    const [state,dispatch]=useReducer(AppReducer,initialState)

    //action:
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id
        })
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return(
        <GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction,addTransaction}}> >
            {children}
        </GlobalContext.Provider>
    )
}

//a global state-en a komponensek különböző tipusú műveleteket hajthatnak végre, definiálni kell
// a lehetséges műveleteket:
const AppReducer=(state, action)=>{
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(obj=>obj.id!=action.payload)
            }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}
