import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'




function Login() {
    
    const navigate = useNavigate();
    const [username, setPhno] = useState("")
    const [store_id, setStoreId] = useState("")
    const [password, setPswd] = useState("")

    const Loginfunc = () => {

        fetch("https://api.denzo.io/api/cus/v1/login", {
            method: 'post',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                store_id
            })
        }).then(res => res.json())
            .then(data => {
                alert(data.message)
                console.log(data);
                if(data.status === 200){
                    localStorage.setItem('token', data.token);
                    navigate('/products')
                }
            }).catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="container">


            {/* login form */}
            <form className='loginform'>

                <h2>Welcome to Login Page</h2>

                <div className="form-outline mb-4 mt-4">
                    <input type="text" value={username} onChange={(e) => setPhno(e.target.value)} id="form2Example1" className="form-control" />
                    <label className="form-label" for="form2Example1">Phone Number</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" value={password} onChange={(e) => setPswd(e.target.value)} id="form2Example2" className="form-control" />
                    <label className="form-label" for="form2Example2">Password</label>
                </div>

                <div className="form-outline mb-4 mt-4">
                    <input type="text" value={store_id} onChange={(e) => setStoreId(e.target.value)} id="form2Example3" className="form-control" />
                    <label className="form-label" for="form2Example3">Store ID</label>
                </div>


                <button type="button" onClick={Loginfunc} className="btn btn-primary btn-block mb-4">Sign in</button>

            </form>
        </div>
    )
}

export default Login