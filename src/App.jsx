import GlobalStyle from './styles/global';
import RoutesApp from './router/routes';
import { ProviderMoviments } from "./context/ContextMoviments"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <ProviderMoviments>
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer />
    </ProviderMoviments>

  );
}

export default App;
