/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
import React, {
  MouseEvent, useEffect, useState,
} from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import RoomCard from '@common/room-card';
import useFetchItems from '@src/hooks/useFetchItems';
import LoadingSpinner from '@common/loading-spinner';
import roomViewType from '@atoms/room-view-type';
import roomDocumentIdState from '@atoms/room-document-id';
import useItemFecthObserver from '@src/hooks/useItemFetchObserver';
import { nowFetchingState } from '@src/recoil/atoms/main-section-scroll';

interface Participants{
  _id: string,
  userName: string,
  profileUrl: string
}

interface RoomCardProps {
  _id: string,
  title: string,
  isAnonymous: boolean,
  participantsInfo: Array<Participants>,
}

const RoomDiv = styled.div`
  div + div {
    margin-bottom: 10px;
  }
`;

const ObserverBlock = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
`;

export const makeRoomToCard = (room: RoomCardProps) => (
  <div className="RoomCard" key={room._id} data-id={room._id}>
    <RoomCard
      key={room._id}
      _id={room._id}
      title={room.title}
      isAnonymous={room.isAnonymous}
      participantsInfo={room.participantsInfo}
    />
  </div>
);

export function RoomCardList({ roomList, roomCardClickHandler }:
  { roomList: RoomCardProps[], roomCardClickHandler: (e: MouseEvent) => void }) {
  return <RoomDiv onClick={roomCardClickHandler}>{roomList?.map(makeRoomToCard)}</RoomDiv>;
}

function RoomView() {
  const [nowItemList, nowItemType] = useFetchItems<RoomCardProps>('/room', 'room');
  const nowFetching = useRecoilValue(nowFetchingState);
  const [loading, setLoading] = useState(true);
  const [targetRef] = useItemFecthObserver(loading);
  const setRoomView = useSetRecoilState(roomViewType);
  const setRoomDocumentId = useSetRecoilState(roomDocumentIdState);

  const roomCardClickHandler = (e: MouseEvent) => {
    const RoomCardDiv = (e.target as HTMLDivElement).closest('.RoomCard');
    const roomDocumentId = RoomCardDiv?.getAttribute('data-id');
    setRoomView('inRoomView');
    if (roomDocumentId) setRoomDocumentId(roomDocumentId);
    else console.error('no room-id');
  };

  useEffect(() => {
    if (nowItemList && nowItemType === 'room') {
      setLoading(false);
    }
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <RoomCardList roomCardClickHandler={roomCardClickHandler} roomList={nowItemList} />
      <ObserverBlock ref={targetRef}>
        {nowFetching && <LoadingSpinner />}
      </ObserverBlock>
    </>
  );
}

export default RoomView;
