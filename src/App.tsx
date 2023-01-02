import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/not-found/NotFound';
import Ticket from './pages/ticket/Ticket';

function App() {
  return (
    // <div className='App'>
    //   <p>Work in progress</p>

    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ticket />}/>
        <Route path='/ticket' element={<Ticket />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
