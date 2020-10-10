import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom'
import store from './store'
import Header from './common/header'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Route path='/' exact render={()=><div>home</div>}></Route>
        <Route path='/detail' exact render={()=><div>detail</div>}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
