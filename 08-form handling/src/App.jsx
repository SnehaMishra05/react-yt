const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted')
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Enter your Name' />
        <input type='email' placeholder='Enter your Email' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
