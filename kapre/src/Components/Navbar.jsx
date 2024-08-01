export const Navbar = () =>{

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

    return (
        <>
          <div className=" d-flex justify-content-center align-items-center" style={{ backgroundColor: "black" }}>
      <div className=" mx-5">
        <a className="text-decoration-none" style={{ color: "white" }}>
          Free Shipping Over PKR 5000
        </a>
      </div>
      <div className=" mx-5">
        <a className="text-decoration-none" style={{ color: "white" }}>
         Contact Us: +9221111627422
        </a>
      </div>
    </div>

  <div className="">
  <div className="row align-items-center justify-content-between ">
    <div className="col text-center ">
   
      
      <a href="#" className="text-decoration-none" ><img src="search.png" style={{ width: "15%",margin:"3px"  }}></img>
      </a>
    </div>
    <div className="col text-center">
      <a href="/" className="text-decoration-none text-center" style={{ color: "black", fontSize: "45px" }}>
        M.YASMEEN
      </a>
    </div>
    <div className="col text-center" >
     <a href="#" className="text-decoration-none" ><img src="ship.png" style={{ width: "11%",margin:"3px"  }}></img>
    </a>
    <a href="#" className="text-decoration-none" ><img src="like.png" style={{ width: "8%",margin:"3px" }}></img>
    </a>
   

{user?.user?.email !== "mariyayasmeen000@gmail.com" ? (
  <a href="/cart" className="text-decoration-none">
    <img
  src="cart.png"
  alt="Cart"
  style={{ width: "8%", margin: "3px" }}
/>
  </a>
) : (
  ""
)}

      
     <a href="/account" className="text-decoration-none" ><img src="user.png" style={{ width: "8%",margin:"3px"  }}></img>
      </a>
     
    </div>
  </div>
</div>


<div class="container" style={{color:"black",marginBottom:"8px"}}>
    <header class="d-flex justify-content-center " >
      <ul class="nav  ulcss nav-links"  >
        <li class=" "><a href="/product" class="nav-link">unstitched</a>
        <div className="mega-box " style={{left: "-210px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="luxpt.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Vectors</a>
                      </li>
                      <li>
                        <a href="#">Business </a>
                      </li>
                      <li>
                        <a href="#">Custom </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <a href="#">Graphics</a>
                   </li>
                   <li>
                     <a href="#">Vectors</a>
                   </li>
                   <li>
                     <a href="#">Business </a>
                   </li>
                   <li>
                     <a href="#">Custom </a>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>
        </li>

        
        <li class="nav-item"><a href="/signup" class="nav-link">ready to wear</a>
        <div className="mega-box"  >
                <div className="content" >
                  <div className="row" style={{width:"20%"}}>
                    <img src="unstit.jpg"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links"   style={{left: "-160px"}} >
                      <li>
                        <a href="#">M.Prints</a>
                      </li>
                      <li>
                        <a href="#">Mbroidered</a>
                      </li>
                      <li>
                        <a href="#">Linen</a>
                      </li>
                      <li>
                        <a href="#">Chiffon </a>
                      </li>
                    </ul>
                  </div>
                  </div>
                  </div></li>
        <li class="nav-item"><a href="/kids" class="nav-link">kids</a>
        <div className="mega-box" >
                <div className="content" >
                  <div className="row" >
                    <img src="kids.jpg"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links"  style={{left: "-180px"}} >
                      <li>
                        <a href="#">Luxury Formals</a>
                      </li>
                      <li>
                        <a href="#">Mommy & Me</a>
                      </li>
                      <li>
                        <a href="#">Luxury Pret</a>
                      </li>
                      <li>
                        <a href="#">View </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                     <ul className="mega-links">
                      <li>
                        <a href="#">Personal</a>
                      </li>
                      <li>
                        <a href="#">Business </a>
                      </li>
                      <li>
                        <a href="#">Mobile </a>
                      </li>
                      <li>
                        <a href="#"> Marketing</a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                   
                    <ul className="mega-links">
                      <li>
                        <a href="#">Site </a>
                      </li>
                      <li>
                        <a href="#"> Hosting</a>
                      </li>
                      <li>
                        <a href="#">Privacy </a>
                      </li>
                      <li>
                        <a href="#">Website </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
        </li>
        <li class="nav-item"><a href="#" class="nav-link">menswear</a>
        <div className="mega-box" >
                <div className="content" >
                  <div className="row"   style={{width:"30%"}}>
                    <img src="dad.jpg"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links"  style={{left: "-180px"}} >
                      <li>
                        <a href="#">Luxury Formals</a>
                      </li>
                      <li>
                        <a href="#">Mommy & Me</a>
                      </li>
                      <li>
                        <a href="#">Luxury Pret</a>
                      </li>
                      <li>
                        <a href="#">View </a>
                      </li>
                    </ul>
                  </div>
                  </div>
                  </div>
        </li> 
        <li class="nav-item"><a href="#" class="nav-link">couture</a>
        <div className="mega-box" style={{left: "-10px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="luxury.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Vectors</a>
                      </li>
                      <li>
                        <a href="#">Business </a>
                      </li>
                      <li>
                        <a href="#">Custom </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <a href="#">Graphics</a>
                   </li>
                   <li>
                     <a href="#">Vectors</a>
                   </li>
                   <li>
                     <a href="#">Business </a>
                   </li>
                   <li>
                     <a href="#">Custom </a>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>
        </li> 
        <li class="nav-item"><a href="#" class="nav-link">bridals</a>
        <div className="mega-box" style={{left: "-210px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="slider5.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Vectors</a>
                      </li>
                      <li>
                        <a href="#">Business </a>
                      </li>
                      <li>
                        <a href="#">Custom </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <a href="#">Graphics</a>
                   </li>
                   <li>
                     <a href="#">Vectors</a>
                   </li>
                   <li>
                     <a href="#">Business </a>
                   </li>
                   <li>
                     <a href="#">Custom </a>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>
        </li>
         <li class="nav-item"><a href="#" class="nav-link">jewelry</a> <div className="mega-box" style={{left: "-21px"}} >
                <div className="content" >
                  <div className="row" >
                    <img src="perf.png"/>
                  </div>
                  <div className="row" >
                 
                    <ul className="mega-links">
                      <li>
                        <a href="#">Graphics</a>
                      </li>
                      <li>
                        <a href="#">Vectors</a>
                      </li>
                      <li>
                        <a href="#">Business </a>
                      </li>
                      <li>
                        <a href="#">Custom </a>
                      </li>
                    </ul>
                  </div>
                  <div className="row" >
                 
                 <ul className="mega-links">
                   <li>
                     <a href="#">Graphics</a>
                   </li>
                   <li>
                     <a href="#">Vectors</a>
                   </li>
                   <li>
                     <a href="#">Business </a>
                   </li>
                   <li>
                     <a href="#">Custom </a>
                   </li>
                 </ul>
               </div>
                  </div>
                  </div>    
         </li>
          
        <li class="nav-item"><a href="#" class="nav-link">sale</a></li>
        {user?.user?.email === "mariyayasmeen000@gmail.com" && (
        <>
          <li className="nav-item">
            <a href="/admindashboard" className="nav-link">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="/addproduct" className="nav-link">Add</a>
          </li>
          <li className="nav-item">
            <a href="/editproduct" className="nav-link">Edit</a>
          </li>
        </>
        )}
       
      </ul>
    </header>
  </div>

        </>
    )
}