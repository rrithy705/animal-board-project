import './App.css'
import Header from './components/Header'
import Card from './components/Card'


function App() {

  const animals = [
    {
      name: "Lion",
      fact: "Lions are known as the kings of the jungle.",
      habitat: "Africa"
    },
    {
      name: "Penguin",
      fact: "Penguins cannot fly but are excellent swimmers.",
      habitat: "Antarctica"
    },
    {
      name: "Elephant",
      fact: "Elephants are the largest land animals.",
      habitat: "Africa & Asia"
    },
    {
    
      name: "Tiger",
      fact: "Every tiger has unique stripes.",
      habitat: "Asia"
    },
    {
      name: "Dolphin",
      fact: "Dolphins are highly intelligent marine mammals.",
      habitat: "Oceans"

    },
    {
      name: "Panda",
      fact: "Pandas spend most of their day eating bamboo.",
      habitat: "China"
    },
    {
      name: "Koala",
      fact: "Koalas sleep up to 20 hours a day.",
      habitat: "Australia"
    },
    {  
      name: "Giraffe",
      fact: "Giraffes are the tallest animals on Earth.",
      habitat: "Africa"
    },
    {
      name: "Polar Bear",
      fact: "Polar bears have black skin under their fur.",
      habitat: "Arctic"
    },
    {
      name: "Red Fox",
      fact: "Foxes use Earth's magnetic field to hunt.",
      habitat: "Northern Hemisphere"

    }
  ]

  return (
    <div className="App">
      <Header />

      <div className="card-container">
        {animals.map((animal, index) => (
          <Card
            key={index}
            name={animal.name}
            fact={animal.fact}
            habitat={animal.habitat}
          />
        ))}
      </div>
    </div>
  )
}

export default App