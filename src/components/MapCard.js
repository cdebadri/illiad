import React, { useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  card: {
    flexGrow: 1
  },
  map: {
    widht: '90vw',
    height: '90vh',
  }
}));

function setupMapQuest() {
  window.L.mapquest.key = 'lAJTe0GjalRdxAMJOPXKu5l8ZDVTqAEV';
  navigator.permissions.query({ name: 'geolocation' })
  .then(function(result) {
    if (result.state === 'granted') {
      navigator.geolocation.getCurrentPosition((position) => {
        const latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        const mapObject = window.L.mapquest.map('map', {
          center: [latlng.lat, latlng.lng],
          layers: window.L.mapquest.tileLayer('map'),
          zoom: 15
        });
        mapObject.addControl(window.L.mapquest.control());
      });
    }
  })
}

const MapCard = () => {
  const classes = useStyles();

  useEffect(() => {
    setupMapQuest();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Card className={classes.card}>
            <CardMedia>
              <div id="map" className={classes.map} />
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default MapCard;