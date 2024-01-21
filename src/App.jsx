import GlobalStyle from './styles/global';
import RoutesApp from './router/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
