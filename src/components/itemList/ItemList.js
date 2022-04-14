import Item from '../item/Item'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
/* import SliderYears from '../sliderYears/SliderYears' */

export default function ItemList({movies,years}) {
  return (
    <>
{/*     <SliderYears years={years} /> */}
      <Box sx={{ flexGrow: 1, padding: 4}}>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
        {movies.map(movie =>{
          return (
            <Grid item xs={12} sm={6} md={4} lg={2} xl={1} key={movie.id}>
              <Paper elevation={3} >
                <Item {...movie}/>
              </Paper>
            </Grid>
          )
        })}
        </Grid>
      </Box>
    </>
  )
}
