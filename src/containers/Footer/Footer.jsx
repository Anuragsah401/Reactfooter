import React from 'react'


import classes from './Footer.module.css'
import img from '../../assets/images/mountain.jpg'
import logoImg from '../../assets/images/logo.png'
import FooterLink from '../../components/FooterLinks/FooterLink'
import SocialLinks from '../../components/SocialLinks/SocialLinks'

const Footer = () => {

    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <div className={classes.image}>
                  <img src={img} alt="" />
                </div>
                {/* <div className={classes.footerTitle}>
                  <h1>You can help shape the future</h1>
                </div> */}
            </div>

            <div className={classes.logoAndLinks}>
                <div className={classes.brandLogo}>
                    <div className={classes.logoImg}>
                        <div>
                         <img src={logoImg} alt="" />
                        </div>
                    </div>
                    <div className={classes.copyright}>
                        <h3>Copyright &copy; 2021</h3>
                        <p>All rights reserved.</p>
                    </div>
                </div>

                <div className={classes.links}>
                    <div className={classes.footerLinks}>
                        <FooterLink />
                    </div>
                    <div className={classes.socialLinks}>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
