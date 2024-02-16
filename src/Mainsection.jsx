import "./css/Mainsection.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";

export default function Mainsection() {
    const navOptions= useRef(null)
    const closeIcon= useRef(null)
    const hamIcon=useRef(null)

    const handleClick1 = () => {
        navOptions.current.style.display="block";
        hamIcon.current.style.display="none";
        closeIcon.current.style.display="block";
    }
 
    const handleClick2 = () => {
        navOptions.current.style.display="none";
        hamIcon.current.style.display="block";
        closeIcon.current.style.display="none";
    }
   
    return (
    <main>
      <nav>
        <div className="close-icon" onClick={handleClick2} ref={closeIcon}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CloseIcon />
          </IconButton>
        </div>
       <div className="hamburger-icon" onClick={handleClick1} ref={hamIcon}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="logo">Perils</div>
        <div className="nav-options" ref={navOptions}>
          <ul>  
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#">Ipsum</a>
            </li>
            <li>
              <a href="#">Err</a>
            </li>
            <li>
              <a href="#">Random</a>
            </li>
          </ul>
        </div>
        
      </nav>
      <section className="main-sec">
        <div className="main-container">
          <div className="main-flex-cont">
            <div>Award winning agency</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae cumque, animi ab rem facilis fuga.
            </div>
            <div>
              <button >Lorem, ipsum dolor sit amet consectetur</button>
              <button >Lorem</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
