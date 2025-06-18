import React from 'react'

const App = () => {
  return (
    <div>



      <div className='nav'>
        <div className='nav-title'>Survey</div>
        <div className='nav-menu'>
          <div><a href="">Fill out survey</a></div>
          <div>View Survey results</div>
        </div>
      </div>

      <div>
        <div>
          <p>Personal Details :</p>
        </div>
        <div className='form'>
          <div className='form-input'>
            <label htmlFor="">Full names</label>
            <input type="text" name="name"/>
          </div>
          <div className='form-input'>
            <label htmlFor="">Email</label>
            <input type="email" name='email'/>
          </div>
          <div className='form-input'>
            <label htmlFor="">Date of birth</label>
            <input type="date" name="dob"/>
          </div>
          <div className='form-input'>
            <label htmlFor="">Contact numbers</label>
            <input type="numbers" name="contact"/>
          </div>
        </div>

        <div className="check">
          <p>What is your favourite food ?</p>
          <input type="checkbox" name="pizza" id="" />
          <input type="checkbox" name="pasta" id="" />
          <input type="checkbox" name="papwors" id="" />
          <input type="checkbox" name="other" id="" />
        </div>

        <p>Please rate your level of agreement on a scale from 1 to 5, with 1 being "strongly agree" and 5 being "strongly disagree."</p>
      </div> 

      <table border="1">
        <thead>
          <tr>
            <th></th>
            <th>Strongly Agree</th>
            <th>Agree</th>
            <th>Neutral</th>
            <th>Disagree</th>
            <th>Strongly Disagree</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I like to watch movies</td>
            <td><input type="radio" name="row1" /></td>
            <td><input type="radio" name="row1" /></td>
            <td><input type="radio" name="row1" /></td>
            <td><input type="radio" name="row1" /></td>
            <td><input type="radio" name="row1" /></td>
          </tr>
          <tr>
            <td>I like to listen to radio</td>
            <td><input type="radio" name="row2" /></td>
            <td><input type="radio" name="row2" /></td>
            <td><input type="radio" name="row2" /></td>
            <td><input type="radio" name="row2" /></td>
            <td><input type="radio" name="row2" /></td>
          </tr>
          <tr>
            <td>I like to eat out</td>
            <td><input type="radio" name="row3" /></td>
            <td><input type="radio" name="row3" /></td>
            <td><input type="radio" name="row3" /></td>
            <td><input type="radio" name="row3" /></td>
            <td><input type="radio" name="row3" /></td>
          </tr>
          <tr>
            <td>I like to watch TV</td>
            <td><input type="radio" name="row4" /></td>
            <td><input type="radio" name="row4" /></td>
            <td><input type="radio" name="row4" /></td>
            <td><input type="radio" name="row4" /></td>
            <td><input type="radio" name="row4" /></td>
          </tr>
        
        </tbody>
      </table>

      <button>Submit</button>

      <div></div>
    </div>
  )
}

export default App

