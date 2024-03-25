import { useEffect, useCallback,useMemo } from "react"
import avatar1 from "./assets/images/avatar1.jpeg"
import avatar2 from "./assets/images/avatar2.jpeg"
import avatar3 from "./assets/images/avatar3.jpeg"
import avatar4 from  "./assets/images/avatar4.jpeg"
import "./css/Testimonials.css"

export default function Testimonials(){
    const imgArr=useMemo(()=>[avatar1,avatar2,avatar3,avatar4],[]);
    const len=useMemo(()=>imgArr.length,[]);

    useEffect(()=>{
        const id=setInterval(()=>{

            const transitSlide=document.querySelector(".transit")
            const currSlide=document.querySelector(".active");
            const nextSlide=document.querySelector(".next");
            const slideElements=document.querySelectorAll(".sl")
            const len=slideElements.length;
            if(transitSlide) transitSlide.style.transition="left 0.5s ease-in-out";
            currSlide.style.left="-100%";
            nextSlide.style.left="0px";
           
            const currInd=document.querySelector(".indi-act");
            currInd.style.backgroundColor="transparent";
            for(let classname of currInd.classList){
                if(classname.includes("ind-")){
                    if(Number(classname[4])===len) {
                        document.querySelector(".ind-1").style.backgroundColor="black";
                        document.querySelector(".ind-1").classList.add("indi-act");
                    }
                    else{
                            document.querySelector(`.ind-${Number(classname[4])+1}`).style.backgroundColor="black"
                            document.querySelector(`.ind-${Number(classname[4])+1}`).classList.add("indi-act");
                     }
                    break;
                }
            }
            currInd.classList.remove("indi-act");
            
            setTimeout(()=>{
                currSlide.style.transition="left 0s ease-in-out";
                currSlide.style.left="100%";
                currSlide.classList.add("transit");
                if(transitSlide) transitSlide.classList.remove("transit");
                currSlide.classList.remove("active");
                nextSlide.classList.remove("next");
                nextSlide.classList.add("active");
                for(let classname of nextSlide.classList){
                    if(classname.includes("slide")){
                        if(Number(classname[6])===len) document.querySelector(".slide-1").classList.add("next");
                        else document.querySelector(`.slide-${Number(classname[6])+1}`).classList.add("next");
                        break;
                    }
                }
            },4000)
        },10000)


        return ()=>clearInterval(id);
    },[])
    
    const genSlides=useCallback(function(){
        const slides=[]
        let obj1={
            left:"0",top:"0",position:"relative",width:"100%",height:"fit-content",display:"flex",justifyContent:"space-around",transition:"left 0.5s ease-in-out"
        }
        let obj2={
            left:"100%",top:"0", position:"absolute",width:"100%",height:"fit-content",display:"flex",justifyContent:"space-around",transition:"left 0.5s ease-in-out"
        }
        if(window.innerWidth >= 600){
            for(let i=1;i<=len/2;i++){
                slides.push(<div className={i === 1 ? `slide-1 active sl` : (i === 2 ? `slide-2 sl next` : `slide-${i} sl`)} key={i}
                style={ i === 1 ? obj1 : obj2 }>
                    <CreateTestimonial ind={2 * i - 1} img={imgArr[2 * i - 2]}/>
                    <CreateTestimonial ind={2 * i} img={imgArr[i * 2 - 1]}/>
                </div>)
            }
        }
        else{
            for(let i=1;i<=len;i++){
                slides.push(<div className={i === 1 ? `slide-1 active sl` : (i === 2 ? `slide-2 sl next` : `slide-${i} sl`)} key={i}
                style={ i === 1 ? obj1 : obj2 }>
                    <CreateTestimonial ind={i} img={imgArr[i-1]}/>
                </div>)
            }
        }

        return slides;
    },[])
   
    const genIndicators=useCallback(function(){
        const indicators=[];
        if(window.innerWidth >= 600){
            for(let i=1;i<=len/2;i++){
                indicators.push(<div className={i === 1 ? `ind-1 indi-act` : `ind-${i}`} key={i}>
                </div>)
            }
        }
        else{
            for(let i=1;i<=len;i++){
                indicators.push(<div className={i === 1 ? `ind-1 indi-act` : `ind-${i}`} key={i}>
                </div>)
            }
        }
        return indicators;
    },[])

    return(
       

        <div className="testimonials" id="testimonials">
            { genSlides()}
            <div className="indicators">
                {genIndicators()}
            </div>
        </div>

        
    )
}

function CreateTestimonial({ind,img}){
    return(

     <div className={`test-${ind}`}>
        <div className="avatar">
            <img src={img} alt="no_avatar" />
        </div>
        <div className="test-content">
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam neque, a illum esse cumque possimus autem aspernatur, quis provident ipsa dolorum nostrum repellat quo nam accusamus. Possimus excepturi rem vel.
            </div>
            <div className="name">
               Lorem ipsum dolor sit amet.
            </div>
        </div>
     </div>

    )
}