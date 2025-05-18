import React,{useState} from 'react'
import profile from './assets/profile.jpg'

const Form =(props)=> {
    const[formdata,setformdata] = useState({
        name:'',
        email:'',
        password:'',
    })
    const[submitdata,setsubmitdata]= useState(null)

    const handelechnage = (event) =>
    {
        const {name,value} = event.target
        setformdata((prevdata)=>({
            ...prevdata,
            [name]:value,
        }))
    }
    const handelsubmit = (event) =>{
        event.preventDefault()
        console.log("form data",formdata)
        setsubmitdata(formdata)
    }
  return (
    <div>
        <h2>{props.heading}</h2>
        <div style={{display:'flex',justifyContent:'inline',padding:'10px 20px',gap:'50px',backgroundColor:'ActiveBorder'}}>
            <a href="#" style={{textDecoration:'none',color:"white"}}>home</a>
            <a href="#" style={{textDecoration:'none'}}>about</a>
            <a href='#' style={{textDecoration:'none'}}>contact</a>
        </div>
      <form onSubmit={handelsubmit}>
        <input type='text' name='name' onChange={handelechnage} value={formdata.name}></input> 
        <br />
        <input type='text' name='email' onChange={handelechnage} value={formdata.email}></input> 
        <br />
        <input type='text' name='password' onChange={handelechnage} value={formdata.password}></input> 
        <br />
        <button type='submit'>Submit</button>
        {submitdata && (
            <div style={{marginTop:'20px'}}>
                <p>name = {submitdata.name}</p>
                <p>email = {submitdata.email}</p>
                <p>password = {submitdata.password}</p>
            </div>
        )}
        
      </form>
      
      <img src={profile} style={{height:'200px',width:"200px"}}></img>
        <div style={{display:'flex',justifyContent:'inline',backgroundColor:'ActiveCaption'}}>
            {submitdata && (
                <p style={{color:'white'}}>email = {submitdata.email}</p>
            )}
        </div>
      
    </div>
  )
}

export default Form
