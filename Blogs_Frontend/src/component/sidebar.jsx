import { useState } from "react";


function Sidebar(){
    const [userName, setUserName] = useState('User');


    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{height:'100vh'}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span class="fs-4">Hello, {userName}</span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <a href="/home" class="nav-link active" aria-current="page">
                    View All Blogs
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-body-emphasis">
                    Add New Blogs
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link link-body-emphasis">
                    My Blogs
                    </a>
                </li>
                <li>
                    <a href="/category" class="nav-link link-body-emphasis">
                    Categories
                    </a>
                </li>
                <li>
                    <a href="/login" class="nav-link link-body-emphasis">
                        Sign Out
                    </a>
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Sidebar;