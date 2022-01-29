import { BrowserRouter } from 'react-router-dom';
import PublicRouter from './routes/public';

function App() {
  return (
    <BrowserRouter>
      <PublicRouter />
    </BrowserRouter>
  );
}

export default App;
