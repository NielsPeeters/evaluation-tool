import React from 'react';
import { InboxItem } from '../../assets/mockdata/inboxlist';
import RowItem from '../../shared/rowItem';
import './style.scss';

const InboxList = ({ inbox }: { inbox: InboxItem[] }) => {
  const inboxList = inbox.map((inboxItem: InboxItem) => (
    <RowItem icon={inboxItem.icon} iconColor={inboxItem.iconColor} date={inboxItem.date}>
      {inboxItem.name}
    </RowItem>
  ));

  return <div className="inboxList">{inboxList}</div>;
};

export default InboxList;
