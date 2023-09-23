import { Input } from "@mui/material";

export default function NavBar() {


    
return(
    <>
    
    <div className="Navbar">

    <ul className="d-flex justify-content-evenly gap-5 flex-row p-4 align-items-center">

    <li>Home</li>
    <li>Products</li>
    <li>Deals</li>

    <div className="search-bar">

    <input type="text" className="search-inp" placeholder="Search Products" />

    </div>
    </ul>



    </div>
    

    </>
)

}