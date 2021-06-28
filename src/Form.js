import React, { Component } from 'react';
import UserRow from './UserRow';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: '',
        password: '',
        country: '',
        gender: 'Male',
        info: ''
      },
      users: []
    };
    this.id = 0;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
    this.id = this.id + 1;
    const user = {...this.state.form, id: this.id};
    this.setState(prev => ({
      users: [
        ...prev.users,
        user
      ]
    }), () => {
      console.log(this.state);
    });
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    
    this.setState(prev => ({
      form: {
        ...prev.form,
        [name]: value
      }
    }));
  }

  handleRemove = (id) => {
    console.log(id);
    const { users } = this.state;
    const newUsers = users.filter(e => e.id != id);
    console.log(newUsers);
    this.setState(prev => ({
      users: newUsers
    }));
  }

  render() {
    const { form, users } = this.state;
    return (
      <div className="form-container">
        <form className="register-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              />
          </div>
          <div className="form-group">
            <label>Your Country</label>
            <select name="country" onChange={this.handleChange}>
              <option value="">Please Choose</option>
              <option value="VietNam">Việt Nam</option>
              <option value="Japan">日本</option>
            </select>
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  defaultChecked={form.gender === 'Male'}
                  onChange={this.handleChange}
                  />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  defaultChecked={form.gender === 'Female'}
                  onChange={this.handleChange}
                  />
                Female
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Other information</label>
            <textarea name="info" onChange={this.handleChange}></textarea>
          </div>
          <div className="buttons-set">
            <button className="btn">Submit</button>
          </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email Address</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Info</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(e => (
                <UserRow key={ e.id } user={ e } handleRemove={ this.handleRemove.bind(this) }/>
            ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
