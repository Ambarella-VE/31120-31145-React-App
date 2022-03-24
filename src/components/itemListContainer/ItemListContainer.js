import ItemCount from '../itemCount/ItemCount'


export default function ItemListContainer(props) {
  
  return (
    <>
      <h1>
        {props.message}
      </h1>
      <ItemCount initial={1} stock={5} />
    </>
  )
}
