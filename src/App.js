import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import { Content, Home } from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Content/>}/>
        <Route path='/home' exact element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
