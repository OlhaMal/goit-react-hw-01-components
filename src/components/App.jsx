import React from 'react';

import { Profile } from './profile/Profile';

import user from '../components/profile/user.json';

import { Statistics } from './statistics/Statistics';
import data from '../components/statistics/data.json';

import { FriendsList } from './friendList/FriendList';
import friends from './friendList/friends.json';

import { TransactionHistory } from './transactions/Transaction';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </div>
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
