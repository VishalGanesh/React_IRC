import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserId } from '../Services/api'
import { editUser } from '../Services/api'


export const EditUsers = () => {
  const {id} = useParams()
  console.log(id)

  const navigate = useNavigate()
  const [data,setData] = useState({
      username:'',
      password:''
  })
  const fetchUser =async()=>{
    try{
      const res = await getUserId(id)
      setData(res.data)
    }
    catch(e){
      console.log(e)
    }
  }

  const handleChange =(e)=>{
    setData({...data,[e.target.id]:e.target.value})
  }
  const handleSubmit =async(e)=>{
    e.preventDefault();
    try{
      const res2 = await editUser(id,data)
      console.log(res2.status)
    }
    catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetchUser()
  },[])

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type='text' id='username' placeholder='Name' onChange={handleChange}/>
        <input type='text' id='password' placeholder='Password'onChange={handleChange}/>
        <button type='submit' id='submit' placeholder='Submit'>Add</button>
    </form>
    </>
  )
}

export default EditUsers