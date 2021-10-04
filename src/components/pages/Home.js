import React, { Fragment } from 'react';
import Search from '..//users/Search';
import Alert from '../users/Alert';
import Users from '../users/Users';

export default function Home() {
  return (
    <Fragment>
      <Alert />
      <Search />
      <Users />
    </Fragment>
  );
}
