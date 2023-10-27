import './nav.css';
import logo from '../../../assets/images/logo.png';

function Nav() {
  let tab = window.location.pathname;

  return (
    <nav className='nav'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
        <a href='/' style={tab === '/' ? { color: 'var(--dark-red)' } : {}}>
          Home
        </a>
        <a
          href='/cars'
          style={tab === '/cars' ? { color: 'var(--dark-red)' } : {}}
        >
          Search Cars
        </a>
        <a
          href='/dashboard'
          style={tab === '/dashboard' ? { color: 'var(--dark-red)' } : {}}
        >
          Dashboard
        </a>
        <a
          href='/about'
          style={tab === '/about' ? { color: 'var(--dark-red)' } : {}}
        >
          About
        </a>
      </div>
    </nav>
  );
}

export default Nav;
