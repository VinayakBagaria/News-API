import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const Source = ({ name, description, category, country, id }) => (
  <Card className="card">
    <CardContent>
      <Typography color="textSecondary">Word of the Day</Typography>
      <Typography variant="headline" component="h2">
        {name}
      </Typography>
      <Typography color="textSecondary">{category}</Typography>
      <Typography color="textSecondary">{country}</Typography>
      <Typography component="p">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        variant="raised"
        className="button"
        color="primary"
        component={Link}
        to={`/source/${id}`}
      >
        See articles
      </Button>
    </CardActions>
  </Card>
);

export default Source;
