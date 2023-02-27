import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { StyledVirtualizedList } from './styled';

interface VirtualizedListProps<TItem> {
  width: number;
  height: number;
  itemSize: number;
  itemCount: number;
  overscanCount: number;

  onRenderRow: (itemData: TItem, itemIndex: number) => void;
}

export function VirtualizedList<TItem>(props: VirtualizedListProps<TItem>) {
  const { onRenderRow } = props;

  const renderRow = ({ index, style }: ListChildComponentProps) => {
    return (
      <VirtualizedListItem<TItem>
        index={index}
        style={style}
        onRenderRow={onRenderRow}
      />
    );
  };

  return (
    <StyledVirtualizedList>
      <FixedSizeList {...props}>{renderRow}</FixedSizeList>
    </StyledVirtualizedList>
  );
}

type VirtualizedListItemProps<TItem> = VirtualizedListProps<TItem> &
  ListChildComponentProps;

function VirtualizedListItem<TItem>(props: VirtualizedListItemProps<TItem>) {
  const { index, style, onRenderRow } = props;

  return (
    <ListItem key={index} style={style} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={onRenderRow(index)} />
      </ListItemButton>
    </ListItem>
  );
}

// const renderRow = (props: VirtualizedListItemProps) => {
//   const { index, style } = props;

//   return (
//     <ListItem key={index} style={style} component="div" disablePadding>
//       <ListItemButton>
//         <ListItemText primary={`Item ${index + 1}`} />
//       </ListItemButton>
//     </ListItem>
//   );
// };
