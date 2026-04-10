import { Provider } from 'react-redux';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Store } from './store/store';


const App = () => {

  return (
<BrowserRouter>
  <Provider store={Store}>
    <AppRoutes />
  </Provider>
</BrowserRouter> 

)
}

export default App