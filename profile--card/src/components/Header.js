import React from "react"
import profile_photo from "../images/Rectangle 90.png"
import mail_image  from "../images/Mail.png"
import linkedin_image from "../images/linkedin.png"



export default function Header(){
    return(
            <div>
                <img   className="profile_image" src={profile_photo} />
                <div className="profile_info_div">
                    <h4 className="profile_name">Laura Smith</h4>
                    <p className="profile_occapution">Frontend Developer</p>

                    <p className="profile_website">laurasmith.website</p>
                    <div className="profile_links">
                        <a className="mail_profile_link" href="#" > <img src={mail_image} /> <p>Email</p>   </a>
                        <a className="linkedin_profile_link" href="#" > <img src={linkedin_image} /> <p>Linkedln</p>   </a>
                    </div>
                </div>


            </div>
    )
}