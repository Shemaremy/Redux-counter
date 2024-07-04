import React from 'react' 
import './App.css'

import store from '../components/reduxStore'; // Import your Redux store
import One from '../components/one';
import Two from '../components/two';
import Three from '../components/three';



function App() {




  return (
    <div className="App">
      <div className='outputs'>
        <One />
        <Two />
        <Three />
      </div>
      <div className='clicker'>
        <button onClick={() => store.dispatch({type: 'gabanya'})}>Reduce</button>  
        <button onClick={() => store.dispatch({type: 'ongera'})}>Add</button>
      </div>
    </div>
  )
}

export default App


// Here, by dispatching we are using store.dispatch({}) to instruct which action is taking place to knoe what to do