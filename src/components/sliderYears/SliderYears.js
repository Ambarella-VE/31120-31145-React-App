import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function SliderYears({years}) {

  const [marks, setMarks] = useState([{label:years[0],value:years[0]},{label:years[years.length -1],value:years[years.length -1]}]);
  const [value,setValue] = useState([])
  const [minDistance] = useState(1)
  const sliderValue = ""

  useEffect(() => {
    
  },[])

  function handleChange (event, newValue, activeThumb) {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  }
    

  return (
    <>
      <Typography gutterBottom >Años</Typography>
      <Slider
        getAriaLabel={() => 'Años'}
        marks={marks}
        defaultValue={marks}
        step={null}
        max={years[0]}
        min={years[years.length -1]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        name={sliderValue}
        disableSwap
      />
    </>
    
    

  )
}
