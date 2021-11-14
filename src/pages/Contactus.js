import React from "react";
import emailjs from 'emailjs-com';

function Contactus() {
  function sendEmail(e)
    {
      e.preventDefault();
  
      emailjs.sendForm('service_gq37atp',
      'template_2dxfglq',
      e.target,
      'user_YuksSHHF55knKF1D4LLdS'
      ).then(res=>{
        console.log(res);
      }).catch(err=>console.log(err));
      
    }
    return (
      <div style={{backgroundImage:"url('https://www.idfreshfood.com/wp-content/uploads/2017/09/contact_us_2.jpg')"}}>
      <div className="container border" 
      style={{marginTop:"40px",
              width: "50%",
            backgroundImage:"url('https://image.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg')",
            backgroundPosition : "center",
            backgroundSize:"cover",
        
    }}>
         <h1 style={{marginTop:"25px", paddingLeft:"250px"}}>Contact Form</h1>
         <form className="row" style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
  
             <label>First Name</label>
             <input type="text" name="fname" className="form-control"/>
             <label>Last Name</label>
             <input type="text" name="lname" className="form-control"/>
             <label>Email Id</label>
             <input type="email" name="user_email" className="form-control"/>
             <label>Phone number</label>
             <input type="text" name="phone" className="form-control"/>
             <label>Message</label>
             <textarea name="msg" rows="4" cols="50" className="form-control"></textarea>
              <input type="submit" value="Submit" name="submit" className="form-control btn btn-primary" 
              style={{marginTop:"30px"}}></input>
           
         </form>
         </div>
         <div style={{backgroundColor:"grey",color:"black",textAlign:"center"}}>
        <p>@ 2020 United Communication - All Rights Reserved</p>
       </div>
    </div>
    
      
    );
  }
  
  export default Contactus;