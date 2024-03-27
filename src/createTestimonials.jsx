
export default function CreateTestimonial({ind,img}){
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