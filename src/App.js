import Panel from './Components/Panel/Panel'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import LandingPage from './Pages/landingPage';

function App() {
  //<Route path='/' element={<LandingPage />} />
  return (
    <BrowserRouter >
      <Routes>
        
        <Route path='/' element={<Panel />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
