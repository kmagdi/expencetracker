import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Balance} from './components/Balance'
import {AddTransaction} from './components/AddTransaction'
import {Transactions} from './components/Transactions'
import {IncomeExpence} from './components/IncomeExpence'
import {GlobalProvider} from './context/GlobalSate'

function App() {

  return (
    <GlobalProvider>
      <div className="container ">
        <header className="row">
            <h3 className="text-center">Költségkövető</h3>
        </header>
        <div className="row justify-content-center" >
          <div className="col-md-6 shadow">
            <Balance />
            <IncomeExpence />
            <Transactions />
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
