import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function Card1(props) {
  const { classes } = props;
  return (
    <div>
      <Link href="/">
        <a>
          <h3>Go to Index</h3>
        </a>
      </Link>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/static/dog.jpeg"
          title="Contemplative Dog"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            Card 1
          </Typography>
          <Typography component="p">
          La pagina esta siendo renderizada en firebase
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Card1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card1);
