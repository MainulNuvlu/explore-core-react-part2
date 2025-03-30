
import './App.css'
import Counter from './Counter'
import Batasman from './Batsman'

function App() {

  function handleClick() {
    alert('I am clicked')
  }


  const handleClick3 = () => {
    alert('Click 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }


  return (
    <>

      <h1>Vite + React</h1>

      <Batasman></Batasman>


      <Counter></Counter>



      {/* <button onclick="handleClick()">Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2() {
        alert('Click 2')
      }}>Click Me 2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert('Click 4')}>Click Me 4</button>

      {/* <button onClick={handleAdd5(4)}>Click Add 5</button> */}
      <button onClick={() => handleAdd5(4)}>Click Add 5</button>

    </>
  )
}

export default App
