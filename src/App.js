import React from 'react';
import './App.css';

const App = () => {
  return (
    <>
      <div className = 'box'>
        <h1>BookList Maintenance form</h1>
        <p>Add and view your books using local storage</p>
        
        <div className='box1'>
          <div className='container'>
            <form className='forms' >
              <h5>Title</h5>
              <input type="text" className="input-box"  required></input>
              <br />
              <h5>Author</h5>
              <input type="text" className="input-box"  required></input>
              <br />
              <h5>ISBN#</h5>
              <input type="text" className="input-box"  required></input>
              <br />
              <button type="submit" className='btn ' >Add Books</button>

            </form>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default App;
