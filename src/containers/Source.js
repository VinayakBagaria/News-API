import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Source = ({ source }) => (
  <Card className="card">
    <CardContent>
      <Typography color="textSecondary">Word of the Day</Typography>
      <Typography variant="headline" component="h2">
        benevolent
      </Typography>
      <Typography color="textSecondary">adjective</Typography>
      <Typography component="p">well meaning and kindly.</Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default Source;
