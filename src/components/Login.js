import React, { useState} from "react";
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        SetUsername(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        SetPassword(value)
    }

    return (
        <div style={{marginTop: "200px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-3">
                            <div className="card-body">
                                <div className="form-grup">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}/>
                                </div>

                                <div className="form-grup">
                                    <label>Password</label>
                                    <input type="Password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
                                </div>

                                <button className="btn btn-primary">Login</button>
                                <Link to="/daftar">
                                    Halaman Daftar
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login


