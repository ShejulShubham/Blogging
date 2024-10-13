import { Link } from "react-router-dom"
import './css/login.css'



function LoginUser() {


    return (
        <>
            <h1 className="header">Welcome to Blogs</h1>
            <div className="container w-50">
                <div className="card">
                    <h2 className="card-header text-center">Sign in</h2>
                    <div className="card-body">
                        <form className="row justify-content-between g-3">
                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type='email' className="form-control" id="email"/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password"/>
                            </div>
                            <div className="col-md-12 text-start">
                                <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label class="form-check-label" for="gridCheck1">
                                    Remember Me
                                </label>
                            </div>
                            <div className="col-md-4 text-center">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                            <div className="col-md-4 text-center">
                                <button className="btn btn-warning">Cancel</button>
                            </div>
                            <div className="col-md-12">
                                <p>Not a Member?<button className="btn btn-light"><a href="/register">Register Here</a></button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginUser