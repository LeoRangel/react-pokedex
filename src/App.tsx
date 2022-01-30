import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './contexts/AppContext';
import PublicRouter from './routes/public';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <PublicRouter />
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
