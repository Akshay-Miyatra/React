import { useState } from 'react';
import Form from './Form';
import Useeffect from './Useeffect';
import Useref from './Useref';
import Card from './Card';

function App() {
  // const [formdata, setformdata] = useState({
  //   name: '',
  //   email: '',
  // });

  // const [submittedData, setSubmittedData] = useState(null); // Step 1

  // const handlechange = (event) => {
  //   const { name, value } = event.target;
  //   setformdata((prevdata) => ({
  //     ...prevdata,
  //     [name]: value,
  //   }));
  // };

  // const handlesubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Form data', formdata);
  //   setSubmittedData(formdata); // Step 2
  // };

  return (
    <>
      {/* <form onSubmit={handlesubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          onChange={handlechange}
          value={formdata.name}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          name="email"
          onChange={handlechange}
          value={formdata.email}
        />
        <br />
        <button type="submit">Submit</button>
      </form> */}

      {/* Step 3: Only show after submit */}
      {/* {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )} */}
      {/* <Form heading="form submission"></Form> */}
      {/* <Useeffect></Useeffect> */}
      {/* <Useref></Useref> */}
      <Card name="akshay" age="21" rn="41"></Card>
    </>
  );
}

export default App;
