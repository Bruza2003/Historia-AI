import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Login.css";

function Login() {
    return (
        <div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light px-3">
        <div class="container-fluid">
          
            <a class="navbar-brand" href="#">MyApp</a> 

            Buttons aligned to the right 
            <div class="d-flex ms-auto">
                <button class="btn btn-outline-secondary me-2" id="aboutBtn">About</button>
                <button class="btn btn-outline-secondary me-2" id="helpBtn">Help</button>
                <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#loginModal">
                    Login
                </button>
            </div>
        </div>
    </nav>

   
    <div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    
                    <form id="loginForm">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" required></input>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Password</label>
                            <input type="password" class="form-control" id="password" required></input>
                        </div>
                        <button type="submit" class="btn btn-primary w-100">Login</button>
                    </form>
                </div>
                
                 <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div> 
            </div>
        </div>
    </div>
        </div>
    );
}
export default Login;