import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store';

import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/itemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer/>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer/>
        <NewCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
