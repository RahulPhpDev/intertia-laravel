import MainLayout from "@/Layouts/JourneyLayout/MainLayout";

export default function LandingPage() {
    return (
        <MainLayout>
         <main className="main">
            <section className="home-slider relative mb-30">
                <div className="container">
                    <div className="home-slide-cover mt-30">
                        <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                            <div className="single-hero-slider single-animation-wrap" style={{backgroundImage: "url(storage/imgs/slider-1.png)"}}>
                                <div className="slider-content">
                                    <h1 className="text-4xl mb-10">
                                        Don’t miss amazing<br />
                                        grocery deals
                                    </h1>
                                    <p className="mb-16">Sign up for the daily newsletter</p>
                                    <form className="flex">
                                        <input type="email" placeholder="Your email address" className="p-2 border border-gray-300 rounded-l" />
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" type="submit">Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        
                        </div>
                        <div className="slider-arrow hero-slider-1-arrow"></div>
                    </div>
                </div>
            </section>
        

            <section className="banners mb-25">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0">
                                <img src="storage/imgs/banner/banner-1.png" alt="" />
                                <div className="banner-text">
                                    <h4>
                                        Everyday Fresh & <br />Clean with Our<br />
                                        Products
                                    </h4>
                                    <a href="/shop-grid-right" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                                <img src="storage/imgs/banner/banner-2.png" alt="" />
                                <div className="banner-text">
                                    <h4>
                                        Make your Breakfast<br />
                                        Healthy and Easy
                                    </h4>
                                    <a href="/shop-grid-right" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:block lg:block col-span-1">
                            <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                                <img src="storage/imgs/banner/banner-3.png" alt="" />
                                <div className="banner-text">
                                    <h4>The best Organic <br />Products Online</h4>
                                    <a href="/shop-grid-right" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="product-tabs section-padding relative">
                <div className="container">
                    <div className="section-title style-2 wow animate__animated animate__fadeIn">
                        <h3>Popular Products</h3>
                        <ul className="nav nav-tabs flex flex-wrap pl-0 links" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="nav-tab-one" data-toggle="tab" data-target="#tab-one" type="button" role="tab" aria-controls="tab-one" aria-selected="true">All</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-two" data-toggle="tab" data-target="#tab-two" type="button" role="tab" aria-controls="tab-two" aria-selected="false">Milks & Dairies</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="nav-tab-three" data-toggle="tab" data-target="#tab-three" type="button" role="tab" aria-controls="tab-three" aria-selected="false">Coffes & Teas</button>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
                            <div className="row flex flex-wrap ">
                                <div className="w-1/5">
                                    <div className="product-cart-wrap mb-30 animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href='/shop-product-right'>
                                                    <img className="default-img" src="storage/imgs/product-6-1.jpg" alt="" />
                                                    <img className="hover-img" src="storage/imgs/product-6-2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label='Add To Wishlist' className='action-btn' href='/shop-wishlist'><i className="fi-rs-heart"></i></a>
                                                <a aria-label='Compare' className='action-btn' href='/shop-compare'><i className="fi-rs-shuffle"></i></a>
                                                <a aria-label="Quick view" className="action-btn" data-toggle="modal" data-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Hot</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href='/shop-grid-right'>Snack</a>
                                            </div>
                                            <h2><a href='/shop-product-right'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate inline-block">
                                                    {/* <div className="product-rating" style="width: 90%"></div> */}
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a href='/vendor-details-1'>NestFood</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>$28.85</span>
                                                    <span className="old-price">$32.8</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className='add' href='/shop-cart'><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                
                                <div className="w-1/5">
                                    <div className="product-cart-wrap mb-30 animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href='/shop-product-right'>
                                                    <img className="default-img" src="storage/imgs/product-6-1.jpg" alt="" />
                                                    <img className="hover-img" src="storage/imgs/product-6-2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label='Add To Wishlist' className='action-btn' href='/shop-wishlist'><i className="fi-rs-heart"></i></a>
                                                <a aria-label='Compare' className='action-btn' href='/shop-compare'><i className="fi-rs-shuffle"></i></a>
                                                <a aria-label="Quick view" className="action-btn" data-toggle="modal" data-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Hot</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href='/shop-grid-right'>Snack</a>
                                            </div>
                                            <h2><a href='/shop-product-right'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate inline-block">
                                                    {/* <div className="product-rating" style="width: 90%"></div> */}
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a href='/vendor-details-1'>NestFood</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>$28.85</span>
                                                    <span className="old-price">$32.8</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className='add' href='/shop-cart'><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="w-1/5">
                                    <div className="product-cart-wrap mb-30 animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        <div className="product-img-action-wrap">
                                            <div className="product-img product-img-zoom">
                                                <a href='/shop-product-right'>
                                                    <img className="default-img" src="storage/imgs/product-6-1.jpg" alt="" />
                                                    <img className="hover-img" src="storage/imgs/product-6-2.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="product-action-1">
                                                <a aria-label='Add To Wishlist' className='action-btn' href='/shop-wishlist'><i className="fi-rs-heart"></i></a>
                                                <a aria-label='Compare' className='action-btn' href='/shop-compare'><i className="fi-rs-shuffle"></i></a>
                                                <a aria-label="Quick view" className="action-btn" data-toggle="modal" data-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                            </div>
                                            <div className="product-badges product-badges-position product-badges-mrg">
                                                <span className="hot">Hot</span>
                                            </div>
                                        </div>
                                        <div className="product-content-wrap">
                                            <div className="product-category">
                                                <a href='/shop-grid-right'>Snack</a>
                                            </div>
                                            <h2><a href='/shop-product-right'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h2>
                                            <div className="product-rate-cover">
                                                <div className="product-rate inline-block">
                                                    {/* <div className="product-rating" style="width: 90%"></div> */}
                                                </div>
                                                <span className="font-small ml-5 text-muted"> (4.0)</span>
                                            </div>
                                            <div>
                                                <span className="font-small text-muted">By <a href='/vendor-details-1'>NestFood</a></span>
                                            </div>
                                            <div className="product-card-bottom">
                                                <div className="product-price">
                                                    <span>$28.85</span>
                                                    <span className="old-price">$32.8</span>
                                                </div>
                                                <div className="add-cart">
                                                    <a className='add' href='/shop-cart'><i className="fi-rs-shopping-cart mr-5"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>
                        
                        <div className="tab-pane hidden" id="tab-two" role="tabpanel" aria-labelledby="tab-two">
                            <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-5 md:col-span-4 sm:col-span-6">
                                    <div className="bg-white shadow-lg p-4 mb-4">
                                        <div className="relative">
                                            <a href='/shop-product-right'>
                                                <img className="w-full" src="storage/imgs/product-16-1.jpg" alt="" />
                                                <img className="hover-img" src="storage/imgs/product-16-2.jpg" alt="" />
                                            </a>
                                            <div className="absolute top-2 right-2">
                                                <a aria-label='Add To Wishlist' className='action-btn' href='/shop-wishlist'><i className="fi-rs-heart"></i></a>
                                                <a aria-label='Compare' className='action-btn' href='/shop-compare'><i className="fi-rs-shuffle"></i></a>
                                                <a aria-label="Quick view" className="action-btn" data-toggle="modal" data-target="#quickViewModal"><i className="fi-rs-eye"></i></a>
                                            </div>
                                            <div className="absolute top-2 left-2">
                                                <span className="bg-red-500 text-white px-2 py-1 rounded">Hot</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <a href='/shop-grid-right'>Snack</a>
                                            <h2><a href='/shop-product-right'>Seeds of Change Organic Quinoa, Brown, & Red Rice</a></h2>
                                            <div className="flex items-center mt-2">
                                                <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                                                    <div className="w-3/4 h-full bg-green-500"></div>
                                                </div>
                                                <span className="text-sm ml-2 text-gray-500">(4.0)</span>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-sm text-gray-500">By <a href='/vendor-details-1'>NestFood</a></span>
                                            </div>
                                            <div className="flex justify-between items-center mt-4">
                                                <div>
                                                    <span>$28.85</span>
                                                    <span className="text-gray-500 line-through">$32.8</span>
                                                </div>
                                                <div>
                                                    <a className='add' href='/shop-cart'><i className="fi-rs-shopping-cart mr-2"></i>Add </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
          </main>
        </MainLayout>
    )

}