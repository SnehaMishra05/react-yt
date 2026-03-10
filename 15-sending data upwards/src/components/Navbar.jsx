const Navbar = (props) => {
  function changeTheme() {
    props.setTheme(props.theme === "Light" ? "Dark" : "Light");
  }

  return (
    <div>
      <button onClick={changeTheme}>Toggle theme</button>
    </div>
  );
};

export default Navbar;
