import GlobalStyle from './styles/global';
import RoutesApp from './router/routes';
import { ProviderMoviments } from "./context/ContextMoviments"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ParticleComponent from './components/ParticlesBackground/ParticlesBg';


function App() {
  return (
    <ProviderMoviments>
      {/* <ParticleComponent /> */}
      <RoutesApp />
      <GlobalStyle />
      <ToastContainer />
    </ProviderMoviments>

  );
}

export default App;

