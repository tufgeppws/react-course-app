import './App.css'

function Greeting(){
  const name = "Shahul"
  const age = 28
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
      <Greeting />
      <Greeting />
      <Greeting />
      <Greeting />
    </>
  )
}

// COMPONENT = Function that returns JSX

export default App
