export default function Sidebar() {
    return (
        <div id="sidebarContainer" className="mobile-header-active mobile-header-wrapper-style">
        <div className="mobile-header-wrapper-inner">
            <div className="mobile-header-top">
                <div className="mobile-header-logo">
                    <a href='/'><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                </div>
                <div className="mobile-menu-close close-style-wrap close-style-position-inherit">
                    <button  className="close-style search-close">
                        <i className="icon-top"></i>
                        <i className="icon-bottom"></i>
                    </button>
                </div>
            </div>
            <div className="mobile-header-content-area">
                <div className="mobile-search search-style-3 mobile-header-border">
                    <form action="#">
                        <input type="text" placeholder="Search for items…" />
                        <button type="submit"><i className="fi-rs-search"></i></button>
                    </form>
                </div>
                <div className="mobile-menu-wrap mobile-header-border">
                   
                    <nav>
                        <ul className="mobile-menu font-heading">
                            <li className="menu-item-has-children">
                                <a href='/'>Home</a>
                            </li>
                        </ul>
                    </nav>
                  
                </div>
                <div className="mobile-header-info-wrap">
                    <div className="single-mobile-header-info">
                        <a href='/page-contact'><i className="fi-rs-marker"></i> Our location </a>
                    </div>
                    <div className="single-mobile-header-info">
                        <a href='/page-login'><i className="fi-rs-user"></i>Log In / Sign Up </a>
                    </div>
                    <div className="single-mobile-header-info">
                        <a href="#"><i className="fi-rs-headphones"></i>(+01) - 2345 - 6789 </a>
                    </div>
                </div>
                <div className="mobile-social-icon mb-50">
                    <h6 className="mb-15">Follow Us</h6>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
                    <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
                </div>
                <div className="site-copyright">Copyright 2024 © Nest. All rights reserved. Powered by AliThemes.</div>
            </div>
        </div>
    </div>
    )
};