import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import InfoIcon from '@mui/icons-material/Info';

export default function Item({ id,rank,rankUpDown,title,fullTitle,year,image,crew,imDbRating,imDbRatingCount,
price,stock }) {

  return (
    <Card sx={{ margin: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#9c27b0' }} aria-label="recipe">
            {rank}
          </Avatar>
        }
        title={title}
        subheader={year}
      />
      <CardMedia
        component="img"
        image={image}
        alt={fullTitle}
        style={{
          "WebkitMaskImage": "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1),rgba(0, 0, 0, 0))",
          "maskImage": "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1),rgba(0, 0, 0, 0))"
        }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {crew}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button color="secondary" startIcon={<InfoIcon color="secondary" />}>
          Mas Info
        </Button>
        <Typography variant="body2" color="text.secondary">
        {price} ARS
      </Typography>
      </CardActions>
    </Card>
  )
}