import React,{useState} from 'react'
import profile from './assets/profile.jpg'

function Card(props) {
    const[formdata,setformdata] = useState({
        email:'',
    })
    const[submitdata,setsubmitdata] = useState(null)
    const handlechnage = (event) =>{
      const{name,value} = event.target
      setformdata((prevdata=>({
        ...prevdata,
        [name]:value
      })))
      }
      const handelsubmit =(event) =>
      {
          console.log("submitdata")
          event.preventDefault()
          setsubmitdata(formdata)
      }

    
  return (
    <div>
      <div style={{border:'1px solid black',height:'500px',width:'500px'}}>
       <h2 style={{marginLeft:"10px"}}> name :{props.name}</h2>
       <h2 style={{marginLeft:"10px"}}> age :{props.age}</h2>
       <h2 style={{marginLeft:"10px"}}> rn :{props.rn}</h2>
       <h2> {submitdata && (
          <p>email : {submitdata.email}</p>
        
      )}</h2>
       <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <img src={profile} style={{height:'200px',width:'200px'}}></img>
       </div>
       <br>
       </br>
      </div>
      <form onSubmit={handelsubmit}>
        <input type='text' name='email' value={formdata.email} onChange={handlechnage}></input>
        <br></br>
        <button type='submit'>Submit</button>
      </form>
     
    </div>
  )
}
export default Card
