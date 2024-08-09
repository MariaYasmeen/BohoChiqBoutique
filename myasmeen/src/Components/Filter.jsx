import React from "react";
import { Link } from "react-router-dom";

export const Filter = () =>{
    return (
        <>
        <div className="filtercss">
            <div className="text2">
            <div className="nav-item  ">
                <Link to =""
                  className="nav-link "     
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FILTER
                </Link>
                <ul className="dropdown-menu filterropdown">
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-tag"></i> PRICE
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-palette"></i>  COLOR
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-shirt"></i> SIZE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text1">
            <div className="nav-item dropdown">
                <Link to =""
                  className="nav-link "     
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SORT
                </Link>
                <ul className="dropdown-menu filterropdown">
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-medal"></i>  FEATURED
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-ranking-star"></i>  BEST SELLING
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-arrow-down-a-z"></i> ALPHABETICALLY A-Z
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-arrow-up-z-a"></i> ALPHABETICALLY Z-A
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-arrow-up-9-1"></i>  PRICE : LOW TO HIGH
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-arrow-down-9-1"></i>  PRICE : HIGH TO LOW
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-regular fa-clock"></i>  DATE : NEW TO OLD
                    </Link>
                  </li>
                  <li>
                    <Link to ="" className="dropdown-item"   >
                    <i class="fa-solid fa-clock-rotate-left"></i>  DATE : OLD TO NEW
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </>
    )
}