
function App() {
  let userlist = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35},
    {name: 'Shri', age: 40}
  ]

  return (
    <ul>
      {
        userlist.map((user,index) => {
          return (
            <li key={index}>
                {user.name} is {user.age} year old.
            </li>)

        })
      }
      </ul>
  )
}

export default App