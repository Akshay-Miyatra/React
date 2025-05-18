import React,{useState} from 'react'

export default function Student() {
    const[name,setname] = useState({})
    const[rollno,setrollno] = useState({})
    const[email,setemail] = useState({})
    const[phone,setphone] = useState({})
    const[depname,setdepname] = useState({})
    const[photo,setphoto] = useState({})
    const[address,setaddress] = useState({})


    function handlechange(event){
        if(event.target.name == "name"){
            setname({...name,[event.target.name]:event.target.value})
        }
        else if(event.target.name =="rollno"){
        
        setrollno({...rollno,[event.target.name]:event.target.value})
        }
        else if(event.target.name =="email"){
        setemail({...email,[event.target.name]:event.target.value})
        }
        else if(event.target.name =="phone"){
        setphone({...phone,[event.target.name]:event.target.value})
        }
        else if(event.target.name =="depname"){
        setdepname({...depname,[event.target.name]:event.target.value})
        }
        else if(event.target.name =="photo"){
        setphoto({...photo,[event.target.name]:event.target.value})
        }
        else if(event.target.name =="address"){
        setaddress({...address,[event.target.name]:event.target.value})
        }
        else
        {
            console.log("Invalid input")
        }
    }
    async function datasubmit(data) {
        console.log("Data :",data)
        const response = await fetch("http://127.0.0.1:8000/api/test",{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
                "Content-Type":"application/json",
            },
        })
        .then((response) =>{
            return response.json()
        })
        .then((rdata) =>{
            console.log("sucess",rdata)
        })
       .catch((error)=>{
        console.log("error",error)
       })
       }
  return (
    <div>
        <form>   
       <div style={{backgroundColor:"cyan",border:"1px solid black",height:"767px",width:"856px"}}>
        <center>
        <label>Enter Name:</label>
        <input type="text" name="name" onChange={(event)=>{handlechange(event)}} />
        <br></br><br></br>

        <label>Enter RollNo:</label>
        <input type="tel" name="rollno" onChange={(event)=>{handlechange(event)}} />
        <br></br><br></br>

        <label>Enter Email:</label>
        <input type="text" name="email" onChange={(event)=>{handlechange(event)}} />
        <br></br><br></br>

        <label>Enter Phone:</label>
        <input type="text" name="phone" onChange={(event)=>{handlechange(event)}} />
        <br></br><br></br>

        <label>Enter Departement:</label>
        <input type="text" name="depname" onChange={(event)=>{handlechange(event)}} />
        <br></br><br></br>

        <label>Enter Photo:</label>
        <input type="file" name="photo" onChange={(event)=>{handlechange(event)}} />
        <br></br><br></br>

        <label>Enter Address:</label>
        <input type="text" name="address" onChange={(event)=>{handlechange(event)}} />
        <br></br><br></br>

        <button onClick={(event) => {
  event.preventDefault();
  datasubmit({
    name: name.name || "",
    rollno: rollno.rollno || "",
    email: email.email || "",
    phone: phone.phone || "",
    depname: depname.depname || "",
    photo: photo.photo || "",
    address: address.address || ""
  });
}} >Submit</button>
        </center>
       </div>
      
       </form>
        <div style={{backgroundColor:"gray"}}>
            <center>
                <h3>Name {`${name.name}`}</h3>
                <h3>RollNo {`${rollno.rollno}`}</h3>
                <h3>Email {`${email.email}`}</h3>
                <h3>Phone {`${phone.phone}`}</h3>
                <h3>Departement {`${depname.depname}`}</h3>
                <h3>Photo {`${photo.photo}`}</h3>
                <h3>Address {`${address.address}`}</h3>
                
            </center>
        </div>
      
    </div>
  )
}
