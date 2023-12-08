import React, {useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { useDispatch } from 'react-redux';

function Contact(props){
  const dispatch = useDispatch();
    const [lastName, setLastName]= useState('');
    const [firstName, setFirstName]= useState('');
    const [greeting, setGreeting]= useState('');
    const handleLastName=(e)=>{
      setLastName(e.target.value);
    }
    const handleFirstName=(e)=>{
        setFirstName(e.target.value);
      }
      const handleGreeting=(e)=>{
        setGreeting(e.target.value);
          
      }
   
    
    const  handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({
          type: 'ADDCONTACT',
          payload:{lastName:lastName,firstName:firstName,greeting:greeting}
          
    });
        //console.log(lastName +""+firstName+""+greeting);
        console.log(lastName ,firstName, greeting);
      }

    return (<div  style={{flexDirection:'column',display: 'block'}}>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <label for="name">Last name:</label> <InputText type="text" placeholder="lastName" value={lastName} onChange={(e=>handleLastName(e))}/> <br/>
    <label for="name">First name: </label> <InputText type="text" placeholder="firstName" value={firstName} onChange={(e=>handleFirstName(e))}/> <br/>
    <label for="name">Greeting: </label> <InputText type="text" placeholder="greeting" value={greeting} onChange={(e=>handleGreeting(e))}/> <br/>
    <Button type="submit" value= "submit"  placeholder='submit'> submit</Button>
    </form>
    </div>);  

}export default Contact;