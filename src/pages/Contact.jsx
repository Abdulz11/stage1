import { useState } from 'react'

export default function Contact() {
    const [formDetails,setFormDetails] = useState({firstName:'',
    lastName:'',email:'',textArea:''})

    function handleChange(event) {
        setFormDetails(prevDetails =>({
            ...prevDetails,[event.target.name]:event.target.value
        })
        )
    }
    function handleSubmit() {
        console.log(formDetails)
        
    }
   
  return (
    <div>
        <input 
        type="text" 
        id='first_name'
        name='firstName'
        placeholder='firstname'
        onChange={handleChange}
        value={formDetails.firstName}
        />
        <input 
        type="text" 
        id='last_name'
        name='lastName'
        placeholder='lastname'
        onChange={handleChange}
        value={formDetails.lastName}
        />
        <input 
        type="text" 
        id='email'
        name='email'
        placeholder='email'
        onChange={handleChange}
        value={formDetails.email}
        />
        <input 
        type="text" 
        id='message'
        name='textarea'
        placeholder='message'
        onChange={handleChange}
        value={formDetails.textArea}
        />
        <button id='btn_submit' onSubmit={handleSubmit}>Submit</button>
    </div>
  )
}
