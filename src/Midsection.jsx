import "./css/Midsection.css";
import pic1 from "./assets/images/pic1.jpeg";
import pic2 from "./assets/images/pic2.jpeg";
import pic3 from "./assets/images/pic3.jpeg";
import { useEffect } from "react";
export default function Midsection() {
  
  useEffect(()=>{
    let img=document.querySelectorAll(".img-container");
    let firstWrap=document.querySelector(".first-wrapper");
    let secondWrap=document.querySelector(".second-wrapper");
    let thirdWrap=document.querySelector(".third-wrapper");
    const observer1= new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting){
            img[0].style.transform="translateX(0)";
            firstWrap.style.transform="translateX(0)";
          }
      })

    },{threshold:0})

    const observer2= new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting){
            img[1].style.transform="translateX(0)";
            secondWrap.style.transform="translateX(0)";
          }
      })

    },{threshold:0})

    const observer3= new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
          if(entry.isIntersecting){
            img[2].style.transform="translateX(0)";
            thirdWrap.style.transform="translateX(0)";
          }
      })

    },{threshold:0})

    observer1.observe(img[0]);
    observer1.observe(firstWrap);
    observer2.observe(img[1]);
    observer2.observe(secondWrap);
    observer3.observe(img[2]);
    observer3.observe(thirdWrap);
    

  },[])



  return (
    <>
      <div className="build-banner">
        <div>Let's build something great</div>
      </div>
      {window.innerWidth >= 600 ? (
        <div className="grid-container" id="grid-container">
          <div className="grid">
            <div className="img-container l">
              <div className="img-text">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <img src={pic1} alt="no_img" />
            </div>
            <First />
            <Second />
            <div className="img-container r">
              <div className="img-text">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <img src={pic2} alt="no_img" />
            </div>
            <div className="img-container l">
              <div className="img-text">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <img src={pic3} alt="no_img" />
            </div>
            <Third />
          </div>
        </div>
      ) : (
        <Mobilemidsec />
      )}
    </>
  );
}

function First() {
  return (
    <div className="first-wrapper">
      <div className="first">
        <div className="topic">Random</div>
        <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            est aliquid eaque suscipit a ea repudiandae accusamus doloribus
            minima dolores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat enim harum aspernatur aperiam neque eum ea placeat quasi
            maiores?
          </p>
        </div>
        <div className="btn-1-wrapper">
          <button className="btn-1">Lorem, ipsum dolor</button>
        </div>
        <div className="btn-2-wrapper">
          <button className="btn-2">Lorem dolor sit amet</button>
        </div>
      </div>
    </div>
  );
}

function Second() {
  return (
    <div className="second-wrapper">
      <div className="second">
        <div className="topic">Random</div>
        <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            est aliquid eaque suscipit a ea repudiandae accusamus doloribus
            minima dolores?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            fugiat enim harum aspernatur aperiam neque eum ea placeat quasi
            maiores?
          </p>
        </div>
        <div className="btn-1-wrapper">
          <button className="btn-1">Lorem, ipsum dolor</button>
        </div>
      </div>
    </div>
  );
}

function Third() {
  return (
    <div className="third-wrapper">
      <div className="third">
        <div className="topic">Random</div>
        <div className="heading">Lorem ipsum dolor sit amet consectetur.</div>
        <div className="content">
          <div className="sub-topic-1">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
          <div className="sub-topic-2">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
          <div className="sub-topic-3">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
          <div className="sub-topic-4">
            <div className="sub-heading">Lorem ipsum dolor </div>
            <div className="sub-content">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
              eos obcaecati non totam sequi. Saepe!
            </div>
          </div>
        </div>
        <div className="btn-1">Lorem, ipsum dolor.</div>
      </div>
    </div>
  );
}

function Mobilemidsec() {
  return (
    <>
      <div className="grid-container-mob" id="grid-container">
        <div className="grid-mob">
          <div className="img-container l">
            <div className="img-text">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <img src={pic1} alt="no_img" />
          </div>
          <First />
          <div className="img-container r">
            <div className="img-text">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <img src={pic2} alt="no_img" />
          </div>
          <Second />
          <div className="img-container l">
            <div className="img-text">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <img src={pic3} alt="no_img" />
          </div>
          <Third />
        </div>
      </div>
    </>
  );
}
