import './App.css';

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
    <div style={{color:'black'}}>
      <h1 style={{color:'blueviolet'}}>Hello-{name}</h1>
      <label>Type Here- 
        <input placeholder={placeholder} className='main' type='text' />
      </label>
      <h3>{valid?'True':'False'}</h3>
      <h3>{valids?'True':'False'}</h3>
    </div>
  </>
  );
}

export default App;
