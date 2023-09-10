import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [LastName, setLastName] = useState("");

  // function changeFirstHandler(e){
  //   setFirstName(e.target.value);
  // }

  // function changeLastHandler(e){
  //   setLastName(e.target.value);
  // }

  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", comments:"", isVisible:true, mode:"", favCar:""});
  console.log(formData);

  function changeHandler (e){
    const {name, value, checked, type} =  e.target
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
       
        [name] : type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(e){
    e.preventDefault();
    //print
    console.log('finally printing the entire form ka data...');
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
        type="text"
        placeholder='first name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />
        <br/>
        <br/>
      <input 
        type="text"
        placeholder='last name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />

        <br/>
        <br/>
      <input 
        type="email"
        placeholder='Enter your email'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />

        <br/>
        <br/>
        <textarea 
          placeholder='Enter your comments here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br/>
        <br/>
        <input 
        type='checkbox'
        onChange={changeHandler}
        name='isVisible'
        id='isVisible'
        checked= {formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible?</label>

        <br/>
        <br/>
        <fieldset>
          <legend>Mode:</legend>
          <input 
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online Mode"
            id="Online Mode"
            checked={formData.mode === "Online Mode"}
            />
            <label htmlFor='online mode'>Online Mode</label>
      
            <br/>
            <br/>
            <input 
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline Mode"
            id="Offline Mode"
            checked={formData.mode === "Offline Mode"}
            />
            <label htmlFor='offline mode'>Offline Mode</label>
        </fieldset>
        <label htmlFor='favCar'>Tell me your Fav Car </label>
        <select
        onChange={changeHandler}
        name='favCar'
        id='favCar'
        value={formData.favCar}
        >
         <option value="Scorpio">Scorpio</option>
         <option value="Fortuner">Fortuner</option>
         <option value="Thar">Thar</option>
         <option value="Legender">Legender</option>
         <option value="Defender">Defender</option>
        </select>

        <br/>
        <button >Submit</button>
        
      </form>
    </div>
  );
}

export default App;
