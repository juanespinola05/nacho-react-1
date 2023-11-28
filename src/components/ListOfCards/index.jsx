import Card from '../Card'
import './ListOfCards.css'

function ListOfCards (props) {
  console.log(props.list)
  return (
    <div className='cards-container'>
      {
        props.list.map((item) => {
          return (
            <Card
              item={item}
              key={item.text}
            />
          )
        })
      }
    </div>
  )
}

export default ListOfCards
