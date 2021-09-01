import {useState} from 'react'
import './App.css';





function App() {
const [formInfo, setFormInfo]=useState({ name:'',gender:'',
food:'',date:''

})
const [attendanceList, setAttendanceList]=useState([])
const handleChange =(e)=>{
  setFormInfo({...formInfo, [e.target.name]:e.target.value})
}
const handleSubmit=(e)=>{
  e.preventDefault()
  setAttendanceList([...attendanceList, formInfo])
}
return (
  
    
    <div className="App">
      <header className="App-header">
        
        <p>
         WEDDING RSVP FORM
        </p>
      </header>
<div className="rsvp">
<form onSubmit={handleSubmit}>
  <label for="name">Name</label>
    <input type="text" onChange={handleChange}
    name="name" id="name-label" placeholder="name" 
    value={formInfo.name}required></input>
    <br />

<br />

  <label for="gender" id="gender"><b>Gender:</b></label><br />
<input id="gender" type="radio" id="female" name="gender" onChange={handleChange} value='female' />
<label for="gender">Female</label><br />
<input id="gender" type="radio" id="male" name="gender" onChange={handleChange} value='male' />
<label for="gender">Male</label><br />
<input id="gender" type="radio" id="none" name="gender" onChange={handleChange} value='none' />
<label for="gender">None of the above</label><br/><br />



  <label for="food"><b>Food:</b></label><br />
  <input id="checkbox" type="checkbox" name="food" onChange={handleChange} value='All' />
<label for="checkbox">All</label><br />
<input id="checkbox" type="checkbox" name="food" onChange={handleChange} value='Buffet' />
<label for="checkbox">Buffet</label>
<br />
<input id="checkbox" type="checkbox" name="food" onChange={handleChange} value='Vegeterian' />
<label for="checkbox">Vegeterian</label>
<br />
<input id="checkbox" type="checkbox" name="food" onChange={handleChange} value='Vegan' />
<label for="checkbox">Vegan</label>

<br />

  <label for="age">Age</label>
    <input type="number" name="age" id="age" onChange={handleChange} value={formInfo.age} placeholder="enter your age" required></input>
    <br />
<br />

  <label for="date">Date Attending</label>
    <input type="date" name="date" id="date" onChange={handleChange} placeholder="choose the date" value={formInfo.date} required></input>
    <br />

<br />

<button type='submit'>
  Submit
</button>
</form>
</div>
<div>
<ul>{attendanceList.map(attendance=>{
return(
  <li>
    <p>{attendance.name}</p>
    <p>{attendance.gender}</p>
    <p>{attendance.food}</p>
    <p>{attendance.age}</p>
    <p>{attendance.date}</p>
  </li>

)
})}</ul>
</div>
    </div>
    
  );
}

export default App;
