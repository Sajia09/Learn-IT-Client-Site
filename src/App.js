import logo from './logo.svg';
import './App.css';
import { routes } from './Routes/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
