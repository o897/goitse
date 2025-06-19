import { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await fetch('http://localhost:3000/api/survey', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Form submitted successfully!');
        } else {
          alert('Failed to submit the form.');
        }

      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting the form.');
      }
    }

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
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className='form-input'>
            <label htmlFor="">Email</label>
            <input type="email" name='email' value={formData.email} onChange={handleChange} />
          </div>
          <div className='form-input'>
            <label htmlFor="">Date of birth</label>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          </div>
          <div className='form-input'>
            <label htmlFor="">Contact numbers</label>
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
          </div>
        </div>

        <div className="check">
          <p>What is your favourite food ?</p>

          <div className="check-input">
            <input type="checkbox" name="pizza" id="" /><p>Pizza</p>
          </div>

          <div className="check-input">
            <input type="checkbox" name="pasta" id="" /><p>Pasta</p>
          </div>

          <div className="check-input">
            <input type="checkbox" name="papwors" id="" /><p>Pap and Wors</p>
          </div>

          <div className="check-input">
            <input type="checkbox" name="other" id="" /><p>Other</p>
          </div>
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

      <button onClick={handleSubmit}>Submit</button>

      <div></div>
    </div>
  )
}

export default App

