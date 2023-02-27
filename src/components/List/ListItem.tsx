import React from 'react';
import { ListItemText as MuiListItemText, Grid } from '@mui/material';
import { IListItemData } from 'store/types';
import { StyledListItem, StyledListItemImageWrapper } from './styled';
import { Typography } from 'components/controls/Typography';
import { Button } from 'components/controls/buttons/Button';

interface ListItemProps<TItem extends IListItemData> {
  data: TItem;
  onItemClicked: (item: TItem) => void;
}

export function ListItem<TItem extends IListItemData>(
  props: ListItemProps<TItem>,
) {
  const { data, onItemClicked } = props;
  const { title, description, imageName, imageFilePath } = data;

  const handleItemClicked = () => {
    onItemClicked(data);
  };

  return (
    <StyledListItem>
      {imageFilePath && (
        <StyledListItemImageWrapper>
          <img alt={imageName} src={imageFilePath} />
        </StyledListItemImageWrapper>
      )}
      <Grid container direction="row">
        <Grid item xs={12}>
          <MuiListItemText
            primary={<Typography variant="h6">{title}</Typography>}
            secondary={description}
          />
          <Button onClick={handleItemClicked}>Show more</Button>
        </Grid>
      </Grid>
    </StyledListItem>
  );
}
