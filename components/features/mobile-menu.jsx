import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import SlideToggle from 'react-slide-toggle';

import ALink from '~/components/features/alink';

function MobileMenu () {
    const router = useRouter();
    const [ searchTerm, setSearchTerm ] = useState( "" );

    useEffect( () => {
        router.events.on( 'routeChangeComplete', hideMobileMenu );
    }, [] )

    function hideMobileMenu () {
        document.querySelector( 'body' ).classList.remove( 'mmenu-active' );
    }

    function onSearchChange ( e ) {
        setSearchTerm( e.target.value );
    }

    function onSubmitSearchForm ( e ) {
        e.preventDefault();
        router.push( {
            pathname: '/shop/sidebar/list',
            query: {
                searchTerm: searchTerm,
                category: ""
            }
        } );
    }

    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close" onClick={ hideMobileMenu }><i className="icon-close"></i></span>

                <form action="#" method="get" onSubmit={ onSubmitSearchForm } className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="text" className="form-control" value={ searchTerm } onChange={ onSearchChange } name="mobile-search" id="mobile-search" placeholder="Rechercher ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>

                <nav className="mobile-nav">
                    <ul className="mobile-menu">
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <ALink href="/">
                                        Home
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </ALink>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><a href="https://d-themes.com/react/molla/demo-1/" target="_blank">01 - furniture store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-2/" target="_blank">02 - furniture store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-3/" target="_blank">03 - electronic store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-4/" target="_blank">04 - electronic store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-5/" target="_blank">05 - fashion store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-6/" target="_blank">06 - fashion store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-7/" target="_blank">07 - fashion store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-8/" target="_blank">08 - fashion store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-9/" target="_blank">09 - fashion store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-10/" target="_blank">10 - shoes store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-11/" target="_blank">11 - furniture simple store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-12/" target="_blank">12 - fashion simple store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-13/" target="_blank">13 - market</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-14/" target="_blank">14 - market fullwidth</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-15/" target="_blank">15 - lookbook 1</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-16/" target="_blank">16 - lookbook 2</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-17/" target="_blank">17 - fashion store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-18/" target="_blank">18 - fashion store (with sidebar)</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-19/" target="_blank">19 - games store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-20/" target="_blank">20 - book store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-21/" target="_blank">21 - sport store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-22/" target="_blank">22 - tools store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-23/" target="_blank">23 - fashion left navigation store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-24/" target="_blank">24 - extreme sport store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-25/" target="_blank">25 - jewelry store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-26/" target="_blank">26 - market store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-27/" target="_blank">27 - fashion store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-28/" target="_blank">28 - food market store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-29/" target="_blank">29 - t-shirts store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-30/" target="_blank">30 - headphones store</a></li>
                                        <li><a href="https://d-themes.com/react/molla/demo-31/" target="_blank">31 - yoga store</a></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <ALink href="/shop/sidebar/list">
                                        Shop
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </ALink>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><ALink href="/shop/sidebar/list">Shop List</ALink></li>
                                        <li><ALink href="/shop/sidebar/2cols">Shop Grid 2 Columns</ALink></li>
                                        <li><ALink href="/shop/sidebar/3cols">Shop Grid 3 Columns</ALink></li>
                                        <li><ALink href="/shop/sidebar/4cols">Shop Grid 4 Columns</ALink></li>
                                        <li><ALink href="/shop/market"><span>Shop Market<span className="tip tip-new">New</span></span></ALink></li>
                                        <li><ALink href="/shop/nosidebar/boxed"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></ALink></li>
                                        <li><ALink href="/shop/nosidebar/fullwidth">Shop Fullwidth No Sidebar</ALink></li>
                                        <li><ALink href="/shop/category/boxed">Product Category Boxed</ALink></li>
                                        <li><ALink href="/shop/category/fullwidth"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></ALink></li>
                                        <li><ALink href="/shop/cart">Cart</ALink></li>
                                        <li><ALink href="/shop/checkout">Checkout</ALink></li>
                                        <li><ALink href="/shop/wishlist">Wishlist</ALink></li>
                                        <li><ALink href="/shop/dashboard">My Account</ALink></li>
                                        <li><ALink href="#">Lookbook</ALink></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <ALink href="/product/default/dark-yellow-lace-cut-out-swing-dress" className="sf-with-ul">
                                        Product
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </ALink>
                                    <ul ref={ setCollapsibleElement }>
                                        <li><ALink href="/product/default/dark-yellow-lace-cut-out-swing-dress">Default</ALink></li>
                                        <li><ALink href="/product/centered/beige-ring-handle-circle-cross-body-bag">Centered</ALink></li>
                                        <li><ALink href="/product/extended/yellow-tie-strap-block-heel-sandals"><span>Extended Info<span className="tip tip-new">New</span></span></ALink></li>
                                        <li><ALink href="/product/gallery/beige-metal-hoop-tote-bag">Gallery</ALink></li>
                                        <li><ALink href="/product/sticky/brown-faux-fur-longline-coat">Sticky Info</ALink></li>
                                        <li><ALink href="/product/sidebar/beige-v-neck-button-cardigan">Boxed With Sidebar</ALink></li>
                                        <li><ALink href="/product/fullwidth/black-faux-leather-chain-trim-sandals">Full Width</ALink></li>
                                        <li><ALink href="/product/masonry/black-denim-dungaree-dress">Masonry Sticky Info</ALink></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <ALink href="#">
                                        Pages
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </ALink>
                                    <ul ref={ setCollapsibleElement }>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <ALink href="/pages/about" className="sf-with-ul">About <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></ALink>

                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><ALink href="/pages/about">About 01</ALink></li>
                                                        <li><ALink href="/pages/about-2">About 02</ALink></li>
                                                    </ul>
                                                </li>

                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <ALink href="/pages/contact" className="sf-with-ul">Contact <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></ALink>

                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><ALink href="/pages/contact">Contact 01</ALink></li>
                                                        <li><ALink href="/pages/contact-2">Contact 02</ALink></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <li><ALink href="/pages/login">Login</ALink></li>
                                        <li><ALink href="/pages/faq">FAQs</ALink></li>
                                        <li><ALink href="/pages/404">Error 404</ALink></li>
                                        <li><ALink href="/pages/coming-soon">Coming Soon</ALink></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <ALink href="/blog/classic">
                                        Blog
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </ALink>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><ALink href="/blog/classic">Classic</ALink></li>
                                        <li><ALink href="/blog/listing" >Listing</ALink></li>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <ALink href="#" className="sf-with-ul">Grid <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></ALink>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><ALink href="/blog/grid/2cols">Grid 2 columns</ALink></li>
                                                        <li><ALink href="/blog/grid/3cols">Grid 3 columns</ALink></li>
                                                        <li><ALink href="/blog/grid/4cols">Grid 4 columns</ALink></li>
                                                        <li><ALink href="/blog/grid/sidebar">Grid sidebar</ALink></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <ALink href="#" className="sf-with-ul">Masonry <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></ALink>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><ALink href="/blog/masonry/2cols">Masonry 2 columns</ALink></li>
                                                        <li><ALink href="/blog/masonry/3cols">Masonry 3 columns</ALink></li>
                                                        <li><ALink href="/blog/masonry/4cols">Masonry 4 columns</ALink></li>
                                                        <li><ALink href="/blog/masonry/sidebar">Masonry sidebar</ALink></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <ALink href="#" className="sf-with-ul">Mask <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></ALink>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><ALink href="/blog/mask/grid">Blog Mask Grid</ALink></li>
                                                        <li><ALink href="/blog/mask/masonry">Blog Mask Masonry</ALink></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                        <SlideToggle collapsed={ true }>
                                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                                    <ALink href="/blog/single/default/cras-ornare-tristique-elit." className="sf-with-ul">Single Post <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span></ALink>
                                                    <ul ref={ setCollapsibleElement }>
                                                        <li><ALink href="/blog/single/default/cras-ornare-tristique-elit.">Default with sidebar</ALink></li>
                                                        <li><ALink href="/blog/single/fullwidth/fusce-pellentesque-suscipit.">Fullwidth no sidebar</ALink></li>
                                                        <li><ALink href="/blog/single/sidebar/utaliquam-sollicitzdvudin-leo">Fullwidth with sidebar</ALink></li>
                                                    </ul>
                                                </li>
                                            ) }
                                        </SlideToggle>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                        <SlideToggle collapsed={ true }>
                            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                                <li className={ toggleState.toLowerCase() == 'expanded' ? 'open' : '' }>
                                    <ALink href="/elements" className="sf-with-ul">
                                        Elements
                                                    <span className="mmenu-btn" onClick={ ( e ) => { onToggle( e ); e.preventDefault() } }></span>
                                    </ALink>

                                    <ul ref={ setCollapsibleElement }>
                                        <li><ALink href="/elements/products">Products</ALink></li>
                                        <li><ALink href="/elements/typography">Typography</ALink></li>
                                        <li><ALink href="/elements/titles">Titles</ALink></li>
                                        <li><ALink href="/elements/banners">Banners</ALink></li>
                                        <li><ALink href="/elements/categories">Product Category</ALink></li>
                                        <li><ALink href="/elements/video-banners">Video Banners</ALink></li>
                                        <li><ALink href="/elements/buttons">Buttons</ALink></li>
                                        <li><ALink href="/elements/accordions">Accordions</ALink></li>
                                        <li><ALink href="/elements/tabs">Tabs</ALink></li>
                                        <li><ALink href="/elements/testimonials">Testimonials</ALink></li>
                                        <li><ALink href="/elements/blog-posts">Blog Posts</ALink></li>
                                        <li><ALink href="/elements/cta">Call to Action</ALink></li>
                                        <li><ALink href="/elements/icon-boxes">Icon Boxes</ALink></li>
                                    </ul>
                                </li>
                            ) }
                        </SlideToggle>
                    </ul>
                </nav>

                <div className="social-icons">
                    <ALink href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                    <ALink href="#" className="social-icon" title="Twitter"><i className="icon-twitter"></i></ALink>
                    <ALink href="#" className="social-icon" title="Instagram"><i className="icon-instagram"></i></ALink>
                    <ALink href="#" className="social-icon" title="Youtube"><i className="icon-youtube"></i></ALink>
                </div>
            </div>
        </div>
    )
}

export default React.memo( MobileMenu );