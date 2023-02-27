import React from 'react';
import { Divider as MuiDivider } from '@mui/material';
import { IListItemData } from 'store/types';
import { ListItem } from './ListItem';
import { StyledEmptyList, StyledList } from './styled';

interface ListProps<TItem extends IListItemData> {
  items: TItem[];
  onItemClicked: (item: TItem) => void;
  className?: string;
  emptyListMessage?: string;
}

export function List<TItem extends IListItemData>(props: ListProps<TItem>) {
  const { items, onItemClicked, className, emptyListMessage } = props;

  if (items.length <= 0) {
    return <EmptyList className={className} message={emptyListMessage} />;
  }

  const generateItem = (itemData: TItem) => {
    return (
      <ListItem<TItem>
        key={itemData.id}
        data={itemData}
        onItemClicked={onItemClicked}
      />
    );
  };

  const listItems = [generateItem(items[0])];
  for (let itemIndex = 1; itemIndex < items.length; itemIndex++) {
    listItems.push(
      <MuiDivider
        key={`divider-${itemIndex}`}
        variant="inset"
        component="li"
      />,
    );
    listItems.push(generateItem(items[itemIndex]));
  }

  return <StyledList className={className}>{listItems}</StyledList>;
}

interface EmptyListProps {
  className?: string;
  message?: string;
}

export function EmptyList({ message = 'Empty List' }: EmptyListProps) {
  return <StyledEmptyList>{message}</StyledEmptyList>;
}
