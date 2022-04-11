import React, {useState} from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("hello world")
        if(firstName && email)
        {
            const person = {id: new Date().getDate().toString(),firstName , email}
            setPeople((people)=>{
                return [...people,person]
            })
            setFirstName("")
            setEmail("")
            console.log('submit the form')
        }
        else{
            console.log('empty value')
        }
    }

    return <>
        <article>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input type="text" id="firstName" name="firstName" value={firstName}
                           onChange={(e)=>{setFirstName(e.target.value)}}/>
                </div>
                <div className="form-control">
                    <label htmlFor="email">email: </label>
                    <input type="text" id="email" name="email" value={email}
                     onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <button type='submit'>
                    add person
                </button>
            </form>
            {
                people.map((person)=>{
                    const {id, firstName, email} = person
                    return <div className='item' key={id}>
                        <h1>{firstName}</h1>
                        <h1>{email}</h1>
                    </div>
                })
            }
        </article>
    </>
};

export default ControlledInputs;
