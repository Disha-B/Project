import React from "react";
import "./Services.css";

function Services() {
  return (
    <div>
      
      <section class="section" id="about">
    <div class="paras">
         <p class="sectionTag text-big">Nationwide Service</p>
         <p class="sectionsubTag text-small"> United’s highly skilled field engineers and electricians are strategically distributed across the United States to service large-scale and multi-site businesses. We create integrations that are customized for you and allow for fast, secure and stable network services across the nation. </p>
     </div>
     <div class="thumbnail">
         <img src="https://www.intechsolutionstx.com/wp-content/uploads/2017/06/national-rollouts-768x534.jpg" alt="Laptopimage" class="imgFluid"/>
     </div>
 </section>

   <section class="section section-left" id="about">
       <div class="paras">
            <p class="sectionTag text-big">Design & Engineering</p>
            <p class="sectionsubTag text-small">United’s experienced management team can help guide your design and engineering needs from the ground up. We work closely with owners, engineers, contractors, architects and inspectors to determine the fastest and most effective route for your organization. We act as your consultants to ensure the right cost-effective plan is in place.</p>
        </div>
        <div class="thumbnail">
            <img src="https://thumbor.forbes.com/thumbor/711x474/https://specials-images.forbesimg.com/imageserve/5dd77dbdea103f0006530bb4/The-5-Biggest-Technology-Trends-Disrupting-Engineering-And-Design-In-2020/960x0.jpg?fit=scale" alt="Laptopimage" class="imgFluid"/>
        </div>
    </section>
    <section class="section" id="about">
    <div class="paras">
         <p class="sectionTag text-big">24x7 Support</p>
         <p class="sectionsubTag text-small"> United’s help desk is available 24/7 to help troubleshoot, diagnose solutions or support any critical networking issues that may occur. We understand how instrumental technology systems are to the success of your business and we have an experienced technical team that is there for you when you need it most.</p>
     </div>
     <div class="thumbnail">
         <img src="https://thumbs.dreamstime.com/b/icon-white-background-arrow-vector-customer-service-logo-round-196071786.jpg" alt="Laptopimage" class="imgFluid"/>
     </div>
 </section>
 <div style={{backgroundColor:"grey",color:"black",textAlign:"center"}}>
        <p>@ 2020 United Communication - All Rights Reserved</p>
       </div>
</div>
  );
}

export default Services;