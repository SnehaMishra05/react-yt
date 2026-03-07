/** var a = document.querySelector('h1');
 * a.addEventListener('click', function() {
 *   console.log('h1 was clicked');
 * });
 */

const App = () => {

  // arrow function
  const btnClick = () => {
    console.log('button was clicked');
  }

  // normal function
  function onMouseEnter() {
    console.log('mouse entered');
  }

  function inputChange() {
    console.log('User is typing');
  }

  const pageScroll = (elem) => {
    // console.log('Page is scrolling at speed', elem.deltaY);
    if (elem.deltaY > 0) {
      console.log('Sidha Scrolling');
    } else {
      console.log('Ulta Scrolling');
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '2px'}} onWheel={pageScroll}>
      <button onMouseEnter={onMouseEnter} onClick={btnClick}>Change user</button>
      <button onDoubleClick={btnClick}>Double Click</button>
      <button onClick={function () { console.log('Helluuuuu') }}>Hey Sneha</button>

      <input onChange={inputChange} onClick={function () { console.log('Input was clicked') }} type='text' placeholder="Enter Name" /> 

      <input onChange={function (elem) {
        console.log(elem, elem.target, elem.target.value);
      }} type='text' placeholder="Enter Name" /> 

      <div onMouseMove={(elem) => { console.log(elem.clientY)}} className="box"></div>
    </div>
  )
}

export default App
