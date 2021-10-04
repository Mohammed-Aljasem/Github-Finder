import React, { useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';
import Spinner from '../Layouts/Spinner';

export default function Repos() {
  const githubContext = useContext(GithubContext);
  if (githubContext.repos.length > 0) {
    return githubContext.repos.map((repo) => (
      <RepoItem repo={repo} key={repo.id} />
    ));
  } else {
    return <Spinner />;
  }
}
