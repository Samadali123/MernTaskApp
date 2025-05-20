import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate}   from "react-router-dom"


const home = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const navigate = useNavigate();


  const handleSubmit = async()=>{
         try {
            if( title === "" || description === "" ){
              alert("Please fill all the fields")
              return
            }
          
          const  data = axios.post("/api/createtask", {
              title,
              description
          })

          setdescription("")
          settitle("")

          alert("Task Created Successfully")
         } catch (error) {
             console.info(error)
         }
  }
  return (
    <>

    <div className="form">
    <div className="right-btn">
          <button onClick={()=> navigate("/tasks") }>View Tasks</button>
         </div>


          <div className="title">
               <label htmlFor="title">Title</label>
               <input required value={title} onChange={(e) => settitle(e.target.value)} type="text" placeholder='Enter title' />
          </div>

          <div className="description">
          <label htmlFor="description">Description</label>
          <input  required value={description} onChange={(e) => setdescription(e.target.value)} type="text" placeholder='Enter Description' />
          </div>


         <div className="buttons">
           <button onClick={()=>  {
               settitle("")
               setdescription("")
           }} id='cancel'>Cancel</button>
           <button onClick={handleSubmit} id='save'>Save</button>

           
         </div>




    </div>
    </>
  )
}

export default home

