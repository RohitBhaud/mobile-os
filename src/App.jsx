import logo from './logo.svg'
import './App.css'

function App() {

  const oper = ['Android', 'blackberry', 'iphone', 'Windows Phone']
  const manu = ['Samsung', 'HTC', 'Micromax', 'Apple']


  return (
    <div className="App">

      <h1>Mobile Operating Systems</h1>
      {oper.map((e) => {
        return <ul>
          <ul>{e}</ul>
        </ul>
      })}

      <h1>Mobile Manufactures</h1>
      {manu.map((e) => {
        return <ul>
          <ul>{e}</ul>
        </ul>
      })}
    </div>
  )
}

export default App;







