import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div className='navbar bg-primary'>
      <h3>
        <i className='fab fa-github' />
        Github Finder
      </h3>
      <ul>
        <li>
          <Link to='/Github-Finder'> Home</Link>
        </li>
        <li>
          <Link to='/about'> About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
