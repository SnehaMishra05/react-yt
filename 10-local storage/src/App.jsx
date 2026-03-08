const App = () => {
  // localStorage.clear(); // Clear local storage on every render
  // sessionStorage.clear(); // Clear session storage on every render

  const user = {
    name: "Sneha Mishra",
    age: 22,
    city: "Rourkela",
  };

  localStorage.setItem("user", JSON.stringify(user));

  console.log(localStorage.getItem("user"));

  const userA = JSON.parse(localStorage.getItem("user")); // Parse the user object from local storage
  console.log("userA:", userA);

  localStorage.removeItem("age");
  console.log(localStorage.getItem("age")); // This will return null since "age" has been removed

  return <div>App</div>;
};

export default App;
