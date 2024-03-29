import "./css/Mainsection.css";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { useCallback, useEffect, useRef } from "react";

export default function Mainsection() {
    const navOptions= useRef(null)
    const closeIcon= useRef(null)
    const hamIcon=useRef(null)
    const navbar=useRef(null)
    const logo=useRef(null)
    

     useEffect(()=>{
      let anchorArr=document.querySelectorAll("#navbar a");
      let hamburger=document.querySelector(".hamburger-icon svg");
      let close=document.querySelector(".close-icon svg");
      const observer=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(!entry.isIntersecting){ 
              navbar.current.style.backgroundColor="#e9e1e1";
              anchorArr.forEach(ele=>{
                     ele.style.color="#363232";
              })
              logo.current.style.color="#363232";
              navOptions.current.classList.add("intersection");
              hamburger.style.fill="#363232";
              close.style.fill="#363232";
            }
            else{
              navbar.current.style.backgroundColor="#363232";
              anchorArr.forEach(ele=>{
                     ele.style.color="#e9e1e1";
              })
              logo.current.style.color="#e9e1e1";
              navOptions.current.classList.remove("intersection");
              hamburger.style.fill="#e9e1e1";
              close.style.fill="#e9e1e1";
            }

        },);
  },{threshold:0.5})
  
         observer.observe(document.querySelector(".main-container"));

         return ()=>observer.disconnect();
     },[])

     
   const handleClick1 = useCallback(() => {
        navOptions.current.style.display="block";
        hamIcon.current.style.display="none";
        closeIcon.current.style.display="block";
    },[])
 
    const handleClick2 = useCallback(() => {
        navOptions.current.style.display="none";
        hamIcon.current.style.display="block";
        closeIcon.current.style.display="none";
    },[])

   
   
    return (
    <main>
      <nav id="navbar"  ref={navbar}>
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
        <div className="logo"  ref={logo}>Perils</div>
        <div className="nav-options" ref={navOptions}>
          <ul>  
            <li>
              <a href="#">Lorem</a>
            </li>
            <li>
              <a href="#grid-container">Ipsum</a>
            </li>
            <li>
              <a href="#testimonials">Err</a>
            </li>
            <li>
              <a href="#footer">Random</a>
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
