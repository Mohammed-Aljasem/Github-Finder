import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../Layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

export default function Users() {
  const githubContext = useContext(GithubContext);
  const styleUsers = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
  };

  const { users, loading } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={styleUsers}>
        {!loading &&
          users.map((user) => <UserItem key={user.id} user={user} />)}
      </div>
    );
  }
}
