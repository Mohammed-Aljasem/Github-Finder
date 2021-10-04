import React, {useState, useContext} from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

export default function Search() {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [TextSearch, setTextSearch] = useState({text:''});

  const {users, clearUsers} = githubContext;

  const onchange = e => setTextSearch({[e.target.name]:e.target.value});
  const onSubmit = (e) => {
    e.preventDefault();
    if(TextSearch.text === '') {
      alertContext.setAlert('please enter something', 'light')
    } else {
      githubContext.SearchUsers(TextSearch.text);
      setTextSearch({text:''});
    }
  
};
  return (
    <div>
      <form 
      className="form" 
      onSubmit={onSubmit} 
      >
        <input type="text" name="text" value={TextSearch.text} onChange={onchange} placeholder="Search Users..." id="" />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      { users.length > 0 && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
      
    </div>
  )
}

 Search.propTypes = {
  // showAlert: PropTypes.func.isRequired
}