import Card from './components/card'
import Navbar from './components/Navbar'
const App = () => {
  // const user = 'Sneha'
  // const age = 22
  return (
    <div>
      {/* <div className='card'>
        <h1>Sneha Mishra</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quod.</p>
      </div> */}
      <Navbar />
      <Card />
      {/* <Card /> */}
      {/* <p>Hello, this is {user} and I am {age} years old.</p> */}
    </div>
  )
}

export default App
