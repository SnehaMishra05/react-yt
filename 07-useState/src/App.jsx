import { useState } from "react"
const App = () => {
  
  // let a = 20
  
  // function changeA() {
  //   a++
  //   console.log(a)
  // }
  
  // return (
  //   <div>
  //     <h1>Value of a is {a}</h1>
  //     <button onClick={changeA}>Change A</button>
  //   </div>
  // )

  //first value = ready only, 2nd value write only

  const [num, setNum] = useState(0)
  const [name, setName] = useState("Sneha")
  const [arr, setArr] = useState([1, 2, 3])
  
  const [ex, setEx] = useState({ user: 'Sneha', age: 23 })
  const [arr2, setArr2] = useState([10, 20, 30])

  const [obj, setObj] = useState({ name: "Sneha", age: 23 })

  const changeObj = () => {
    setObj({ ...obj, age: 28 })
  }

  const changeArr2 = () => {
    const newArr2 = [...arr2]
    newArr2.push(40)
    setArr2(newArr2)
  }

  const btnClick = () => {
    const newEx = { ...ex };
    newEx.user = "Rimi"
    newEx.age = 29
    setEx(newEx)
  }

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1)
  }

  function jump5Num() {
    setNum(num + 5)
  }

  function change() {
    setNum(56)
    setName("SM")
  }

  function addToArr() {
    setArr([...arr, 4])
  }

  const [adv, setAdv] = useState(10);

  //batch update
  const btnClicked = () => {
    setAdv(prev => (prev + 1))
    setAdv(prev => (prev + 1))
    setAdv(prev => (prev + 1))
  }

  return (
    <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
      <h1>Value of num is {num}</h1>
      <button onClick={() => setNum(num + 1)}>Change Num</button>

      <h1>Value of name is {name}</h1>
      <button onClick={() => setName("Rimi")}>Change Name</button>

      <button onClick={increaseNum}>Increase Num</button>
      <button onClick={decreaseNum}>Decrease Num</button>
      <button onClick={jump5Num}>Jump 5 Num</button>
      <button onClick={change}>Change Both</button>

      <h1>Value of arr is {arr}</h1>
      <button onClick={addToArr}>Add to Arr</button>

      <h1>Value of adv is {adv}</h1>
      <button onClick={btnClicked}>Click Me</button>

      <h1>Value of ex is {ex.user} and {ex.age}</h1>
      <button onClick={btnClick}>Change Ex</button>

      <h1>Value of arr2 is {arr2}</h1>
      <button onClick={changeArr2}>Change Arr2</button>

      <h1>Value of obj is {obj.name} and {obj.age}</h1>
      <button onClick={changeObj}>Change Obj</button>
    </div>
  )
}

export default App
