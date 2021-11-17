import React from 'react';

import UserCard from '@common/user-card';
import UserCardList from '@src/components/common/user-card-list';

function FollowingView() {
  const testUser1 = {
    _id: '1',
    userName: 'Mulgyeol1',
    description: 'test for1',
    profileUrl: 'https://kr.object.ncloudstorage.com/nogarihouse/profile/default-user-image.png',
    isFollow: false,
  };

  const testUser2 = {
    _id: '2',
    userName: 'Mulgyeol2',
    description: 'test for2',
    profileUrl: 'https://kr.object.ncloudstorage.com/nogarihouse/profile/default-user-image.png',
    isFollow: true,
  };

  const testUser3 = {
    _id: '3',
    userName: 'Mulgyeol1',
    description: 'test for1',
    profileUrl: 'https://kr.object.ncloudstorage.com/nogarihouse/profile/default-user-image.png',
  };

  const testUser4 = {
    _id: '4',
    userName: 'Mulgyeol2',
    description: 'test for2',
    profileUrl: 'https://kr.object.ncloudstorage.com/nogarihouse/profile/default-user-image.png',
  };

  const userList1 = [testUser1, testUser2];
  const userList2 = [testUser3, testUser4];

  const clickEvent = () => (alert('click'));

  return (
    <>
      <UserCardList userList={userList1} cardType="follow" />
      <UserCardList userList={userList2} cardType="others" clickEvent={clickEvent} />
      <UserCard userData={testUser1} cardType="follow" />
      <UserCard userData={testUser2} cardType="follow" />
      <UserCard userData={testUser3} cardType="others" />
      <UserCard userData={testUser4} cardType="others" />
    </>
  );
}

export default FollowingView;
