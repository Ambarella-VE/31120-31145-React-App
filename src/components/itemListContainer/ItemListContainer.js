import { useEffect,useState } from 'react'
import ItemList from '../itemList/ItemList'
import { getMovies } from '../../utils/asyncmock'
import Box from '@mui/material/Box';



export default function ItemListContainer(props) {
  const [movies,setMovies] = useState([])
  const [years,setYears] = useState([]);
  
  useEffect(() => {
    getMovies()
    .then(res => {
      setMovies(res);
      const allYears = [];
      for (let i=0 ; i<res.length ; i++){
        allYears.push(res[i].year)
      };
      setYears([...new Set(allYears.sort((a, b) => b - a))])
    })
  },[])


  return (
    <>
      <h1>
        {props.message}
      </h1>
      <Box sx={{margin:'auto'}}>
        <ItemList movies={movies} years={years} />
      </Box>
      
    </>
  )
}
