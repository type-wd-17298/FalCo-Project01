import Axios from 'axios'
import { useState } from 'react';
import "./App.css";
import Navbar from './Navbar';
import showuser from './showuser';


export default function Updateuser()  {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstname] = useState('');
  const [last_name, setLastname] = useState('');

  const [userList, setUserList] = useState([]);

  const getUser = () => {
    Axios.get('http://localhost:3001/user').then((response) => {
      setUserList(response.data);
    });
  }

  const adduser = () => {
    Axios.post('http://localhost:3001/adduser', {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
    }).then(() => {
      setUserList([
        ...userList,
        {
          email: email,
          password: password,
          first_name: first_name,
          last_name: last_name,
        },
      ]);
    });
  };


  const deleteuser = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setUserList(
        userList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  return (
    <div className="App container">
      <center><h1>User</h1></center>
      <div className="information">
        <form action=''>
          <div className='mb-3'>
            <label htmlFor='email' className='Form-label'>E-mail : </label>
            <input type="text"
              className='form-control'
              placeholder='Enter eamil'
              onChange={(event) => {
                setEmail(event.target.value)
              }} ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='passwod' className='Form-label'>Password : </label>
            <input type="text"
              className='form-control'
              placeholder='Enter Password'
              onChange={(event) => {
                setPassword(event.target.value)
              }}  ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='fisrtname' className='Form-label'>Fisrt name: </label>
            <input type="text"
              className='form-control'
              placeholder='Enter Fisrt name'
              onChange={(event) => {
                setFirstname(event.target.value)
              }}  ></input>
          </div>
          <div className='mb-3'>
            <label htmlFor='lastname' className='Form-label'>Last Name : </label>
            <input type="text"
              className='form-control'
              placeholder='Enter Last Name'
              onChange={(event) => {
                setLastname(event.target.value)
              }}  ></input>
          </div>
          <button className='btn btn-success' onClick={adduser}>Add User</button>
        </form>
      </div>
      <hr />
      <div className='user'>
        <button className='btn btn-primary' onClick={getUser}>Show User</button>
        <br /><br />
        {userList.map((val,) => {
          return (
            <div className='user Card'>
              <div className='card-body text-left'>
                <p className='card-text'> E-mail : {val.email}</p>
                <p className='card-text'> passwod : {val.password}</p>
                <p className='card-text'> First Name : {val.first_name}</p>
                <p className='card-text'> Last Name : {val.last_name}</p>
                <hr></hr>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

