import './dash.css';
import Nav from '../components/nav/nav';
import Home from '../pages/home/home';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from '../pages/pageNotFound/pageNotFound';
import Cars from '../pages/cars/cars';
import About from '../pages/about/about';
import Dashboard from '../pages/dashboard/dashboard';

function Dash() {
  return (
    <div className='dash'>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/404' element={<PageNotFound />} />
        <Route exact path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Dash;
