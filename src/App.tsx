import { Provider } from 'react-redux';
import { AppRoutes } from './routes/AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import { Store } from './store/store';
import { Toaster } from 'react-hot-toast';


const App = () => {

  return (
<BrowserRouter>
  <Provider store={Store}>
    <Toaster />
    <AppRoutes />
  </Provider>
</BrowserRouter> 

)
}

export default App