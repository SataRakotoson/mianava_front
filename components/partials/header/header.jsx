import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import ALink from '~/components/features/alink';
import LoginModal from '~/components/features/modals/login-modal';
import HeaderSearch from '~/components/partials/header/partials/header-search';
import WishlistMenu from '~/components/partials/header/partials/wishlist-menu';
import CartMenu from '~/components/partials/header/partials/cart-menu';
import MainMenu from '~/components/partials/header/partials/main-menu';
import StickyHeader from '~/components/features/sticky-header';

import { slide as Menu } from 'react-burger-menu'
import Link from 'next/link';

function Header () {
    const router = useRouter();
    const [ containerClass, setContainerClass ] = useState( 'container' );

    function openMobileMenu () {
        document.querySelector( 'body' ).classList.add( 'mmenu-active' );
    }

    useEffect( () => {
        setContainerClass( router.asPath.includes( 'fullwidth' ) ? 'container-fluid' : 'container' );
    }, [ router.asPath ] );

    const showSettings = (event) =>{
        event.preventDefault();
      }

    return (
            <header className="header header-6" >
                <div className="header-top">
                    <div className={ containerClass }>
                        <div className="header-left overflow-hidden mr-3 mr-sm-0">
                            <div className="welcome-msg d-flex flex-nowrap">
                                {/* <p>Ce site est en cours construction, la version finale sera disponible sur mianava.com</p> */}
                                {/* <ALink href="#">&nbsp;Voir plus ...</ALink> */}
                            </div>
                        </div>

                        <div className="header-right">
                            <ul className="top-menu">
                                <li>
                                    <ALink href="#">Links</ALink>
                                    <ul>
                                        <li>
                                            <div className="header-dropdown">
                                                <ALink href="#">MGA</ALink>
                                                <div className="header-menu">
                                                    <ul>
                                                        <li><ALink href="#">MGA</ALink></li>
                                                        <li><ALink href="#">€</ALink></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <LoginModal />
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <StickyHeader>
                    <div className="header-bottom sticky-header">
                        <div className={ containerClass }>
                            <div className="header-left">
                                <MainMenu />

                                <button className="mobile-menu-toggler" onClick={ openMobileMenu }>
                                    <span className="sr-only">Toggle mobile menu</span>
                                    <i className="icon-bars"></i>
                                </button>
                            </div>

                            <div className="header-center">
                            </div>

                            <div className="header-right overflow-hidden">
                                <i className="icon-medapps"></i>
                                <p className="font-weight-semibold">Clearance Up to 30% Off</p>
                            </div>
                        </div>
                    </div>
                </StickyHeader> */}

                <StickyHeader>
                    <div className="header-middle sticky-header">
                        <div className={ containerClass }>
                        
                            <div className="header-left d-flex">
                                <div className="mr-5">
                                    <Menu className='bg-dark'>
                                        <div>
                                            {/* <p className='text-white mb-1'>Hello, tu as un compte ?</p> */}
                                            <Link href='/login' className='btn btn-primary text-white'>S'identifier</Link>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <Link id="home" className="menu-item" href="/">Accueil</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link id="profile" className="menu-item" href="/profile">Mon compte</Link>
                                        <Link id="wishlist" className="menu-item" href="/shop/wishlist">My wishlist</Link>
                                        <div className="dropdown-divider"></div>
                                        <Link id="about" className="menu-item" href="/about">Qui sommes-nous</Link>
                                        <Link id="contact" className="menu-item--small" href="/">Aide et contact</Link>
                                    </Menu>
                                </div>
                                <HeaderSearch />
                            </div>

                            <div className="header-center">
                                <ALink href="/" className="logo">
                                    <img src="images/import/logo.webp" alt="Molla Logo" width={ 100 } height={ 20 } />
                                    {/* <h4>Mianava</h4> */}
                                </ALink>
                            </div>

                            <div className="header-right">
                                {/* <WishlistMenu /> */}
                                <CartMenu />
                            </div>
                        </div>
                    </div>
                </StickyHeader>
            </header>
    )
}

export default Header;