import React, { useState } from "react";
import axios from 'axios'
import Loader from "../components/Loader";
import Error from "../components/Error";
import { Link } from "react-router-dom";

function Loginscreen() {

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState('')

    async function login() {

        const user = {

            email,
            password


        }
        try {
            setloading(true)
            const result = await axios.post('/api/users/login', user);
            // setloading(false)
            localStorage.setItem('currentUser', JSON.stringify(result.data))
            window.location.href = '/home'

        } catch (error) {
            console.log("catch error")
            setloading(false)
            seterror(true)
        }




    }

    return (
        <div>
            {loading && (<Loader />)}

            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    {error && (<Error message='Invalid Crendetionals' />)}
                    <div className="bs">
                        <h2><i class="fa-solid fa-user"></i>  login</h2>
                        
                       
                      <input  type="email" className="form-control " placeholder="Enter Email"
                            value={email} onChange={(e) => { setemail(e.target.value) }} required />
                        
                        <input type="password" className="form-control" placeholder="Enter Password"
                            value={password} onChange={(e) => { setpassword(e.target.value) }} required/>


                        <button className="btn btn-primary mt-3" onClick={login}>login</button>
                        <br/>
                        <hr/>
                        <p>Don't have an account ? </p>
                        <Link to='/register'>
                           <button className="btn btn-primary" >
                               Register here
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Loginscreen;