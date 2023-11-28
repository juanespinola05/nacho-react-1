import './Card.css'

function Card (props) {
  return (
    <article className='card' key={props.item.text}>
      <img
        src={props.item.image}
        alt={props.item.text}
      />
      <div>
        <p>{ props.item.text }</p>
      </div>
    </article>
  )
}

export default Card
