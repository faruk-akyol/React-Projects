import React from "react"
import facebook_image from "../images/b.png"
import instagram_image from "../images/c.png"
import twitter_image from "../images/a.png"
import github_image from "../images/d.png"

export default function Footer(){
    return(
    <div className="footer">
        <a href="#" className="footer_link" > <img src={twitter_image} />  </a>
        <a href="#" className="footer_link" > <img src={facebook_image} />  </a>
        <a href="#" className="footer_link" > <img src={instagram_image} />  </a>
        <a href="#" className="last_footer_link" > <img src={github_image} />  </a>

    </div>
    )
}