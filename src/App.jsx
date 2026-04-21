import './App.css'

function App() {
  const name = getName()
  const age = 28
  return (
    <div>
      <h1>Hello World, i am {name} and i am {age} years old</h1>
      <p>Heyy</p>
      <p>Some extra code</p>
      <p>Some more extra code</p>
    </div>
  )
}

function getName(){
  return "Shahul";
}

// COMPONENT = Function that returns JSX

export default App
