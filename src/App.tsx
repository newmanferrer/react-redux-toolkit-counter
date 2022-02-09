import { Provider } from 'react-redux';
import { store } from './state/store';
import { GlobalStyles, Counter } from './components';

const App: React.FC<{}> = (): JSX.Element => {
 return (
  <Provider store={store}>
   <GlobalStyles />
   <Counter />
  </Provider>
 );
};

export default App;
