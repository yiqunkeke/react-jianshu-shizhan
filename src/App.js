import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route} from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        {/* <Route path='/detail' exact component={Detail}></Route> */}
        <Route path='/login' exact component={Login}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
