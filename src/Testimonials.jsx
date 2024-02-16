import avatar1 from "./assets/images/avatar1.jpeg"
import avatar2 from "./assets/images/avatar2.jpeg"
import avatar3 from "./assets/images/avatar3.jpeg"
import avatar4 from  "./assets/images/avatar4.jpeg"
import "./css/Testimonials.css"

export default function Testimonials(){


    return(
        <div className="testimonials">
            <div className="slide-1">
                <CreateTest ind={1} img={avatar1}/>
                <CreateTest ind={2} img={avatar2}/>
                  
            </div>
            <div className="slide-2">
                <CreateTest ind={3} img={avatar3}/>
                <CreateTest ind={4} img={avatar4}/>
            </div>
        </div>
    )
}

function CreateTest({ind,img}){
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