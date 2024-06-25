// src/AlbumCard.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@material-ui/core';

const AlbumCard = ({ image, follows, name }) => {
  return (
    <Card style={{ width: 200, margin: '20px' }}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
        title={name}
      />
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="body2" component="p">
          {name}
        </Typography>
        <Chip label={`${follows} Follows`} color="primary" />
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
