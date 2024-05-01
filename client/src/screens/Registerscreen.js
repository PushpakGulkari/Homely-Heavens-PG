// import React, { useState } from "react";
// import axios from 'axios'
// import Loader from "../components/Loader";
// import Error from "../components/Error";
// import Success from "../components/Success";
// import { Link } from 'react-router-dom'

// function Registerscreen() {
//     const[name, setname]=useState('')
//     const[email, setemail]=useState('')
//     const[password, setpassword]=useState('')
//     const[cpassword, setcpassword]=useState('')
//     const [loading, setloading] = useState(false)
//     const [error, seterror] = useState()
//     const [success, setsuccess] = useState()

//     const registered = async () => {
        
//         try{
//         if (!document.getElementById('registerForm').checkValidity()) {
//           console.log('Form is not valid');
//           return;
//         }
//     }
//         catch(error){

//         }
//     }
    
//     async function register(){
        
//         try{
//         if(name == '' && email == '' && password == ''){
//             alert('please fill all the details')
           
          
 
//         }
//     }
//     catch(error){

//     }
    
//         if (password === cpassword) {
//             const user={
//                 name,
//                 email,
//                 password,
//                 cpassword
//             }
//             try {
//                 setloading(true)
//               const result =  await axios.post('/api/users/register' , user).data
//               setloading(false)
//               setsuccess(true)
                
//               setname('')
//               setemail('')
//               setpassword('')
//               setcpassword('')

//             } catch (error) {
//                 setloading(false)
//                 console.log(error)
                
//                 seterror(true)
//             }
//         } else {
//             alert('password not matched')
//         }
//     }

//     return (
//         <div>
//             {loading && (<Loader/>)}
//             {error && (<Error/>)}
         
        

//             <div className="row justify-content-center mt-5">
//                 <div className="col-md-5">
//                 {success && (<Success message='Registration Success'/>)}
//                     <div className="bs">
//                             <h1>Register</h1>
//                             <form id="registerForm">
//                             <input type="text" className="form-control" placeholder="Enter Name"
//                             value={name} onChange={(e)=>{setname(e.target.value)}} required/>
//                             <input type="email" className="form-control" placeholder="Enter Email"
//                              value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
//                             <input type="password" className="form-control" placeholder="Set Password"
//                              value={password} onChange={(e)=>{setpassword(e.target.value)}} required/>
//                             <input type="password" className="form-control" placeholder="Confirm Password"
//                              value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}} required/>


//                              <button className="btn btn-primary" onClick={register}>Register</button>
//                              </form>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Registerscreen;

import React, { useState } from "react";
import axios from 'axios';
import Loader from "../components/Loader";
import Error from "../components/Error";
import Success from "../components/Success";


function Registerscreen() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const validateForm = () => {
    return name !== '' && email !== '' && password !== '' && password === cpassword;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all the details correctly.');
      return;
    }

    try {
      setloading(true);
      const user = {
        name,
        email,
        password,
        cpassword,
      };
      const result = await axios.post('/api/users/register', user);
      setloading(false);
      setsuccess(true);

      setname('');
      setemail('');
      setpassword('');
      setcpassword('');
    } catch (error) {
      setloading(false);
      console.error(error);
      seterror(true);
    }
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error />}
      <div className="row justify-content-center mt-5">
        <div className="col-md-5">
          {success && <Success message="Registration Success" />}
          <div className="bs">
            <h2 className="row justify-content-center"> Register</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Set Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                value={cpassword}
                onChange={(e) => setcpassword(e.target.value)}
                required
              />
              <br/>
              <button className="btn btn-primary" type="submit">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerscreen;
