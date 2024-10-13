

function Sidebar(){
    return (
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{height:'100vh'}}>
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span class="fs-4">Sidebar</span>
            </a>
            <hr/>
            <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
                <a href="#" class="nav-link active" aria-current="page">
                Home
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis">
                Dashboard
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis">
                Orders
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis">
                Products
                </a>
            </li>
            <li>
                <a href="#" class="nav-link link-body-emphasis">
                Customers
                </a>
            </li>
            </ul>
            <hr/>
        </div>
    )
}

export default Sidebar;