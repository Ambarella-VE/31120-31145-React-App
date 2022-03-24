import {useState} from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ItemCount(props) {
  const [count, setCount] = useState(props.initial)

  function onSubtract() {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  function onAdd() {
    if (count < props.stock) {
      setCount(count + 1)
    }
  }

  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={onSubtract} color="secondary">-</Button>
      <Button variant="outlined" color="secondary">
        {count}
      </Button>
      <Button onClick={onAdd} color="secondary">+</Button>
    </Stack>
  )
}