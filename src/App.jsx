
import './App.css'
import Card from "./components/Card"
import data from "./components/data"

function App() {

  const cards = data.map((card, index) => {
    return (
      <Card
        key={index}
        card={card}
      />
    )
  })

  return (
    <div className="container">
      <div className="header">
        <h3> My travel Journal </h3>
      </div>
      {cards}
    </div>
  )
}

export default App
