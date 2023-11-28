import ListOfCards from '../ListOfCards'
import './App.css'

function App () {
  const randomCardList = [
    { text: 'Card 1', image: 'https://unsplash.it/id/201/420/420'},
    { text: 'Card 2', image: 'https://unsplash.it/id/202/420/420'},
    { text: 'Card 3', image: 'https://unsplash.it/id/203/420/420'},
    { text: 'Card 4', image: 'https://unsplash.it/id/204/420/420'},
    { text: 'Card 5', image: 'https://unsplash.it/id/210/420/420'},
    { text: 'Card 6', image: 'https://unsplash.it/id/206/420/420'},
    { text: 'Card 7', image: 'https://unsplash.it/id/211/420/420'},
    { text: 'Card 8', image: 'https://unsplash.it/id/208/420/420'},
    { text: 'Card 9', image: 'https://unsplash.it/id/209/420/420'},
  ]

  return (
    <main>
      <h1>Renderizado de listas</h1>
      <ListOfCards list={randomCardList} />
    </main>
  )
}

export default App
