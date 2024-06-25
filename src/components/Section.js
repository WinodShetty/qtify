// src/Section.js
import React, { useState, useEffect } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import AlbumCard from './AlbumCard';
import axios from 'axios';

const Section = ({ title, endpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    axios.get(endpoint)
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the albums!", error);
      });
  }, [endpoint]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#121212', color: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4">{title}</Typography>
        <Button variant="contained" color="primary" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Expand" : "Collapse"}
        </Button>
      </div>
      {!collapsed && (
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          {albums.map(album => (
            <Grid item key={album.id} xs={12} sm={6} md={4} lg={3}>
              <AlbumCard 
                image={album.image} 
                follows={album.followCount} 
                name={album.title} 
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Section;
