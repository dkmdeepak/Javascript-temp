import './App.css';
import Employee from './Employee' 
import Input from './Input';

function App() {
  const name='Peter'
  const valid=true
  const valids=false
  const placeholder="Enter here"
  return (
    <>
    <div className="App">
      <h1 style={{backgroundColor:'green',color:'white'}}>dash</h1>
    </div>
    <div>
      <Employee/>
    </div>
    <div style={{color:'black'}}>
      <h1 style={{color:'blueviolet'}}>Hello-{name}</h1>
      <label>Type Here- 
        <input placeholder={placeholder} className='main' type='text' />
      </label>
      <h3>{valid?'True':'False'}</h3>
      <h3>{valids?'True':'False'}</h3>
      <Input/>
    </div>
  </>
  );
}

export default App;
