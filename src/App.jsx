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
  let showGreeting = true;
  function toggleGreeting(){
    if(showGreeting){
      showGreeting = false;
    }else{
      showGreeting = true;
    }
  }
  return (
    <>
      <button onClick={toggleGreeting}>Click Me</button>
      {showGreeting && <Greeting name={"Shahul"} age={28}/> }
    </>
  )
}

// COMPONENT = Function that returns JSX

export default App
