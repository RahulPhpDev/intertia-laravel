export default function HeaderLayout ({children}) {
    return (
        <header>
        <div className="mobile-promotion">
            <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
        </div>
      
        <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
            <div className="container">
                <div className="header-wrap">
                    <div className="logo logo-width-1">
                        <a href='/'><img src="assets/imgs/logo.svg" alt="logo" /></a>
                    </div>
                    <div className="header-right">
                        <div className="search-style-2">
                            <form action="#">
                           
                                <input type="text" placeholder="Search for items..." />
                            </form>
                        </div>
                        <div className="header-action-right">
                            <div className="header-action-2">
                               
                                
                                <div className="header-action-icon-2">
                                    <a href='/shop-wishlist' className="flex items-center">
                                        <i className="fa fa-heart"></i>
                                        <span className="pro-count blue">6</span>
                                    </a>
                                    <span href='/shop-wishlist' className="lable">Wishlist</span>
                                </div>
                                <div className="header-action-icon-2">
                                    <a href="/shop-cart" className="mini-cart-icon">
                                        <i className="fa fa-shopping-cart"></i>
                                        <span className="pro-count blue">2</span>
                                    </a>
                                    <a href="/shop-cart"><span className="lable">Cart</span></a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                        <ul>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="/shop-product-right">Daisy Casual Bag</a></h4>
                                                    <h4><span>1 × </span>$800.00</h4>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="shopping-cart-img">
                                                    <a href="/shop-product-right">
                                                    <img src="assets/imgs/shop/thumbnail-2.jpg" alt="Nest" />
                                                    </a>
                                                </div>
                                                <div className="shopping-cart-title">
                                                    <h4><a href="/shop-product-right">Corduroy Shirts</a></h4>
                                                    <h4><span>1 × </span>$3200.00</h4>
                                                </div>
                                                <div className="shopping-cart-delete">
                                                    <a href="#"><i className="fi-rs-cross-small"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="shopping-cart-footer">
                                            <div className="shopping-cart-total">
                                                <h4>Total <span>$4000.00</span></h4>
                                            </div>
                                            <div className="shopping-cart-button">
                                                <a href="/shop-cart" className="outline">View cart</a>
                                                <a href="/shop-checkout">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="header-action-icon-2">
                                    <a href='/page-account'>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                    <a href='/page-account'><span className="lable ml-0">Account</span></a>
                                    <div className="cart-dropdown-wrap cart-dropdown-hm2 account-dropdown">
                                        <ul>
                                            <li>
                                                <a href='/page-account'><i className="fi fi-rs-user mr-10"></i>My Account</a>
                                            </li>
                                            <li>
                                                <a href='/page-account'><i className="fi fi-rs-location-alt mr-10"></i>Order Tracking</a>
                                            </li>
                                            <li>
                                                <a href='/page-account'><i className="fi fi-rs-label mr-10"></i>My Voucher</a>
                                            </li>
                                            <li>
                                                <a href='/shop-wishlist'><i className="fi fi-rs-heart mr-10"></i>My Wishlist</a>
                                            </li>
                                            <li>
                                                <a href='/page-account'><i className="fi fi-rs-settings-sliders mr-10"></i>Setting</a>
                                            </li>
                                            <li>
                                                <a href='/page-login'><i className="fi fi-rs-sign-out mr-10"></i>Sign out</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom header-bottom-bg-color sticky-bar">
            <div className="container">
                <div className="header-wrap header-space-between position-relative">
                    <div className="logo logo-width-1 d-block lg:hidden">
                        <a href='/'><img src="assets/imgs/theme/logo.svg" alt="logo" /></a>
                    </div>
                    <div className="header-nav hidden lg:flex">.

                        <div className="main-menu main-menu-padding-1 main-menu-lh-2 hidden lg:block font-heading">
                            <nav>
                                <ul>
                                    <li className="hot-deals"><img src="assets/imgs/theme/icons/icon-hot.svg" alt="hot deals" /><a href='/shop-grid-right'>Deals</a></li>
                                    <li>
                                        <a className='active' href='/'>Home <i className="fi-rs-angle-down"></i></a>
                                        <ul className="sub-menu">
                                            <li><a href='/'>Home 1</a></li>
                                            <li><a href='/index-2'>Home 2</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href='/page-about'>About</a>
                                    </li>
                                    <li>
                                        <a href='/page-contact'>Contact</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="hidden lg:flex hotline">
                        <img src="assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                        <p>1900 - 888<span>24/7 Support Center</span></p>
                    </div>
                    <div className="block lg:hidden header-action-icon-2">
                        <div className="burger-icon burger-icon-white">
                            <span className="burger-icon-top"></span>
                            <span className="burger-icon-mid"></span>
                            <span className="burger-icon-bottom"></span>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <a href='/shop-wishlist' className="flex items-center">
                                    <img src="assets/imgs/theme/icons/icon-heart.svg" alt="Nest" className="w-6 h-6" />
                                    <span className="pro-count white">4</span>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="flex items-center">
                                    <img src="assets/imgs/theme/icons/icon-cart.svg" alt="Nest" className="w-6 h-6" />
                                    <span className="pro-count white">2</span>
                                </a>
                                <div className="cart-dropdown-wrap cart-dropdown-hm2">
                                    <ul>
                                        <li className="flex items-center">
                                            <a href='/shop-product-right'>
                                                <img src="assets/imgs/shop/thumbnail-3.jpg" alt="Nest" className="w-12 h-12" />
                                            </a>
                                            <div className="ml-2">
                                                <h4><a href='/shop-product-right'>Plain Striola Shirts</a></h4>
                                                <h3><span>1 × </span>$800.00</h3>
                                            </div>
                                            <div>
                                                <a href="#"><i className="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                        <li className="flex items-center">
                                            <a href='/shop-product-right'>
                                                <img src="assets/imgs/shop/thumbnail-4.jpg" alt="Nest" className="w-12 h-12" />
                                            </a>
                                            <div className="ml-2">
                                                <h4><a href='/shop-product-right'>Macbook Pro 2024</a></h4>
                                                <h3><span>1 × </span>$3500.00</h3>
                                            </div>
                                            <div>
                                                <a href="#"><i className="fi-rs-cross-small"></i></a>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h4>Total <span>$383.00</span></h4>
                                        </div>
                                        <div>
                                            <a href='/shop-cart' className="mr-2">View cart</a>
                                            <a href='/shop-checkout'>Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
    );
};