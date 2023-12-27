import { useEffect, useState } from "react"
import { delUser, getUser } from "./Services/api"
import { useNavigate } from "react-router-dom"
// import {Link} from 'react-router-dom'


const Users =()=>{

    const navigate = useNavigate()
    const [user,setUser]=useState([])

    const fetchData =async()=>{
        try{
            const res = await getUser()
            console.log(res.data)
            setUser(res.data)
        }
        catch(e){
            console.log(e)
        }
    }
    const handleDelete =async(id)=>{
        try{
            const res = await delUser(id)
            if(res.status === 200){
                alert('deleted')
            }
            fetchData()
        }
        catch(e){
            console.log(e)
        }
        // await delUser(id)
    }
    const handleEdit= (id)=>{
        navigate(`/edit/${id}`)
    }
    console.log(user)
    useEffect(()=>{
        fetchData()
    },[])

    const handleAdd =()=>{
        navigate('/add')
    }

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>
                        UserName
                    </th>
                    <th>
                        Password
                    </th>
                    <th>
                        Edit
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                   user.map ((user)=>(
                <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.password}</td>
                    <td><button className="edi-btn" onClick={()=>handleEdit(user.id)}>Edit</button></td>
                    <td><button className="del-btn" onClick={()=>handleDelete(user.id)}>Delete</button></td>
                </tr>
                ))

                }
            </tbody>
        </table>
        <button className="edi-btn" onClick={()=>handleAdd(user.id)}>ADD</button>
        </>
    )
}

export default Users
