import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../Layouts/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../Repos/Repos'
import GithubContext from '../../context/github/githubContext'

export default function User(props) {
  const githubContext = useContext(GithubContext);
  const {getUser, loading, user, repos, getUserRepos} = githubContext;
  useEffect(() => {
    getUser(props.match.params.login);
    getUserRepos(props.match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          Back to home
        </Link>
        Hireable: {''}
        {hireable ? <i className='fas fa-check text-success'/> : <i className='fas fa-times-circle text-danger'/>}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt={login} style={{width: '150px'}} className="round-img" />
        <h1>{name}</h1>
        <p>Location: {location}</p>
        </div>
        <div>
           {bio && <Fragment>
          <h3>Bio: <br /> {bio}</h3></Fragment>}
          <a href={html_url} className="btn btn-dark my-1">Visit Profile</a>
          <ul>
            <li>
              {login && <Fragment>
                <strong>Username:</strong> {login}</Fragment>}
            </li>
            <li>
              {company && <Fragment>
                <strong>Company:</strong> {company}</Fragment>}
            </li>
            <li>
              {blog && <Fragment>
                <strong>Company:</strong> {blog}</Fragment>}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark"> Public Gists: {public_gists}</div>
      </div>

      <Repos repos={repos}/>
      </Fragment>
    );
  }
}
