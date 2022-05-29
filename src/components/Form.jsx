import React,{useState} from 'react'
import axios from 'axios'


function Form() {

    const[user,setUser]=useState({
        fullname:"",
        email:"",
        contact:"",
        DOB:"",
        
    })

    const handleChange= e =>{
        const {name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const registerUser=()=>{
        const{fullname,email,contact,DOB}=user
        axios.post("http://localhost:5000/newuser",user)
        .then(res=>console.log(res))
    }


    return (
        <form class="row g-3">
            <div class="col-md-4">
                <label for="validationDefault01" class="form-label">Full name</label>
                <input type="text" name="fullname" value={user.fullname} onChange={handleChange} class="form-control" id="validationDefault01" required />
            </div><br />
            <div class="col-md-4">
                <label for="validationDefault02" class="form-label">Email</label>
                <input type="email" name="email" value={user.email} onChange={handleChange} class="form-control" id="validationDefault02" required />
            </div>
            <div class="col-md-4">
                <label for="validationDefaultUsername" class="form-label">Contact</label>
                <div class="input-group">
                    <input type="text" maxLength="10" name="contact" value={user.contact} onChange={handleChange} class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                </div>
            </div>
            
            {/*<div class="col-md-4">
                <label for="validationDefault04" class="form-label">Course Level</label>
                <select class="form-select" name='course' value={user.course} onChange={handleChange} id="validationDefault04" required>
                    <option selected disabled value="">Choose</option>
                    <option value="Under Graduate">Under Graduate</option>
                    <option value="Post Graduate">Post Graduate</option>
                    <option value="BE/BTech">BE/BTech</option>
                </select>
            </div>*/}
            <div class="col-md-4">
                <label for="validationDefault05" class="form-label">DOB</label>
                <input type="date" name='DOB' value={user.DOB} onChange={handleChange} class="form-control" id="validationDefault05" required />
            </div>
            {/*<div class="col-md-4">
                <label for="validationDefault04" class="form-label">Country Prefrence</label>
                <select class="form-select" name="country" value={user.country} onChange={handleChange} style={{height:50, boxShadow:"2px 2px 20px red"}} id="validationDefault04" multiple required>
                    <option selected disabled value="">Choose</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="New-Zealand">New-Zealand</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">UK</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Germany">Germany</option>
                </select>
            </div>*/}
            <div class="col-12">
                <button class="btn btn-primary" onClick={registerUser}>Submit form</button>
            </div>
        </form>
    )
}

export default Form