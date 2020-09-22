import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginBottom: "3%"
    },
  });

const FeatureCard = (props) => {
    const { name, description, img, icon } = props.feature;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Image not found"
                    height="300"
                    image={img}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <img src={icon} alt="" style={{width:"10%", color: "red"}}/> {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.action}>
                <Button size="small" color="primary" target="_blank">
                    <h3>See More</h3>
                </Button>
            </CardActions>
        </Card>
    );
};

export default FeatureCard;