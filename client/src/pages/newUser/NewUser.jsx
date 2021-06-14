import "./newUser.css"
import React, { Component } from 'react'
import axios from 'axios'

export default class NewUser extends Component {
  constructor() {
    super()
    this.state = {
      name : "",
      email : "",
      password : "",
      phone : "",
      address : "",
      gender : "male",
      active : "yes",
     
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange(event){

  this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit (event)  {
    event.preventDefault()
    //console.log('hiii')
    axios.post('http://localhost:5000/users', this.state).then((response) => {
      console.log('Data inserted',response);
    }, (error) => {
      console.log(error);
    });
  }

  
  
  render() {
    return (
      <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      
      <form className="newUserForm" >
        
        <div className="newUserItem">
          <label>Full Name</label>
          <input id="name" type="text" placeholder="please put your full name" value={this.state.name} onChange={this.handleChange} />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input id="email" type="email" placeholder="xxxx@xxxx.com" value={this.state.email} onChange={this.handleChange}/>
        </div>

        <div className="newUserItem">
          <label>Password</label>
          <input id="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
        </div>

        <div className="newUserItem">
          <label>Phone</label>
          <input id="phone" type="text" placeholder="+216 ** *** ***" value={this.state.phone} onChange={this.handleChange} />
        </div>

        <div className="newUserItem">
          <label>Address</label>
          <input id="address" type="text" placeholder="Tunis | Tunisia" value={this.state.address} onChange={this.handleChange} />
        </div>

        {/* <div className="newUserItem">
          <label>Gender</label>
          <div  id="gender" className="newUserGender" value={this.state.gender} onChange={this.handleChange}>
            <input type="radio" name="gender" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" value="female" />
            <label for="female">Female</label>
          </div>
        </div> */}

        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active" value={this.state.active} onChange={this.handleChange}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        
        <button className="newUserButton" onClick={this.handleSubmit} >Create</button>
      </form>
    </div>
    )
  }
}
