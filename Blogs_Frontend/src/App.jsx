import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginUser from './pages/login';
import Home from './pages/home';
import Navbar from './component/navbar';
import Sidebar from './component/sidebar';
import Category from './pages/category';

function App() {
  return (
    <div className='container-fluid'>
      <Navbar/>
      <div className='row align-items-start'>
        <div className='col-3'><Sidebar/></div>
        <div className='col-9'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/login' element={<LoginUser />} />
            <Route path='/register' element={<LoginUser />} />
            <Route path='/category' element={<Category/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
