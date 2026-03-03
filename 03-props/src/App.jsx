import Card from "./components/Card"

const App = () => {
  return (
    <div className="parent">
      {/* <div className="card">
        <img src="https://images.unsplash.com/photo-1772471349849-40434786468d?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>Sneha Mishra</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, similique?</p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1772471349849-40434786468d?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>Sneha Mishra</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, similique?</p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1772471349849-40434786468d?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>Sneha Mishra</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, similique?</p>
        <button>View Profile</button>
      </div>
      <div className="card">
        <img src="https://images.unsplash.com/photo-1772471349849-40434786468d?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>Sneha Mishra</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, similique?</p>
        <button>View Profile</button>
      </div> */}
      <Card user='Sneha' age={22} img='https://images.unsplash.com/photo-1772471349849-40434786468d?q=80&w=1923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Harsh' age={24} img='https://images.unsplash.com/photo-1772415912163-bd5fe16b8ff0?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
