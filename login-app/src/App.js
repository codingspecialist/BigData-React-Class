function App() {
  const user = fetch("http://localhost:8080/user/1");

  return (
    <div>
      Hello World
      <h1>{user}</h1>
    </div>
  );
}

export default App;
