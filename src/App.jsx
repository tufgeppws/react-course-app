import './App.css'

function Greeting({name,age}){

  return (
    <>
      <h1>Hello World, i am {name}</h1>
      <h3>I am {age} this years old!</h3>
      <p>Heyy Welcome, {name}</p>
    </>
  )
}

function App() {

  return (
    <>
      <Greeting name={"Shahul"} age={28}/>
      <Greeting name={"Buhari"} age={29}/>
      <Greeting name={"Solanki"} age={40}/>
      <Greeting name={"rulona"} age={33}/>
    </>
  )
}

// COMPONENT = Function that returns JSX

export default App
