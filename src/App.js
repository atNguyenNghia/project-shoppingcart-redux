import React,{Component} from 'react'
import rootReducer from './redux/reducer/RootReducer'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import GioHang from './container/giohang';
class App extends Component {
  render(){
    const store = createStore(rootReducer);
    console.log('render fired');
    return (
      <>
        <Provider store={store}>
            <div>
              <GioHang/>
            </div>
        </Provider>
      </>
    );
  }
}

export default App;
