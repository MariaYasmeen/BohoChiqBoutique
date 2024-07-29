export const Navbar = () =>{
    return (
        <>
           <header className="py-1" style={{ backgroundColor: "black" }}>
        <div className="align-items-center">
          <div className="col-15 text-center top-navbar">
            <a className="text-decoration-none" style={{ color: "white" }}>
              Free Shipping Over PKR 5000
            </a>
            <a className="text-decoration-none" style={{ color: "white" }}>
              +9221111627422
            </a>
          </div>
        </div>
      </header>

      <header className="lh-1 py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="link-secondary" href="#">
              Subscribe
            </a>
          </div>
          <div className="col-4 text-center">
            <a
              className="blog-header-logo text-body-emphasis text-decoration-none hero-txt"
              href="#"
            >
              Fashion Kulture
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5"></circle>
                <path d="M21 21l-5.2-5.2"></path>
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
          </div>
        </div>
      </header>
      
        <nav className="navbar wrapper navbar-expand-md  sticky-top " data-bs-theme="dark" style={{backgroundColor:"white", color:"white"}}>
  <div className="container">
    <a className="navbar-brand d-md-none" href="#">
      Fashion Kulture
    </a>
    <button className="navbar-toggler" style={{backgroundColor:"black"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header" style={{backgroundColor:"white"}}>
    
        <button style={{backgroundColor:"white"}} type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body" style={{backgroundColor:"white", color:"white"}}>
        <ul className="navbar-nav flex-grow-1 justify-content-between nav-links">
        
          <li className="nav-item"><a className="nav-link" href="#">new</a>

          <div className="mega-box" style={{left: "-210px"}} >
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
          <li className="nav-item"><a className="nav-link" href="#">unstitched</a>
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
          <li className="nav-item"><a className="nav-link" href="#">store</a></li>
          <li className="nav-item"><a className="nav-link" href="#">kids</a>
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
              </div></li>
          <li className="nav-item"><a className="nav-link" href="#">menswear</a>
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
                  </div></li>
          <li className="nav-item"><a className="nav-link" href="#">couture</a>
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
                  </div></li>
          <li className="nav-item"><a className="nav-link" href="#">bridals</a>
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
                  </div></li>
          <li className="nav-item"><a className="nav-link" href="#">jewelry</a></li>
          <li className="nav-item"><a className="nav-link" href="#">accessories</a>
          <div className="mega-box">
                <div className="content">
                  <div className="row">
                    <img
                      src="d1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="row">
                 
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
                    <img
                      src="1.jpg"
                      alt=""
                    />
                                      </div>
                  <div className="row">
                         <ul className="mega-links">
                      <li>
                        <a href="#">Personal Email</a>
                      </li>
                      <li>
                        <a href="#">Business Email</a>
                      </li>
                      <li>
                        <a href="#">Mobile Email</a>
                      </li>
                      <li>
                        <a href="#">Web Marketing</a>
                      </li>
                    </ul>
                    <img
                      src="1.jpg"
                      alt=""
                    />
                  </div>
                
                </div>
              </div></li>
          <li className="nav-item"><a className="nav-link" href="#">perfumes</a>
          <div className="mega-box" style={{left: "-21px"}} >
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
                  </div></li>
          <li className="nav-item"><a className="nav-link" href="#">sale</a></li>
         
        </ul>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}