import { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
    .get("http://localhost:5000" ,{
      params: {
        email,
        subject,
        message,
      },
    })
    .then(() => {
      alert("Email sent successfully");
    })
    .catch(() =>{
      alert("Email failed to send");
    })
  }

  return (
    <div>
      <input 
      type='text' 
      placeholder='Reciepent Email' 
      onChange={(e) => setEmail(e.target.value)}
      />
      <input 
      type='text' 
      placeholder='Subject' 
      onChange={(e) => setSubject(e.target.value)}
      />
      <input 
      type='text' 
      placeholder='Message' 
      onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMail}> Send Email </button>
    </div>
  );
}

export default App;
