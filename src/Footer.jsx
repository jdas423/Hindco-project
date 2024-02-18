  
  import "./css/footer.css";
  import TwitterIcon from '@mui/icons-material/Twitter';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import FacebookIcon from '@mui/icons-material/Facebook';
  export default function Footer(){
    return(
        <footer className="footer">
           <div className="footer-wrap">
              <Firstbox/>
              <Secondbox/>
              <Thirdbox/>
           </div>
           <div className="copyright">
              <p>Copyright © 2022. All rights reserved.</p>
           </div>
        </footer>
    )
  }



  function Firstbox(){
    return(
        <div className="first-box">
        <section className="first-box-first-sec">
           <h2>Lorem ipsum dolor sit amet.</h2>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae aperiam blanditiis deserunt.</p>
        </section>
        <section className="first-box-second-sec">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia perferendis tempore sapiente, delectus corporis placeat!</p>
        </section>
        <div className="footer-btn">
           <button> Click me</button>
        </div>
     </div>
    )
  }


  function Secondbox(){
    return(
      <div className="second-box">
        <div className="second-box-top">
            <h2>Lorem ipsum dolor sit amet.</h2>
            <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem, ipsum dolor.</li>
            </ul>
        </div>
        <div className="second-box-bottom">
            <h2>Lorem ipsum dolor sit amet</h2>
            <ul>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
            </ul>
        </div>
      </div>
    )
  }


  function Thirdbox(){
    return(
        <>
        <div className="third-box">
          <h2 className="third-box-h">Connect with us</h2>
          <ul className="social-icons">
              <li><a href="#">
                <TwitterIcon sx={{fill:"white",fontSize:"1.5rem"}}/>
                </a>
            </li>
              <li><a href="#"><InstagramIcon sx={{fill:"white",fontSize:"1.5rem"}}/></a></li>
              <li><a href="#"><LinkedInIcon sx={{fill:"white",fontSize:"1.5rem"}}/></a></li>
              <li><a href="#"><FacebookIcon sx={{fill:"white",fontSize:"1.5rem"}}/></a></li>
          </ul>
        </div>  
        </>
    )
  }