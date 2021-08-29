import './App.css';
import EmployeeInfo from './components/EmployeeInfo';
import UserGreeting from './components/UserGreeting'
import UseStateExample from './components/UseStateExample';


function App() {

  const user = {
    name: 'Ravi',
    age: 30,
    city: 'delhi s',
    type: 'A',
    languages: ['English', 'Hindi', 'French']
  }

  const getUserCity = (city) => {
    if (city) {
      return city
    }
    return 'Unknown'
  }

  if (user.age && user.age > 30) {
    return <h2>Your are over age.</h2>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit', event.target.username.value)
  }

  const getEmployeeDetail = (name) => {
    console.log('Employee info ', name)
  }

  return (
    <div className="App">
      {user.name}
      <p>{user.age}</p>

      {user.age && user.age > 25 && <p>You are eligible</p>}

      <h1 className="user-city" >{getUserCity(user.city)}</h1>

      {/* <main></main> html element */}

      {/* <Main></Main> react component */}

      {user.type === 'A' ? (<>
        <div>user type is a</div>
        <div>user type is a</div>
      </>) : <div>User type other thn a</div>
      }

      <ul>
        {user.languages.length > 0 && user.languages.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>

      <h3>{new Date().toLocaleDateString()}</h3>

      <form onSubmit={handleSubmit}>
        <input type="text" name="username" />
        <button>Submit</button>
      </form>

      <UserGreeting />
      <UserGreeting />
      <UserGreeting />
      <UserGreeting />

      <EmployeeInfo name="Ravi" city="San Francisco" getEmployeeDetail={getEmployeeDetail} />
      <EmployeeInfo name="Ravi" getEmployeeDetail={getEmployeeDetail} />
      <EmployeeInfo getEmployeeDetail={getEmployeeDetail} />

      <UseStateExample />
    </div>
  );
}

export default App;

// npx create-react-app my-app --template typescript