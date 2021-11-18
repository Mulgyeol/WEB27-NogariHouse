import React from 'react';
import styled from 'styled-components';

interface following{
    userName: string,
    profileUrl: string,
}

const CardLayout = styled.div`
    width: 100%;
    min-width: 250px;
    display : flex;
    align-items: center;
    margin-bottom: 10px;
`;

const ImageLayout = styled.div`
    width: 48px;
    min-width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 70%;
    overflow: hidden;
`;

const GreenLight = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #2ed02e;
    border: solid 1px white;
    border-radius: 70%;
    margin-left: 36px;
    margin-top: 36px;
`;

const DescriptionLayout = styled.div`
    width: 80%;
    min-width: 100px;
    display: flex;
    flex-direction : column;
    justify-content: center;
    font-family: 'Nunito';
`;

const UserName = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const HandsLayout = styled.div`
    width: 80px;
    min-width: 80px;
    height: 32px;
    border-radius: 30px;
    background-color: #FAFFBE;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

function ActiveFollowingCard({ userName, profileUrl }:following) {
  return (
    <CardLayout>
      <ImageLayout>
        <GreenLight />
        <img src={profileUrl} alt="profile" width="48px" height="48px" />
      </ImageLayout>
      <DescriptionLayout>
        <UserName>{userName}</UserName>
        <div>online</div>
      </DescriptionLayout>
      <HandsLayout>
        👋
      </HandsLayout>
    </CardLayout>
  );
}

export default ActiveFollowingCard;
