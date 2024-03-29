import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
};

const Article = ({
  urlToImage,
  title,
  description,
  publishedAt,
  url,
  source
}) => (
  <Card style={styles.card}>
    <CardMedia image={urlToImage} style={styles.media} />
    <CardContent>
      <Typography color="textSecondary">{source}</Typography>
      <Typography gutterBottom variant="headline" component="h2">
        {title}
      </Typography>
      <Typography component="p">{description}</Typography>
      <Typography color="textSecondary">Published at: {publishedAt}</Typography>
    </CardContent>
    <CardActions>
      <Button
        variant="raised"
        size="small"
        color="primary"
        className="button"
        onClick={() => window.open(url, '_blank')}
      >
        View
      </Button>
    </CardActions>
  </Card>
);

Article.defaultProps = {
  urlToImage: ''
};

export default Article;
