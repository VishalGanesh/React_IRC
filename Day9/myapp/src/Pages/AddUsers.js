import React, { useState } from 'react'
import { addUser } from '../Services/api'
import { useNavigate } from 'react-router-dom'


export const AddUsers = () => {

  const navigate = useNavigate()
  const [data,setData] = useState({
      username:'',
      password:''
  })
  const handleChange =(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();

    try{
    const res =  await addUser(data)
      if(res.status === 201){
        alert('user added')
        navigate('/')
      }

    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' id='username' placeholder='Name' onChange={handleChange}/>
        <input type='text' id='password' placeholder='Password' onChange={handleChange}/>
        <button type='submit' id='submit' placeholder='Submit'>Add</button>
    </form>
    </>
  )
}

export default AddUsers