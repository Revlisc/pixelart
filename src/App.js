import Panel from './Components/Panel/Panel'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LandingPage from './Pages/landingPage';

function App() {
  
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/panel' element={<Panel />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
