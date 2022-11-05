import { useState } from "react"


export default function Form() {
    const [formDetails,setFormDetails] = useState({firstName:'',
    lastName:'',email:'',textArea:'',provideData:true})

    function handleChange(event) {
        if(event.target.type === 'checkbox'){
            setFormDetails(prevDetails =>({
                ...prevDetails,[event.target.name]: event.target.checked
            })
            )
        }
        else{
            setFormDetails(prevDetails =>({
                ...prevDetails,[event.target.name]:event.target.value
            })
            )
        }
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(formDetails)   
    }

  return (
    <>
        <form className="form-div" onSubmit={handleSubmit}>
            <div className="form-names">
                <div className=" form form-firstname">
                    <label>First name</label>
                    <input 
                    type="text" 
                    id='first_name'
                    name='firstName'
                    placeholder='Enter your first name'
                    onChange={handleChange}
                    value={formDetails.firstName}
                    />
                </div>
                <div className=" form form-lastname">
                    <label>Last name</label>
                    <input 
                    type="text" 
                    id='last_name'
                    name='lastName'
                    placeholder='Enter your last name'
                    onChange={handleChange}
                    value={formDetails.lastName}
                    />
                </div>
            </div>
            <div className=" form form-email">
                <label>Email</label>    
                <input 
                type="email" 
                id='email'
                name='email'
                placeholder='yourname@email.com'
                onChange={handleChange}
                value={formDetails.email}
                />
            </div>
            <div className=" form form-textarea">
            <label>Message</label>
            <textarea
                type="text" 
                id='message'
                name='textArea'
                placeholder="Send me a message and I'll reply you as soon as possible..."
                onChange={handleChange}
                value={formDetails.textArea}
            />
            </div>
            <div className="checkbox-div">
                <input 
                type="checkbox" 
                id='checkbox'
                name="provideData"
                checked={formDetails.provideData}
                onChange={handleChange}
                />
                <label htmlFor="provideData">You agree to providing your data to Abdul who may contact you.</label>
            </div>
            <button id='btn__submit' >Submit</button>
        </form>
    </>
  )
}
