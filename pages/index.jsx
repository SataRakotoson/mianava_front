import { useQuery } from "@apollo/client";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';
import TrendyCollection from '~/components/partials/home/trendy-collection';
import DealCollection from '~/components/partials/home/deal-collection';
import NewCollection from '~/components/partials/home/new-collection';
import BlogCollection from '~/components/partials/home/blog-collection';
import NewsletterModal from "~/components/features/modals/newsletter-modal";

import withApollo from '~/server/apollo';
import { GET_HOME_DATA } from '~/server/queries';
import { attrFilter } from '~/utils';


import { homeData, introSlider, brandSlider, fadeInUpShorter, fadeInLeftShorter, fadeInRightShorter, fadeIn } from '~/utils/data';

import ServiceImage from '../assets/images/service.jpeg'
import OutfitOfTheDay from "~/components/outfitOfTheDay/OutfitOfTheDay";
import Link from "next/link";
import VenteEphemere from "~/components/venteEphemere/VenteEphemere";
import CategoryTop from "~/components/features/category-top";

function Home () {
    // const { data, loading, error } = useQuery( GET_HOME_DATA );
    // const products = data && data.homeData.products;
    // const dealProducts = attrFilter( data && data.homeData.products, 'until' ).slice( 0, 2 );
    // const newProducts = data && data.homeData.products.slice( 0, 8 );
    // const posts = data && data.homeData.posts;

    // if ( error ) {
    //     return <div></div>
    // }

    return (
        <main className="main home-page skeleton-body">
            <div className="intro-slider-container position-relative">
                <div className="position-absolute d-flex justify-content-center w-100 category-container" style={{top: 20, zIndex: '50'}} >
                    <CategoryTop />
                </div>
                <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light" options={ introSlider }>
                    <div className="intro-slide" style={ { backgroundImage: 'url(images/import/hero_accueil.webp' } }>
                        {/*IMAGE ON COMPUTER */}
                        <LazyLoadImage
                            className="hero_image_cover"
                            alt="banner"
                            width={ 1500 }
                            height={ 250 }
                            src="images/import/texte_accueil.webp"
                            threshold={ 200 }
                            effect="opacity"
                        />
                        <div className="container intro-content text-left">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                {/*IMAGE ON MOBILE */}
                                {/* <LazyLoadImage
                                    className="mobile"
                                        alt="banner"
                                        width={ 800 }
                                        height={ 250 }
                                        src="images/import/texte_accueil.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    /> */}
                                <>
                                    {/* <h3 className="intro-subtitle text-white">You're Looking Good</h3>
                                    <h1 className="intro-title text-white">New Lookbook</h1>

                                    <ALink href="/shop/sidebar/list" className="btn btn-outline-white-4">
                                        <span>Voir les produits</span>
                                    </ALink> */}
                                </>
                            </Reveal>
                        </div>
                    </div>

                    {/* <div className="intro-slide" style={ { backgroundImage: 'url(images/home/cover2.png' } }>
                        <div className="container intro-content text-center">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 100 } duration={ 1000 }>
                                <>
                                    <h3 className="intro-subtitle text-white">Don’t Miss</h3>
                                    <h1 className="intro-title text-white">Mysrety Deals</h1>

                                    <ALink href="/shop/sidebar/list" className="btn btn-outline-white-4">
                                        <span>Discover More</span>
                                    </ALink>
                                </>
                            </Reveal>
                        </div>
                    </div> */}
                </OwlCarousel>
            </div>
            
            {/* SERVICES */}
            <div className="pt-10 pb-3">
                <div className="container">
                    <h2 className="text-center text mb-4">Nos Services</h2>
                    <div className="row justify-content-center">
                        {/* SHOP */}
                        <div className="col-md-6 col-lg-6">
                            <div className="banner banner-cat service-item">
                                <ALink href="#" className='image-link'>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 370 }
                                        height={ 250 }
                                        src="images/import/shop.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-overlay banner-content-overlay-custom text-center">
                                    <Link href="/shop" className="banner-link p-0">Plus d'info</Link>
                                </div>
                            </div>
                        </div>
                        {/* MATCHLI */}
                        <div className="col-md-6 col-lg-6">
                            <div className="banner banner-cat service-item">
                                <ALink href="#" className='image-link'>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 370 }
                                        height={ 250 }
                                        src="images/import/matchli.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-overlay banner-content-overlay-custom text-center">
                                    <Link href="/matchli" className="banner-link p-0">Plus d'info</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row justify-content-center">
                        {/* SAM */}
                        <div className="col-md-6 col-lg-6">
                            <div className="banner banner-cat service-item">
                                <ALink href="#" className='image-link'>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 370 }
                                        height={ 250 }
                                        src="images/import/sam.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-overlay banner-content-overlay-custom text-center">
                                    <Link href="/sam" className="banner-link p-0">Plus d'info</Link>
                                </div>
                            </div>
                        </div>
                        {/* VENTE EPHEMERE */}
                        <div className="col-md-6 col-lg-6">
                            <div className="banner banner-cat service-item">
                                <ALink href="#" className='image-link'>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 370 }
                                        height={ 250 }
                                        src="images/import/ephemere.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-overlay service-item-overlay banner-content-overlay-custom text-center">
                                    <Link href="/ephemere" className="banner-link p-0">Plus d'info</Link>
                                </div>
                            </div>
                        </div>
                        {/* MIANAVA EXPRESS */}
                        {/* <div className="col-md-6 col-lg-4">
                            <div className="banner banner-cat service-item">
                                <ALink href="#" className='image-link'>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 370 }
                                        height={ 250 }
                                        src="images/services/express.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-overlay banner-content-overlay-custom text-center">
                                    <Link href="/express" className="banner-link p-0">Plus d'info</Link>
                                </div>
                            </div>
                        </div> */}

                        {/* PARTNER */}
                        {/* <div className="col-md-6 col-lg-4">
                            <div className="banner banner-cat service-item">
                                <ALink href="#" className='image-link'>
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 370 }
                                        height={ 250 }
                                        src="images/services/partner.png"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-overlay banner-content-overlay-custom text-center">
                                    <Link href="/partner" className="banner-link p-0">Plus d'info</Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <hr className="mt-5 mb-0" />
                </div>
            </div>
            <div className="pt-10 pb-3">
                <div className="container">
                    <h2 className="text-center mb-4">Outfits du jours</h2>
                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-3">
                            <div className="banner banner-cat banner-link-anim banner-large outfit-item">
                                <ALink href="#">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 270 }
                                        height={ 549 }
                                        src="images/import/outfit_vertical_1.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />

                                </ALink>

                                <div className="banner-content banner-content-bottom">
                                    <h3 className="banner-title text-high-pink">Haut</h3>

                                    <h4 className="banner-subtitle">8 Products</h4>

                                    <ALink href="#" className="banner-link p-0">Shop Now</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-3 order-lg-last">
                            <div className="banner banner-cat banner-link-anim banner-large outfit-item">
                                <ALink href="#">
                                    <div className="lazy-overlay"></div>

                                    <LazyLoadImage
                                        alt="banner"
                                        width={ 270 }
                                        height={ 549 }
                                        src="images/import/outfit_vertical_2.webp"
                                        threshold={ 200 }
                                        effect="opacity"
                                    />
                                </ALink>

                                <div className="banner-content banner-content-top">
                                    <h3 className="banner-title text-high-pink">Pantalon et bas</h3>

                                    <h4 className="banner-subtitle">15 Produits</h4>

                                    <ALink href="#" className="banner-link p-0">Voir plus</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12">
                                    <div className="banner banner-cat banner-link-anim outfit-item" >
                                        <ALink href="#">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="banner"
                                                width={ 750 }
                                                height={ 270 }
                                                src="images/import/outfit_horizontal_1.webp"
                                                threshold={ 200 }
                                                effect="opacity"
                                            />
                                        </ALink>

                                        <div className="banner-content">
                                            <h3 className="banner-title text-high-pink">Accessoires</h3>

                                            <h4 className="banner-subtitle">18 Produits</h4>

                                            <ALink
                                                href="#"
                                                className="banner-link p-0"
                                            >Shop Now</ALink>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-12">
                                    <div className="banner banner-cat banner-link-anim outfit-item">
                                        <ALink href="#">
                                            <div className="lazy-overlay"></div>

                                            <LazyLoadImage
                                                alt="banner"
                                                width={ 750 }
                                                height={ 270 }
                                                src="images/import/outfit_horizontal_2.webp"
                                                threshold={ 200 }
                                                effect="opacity"
                                            />
                                        </ALink>

                                        <div className="banner-content">
                                            <h3 className="banner-title text-high-pink">Chaussures et Bottes</h3>

                                            <h4 className="banner-subtitle">12 Produits</h4>

                                            <ALink
                                                href=""
                                                className="banner-link p-0"
                                            >Voir Plus</ALink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5 pb-3 mt-10" style={ { backgroundColor: '#222' } }>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <div className="icon-box text-center">
                                    <span className="icon-box-icon">
                                        <i className="icon-truck"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Paiement et livraison</h3>
                                        <p className="text-white">Vos achats arrivent directement chez vous</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <div className="icon-box text-center">
                                    <span className="icon-box-icon">
                                        <i className="icon-rotate-left"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Return & Refund</h3>
                                        <p className="text-white">Free 100% money back guarantee</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div> */}

                        <div className="col-lg-3 col-sm-6">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <div className="icon-box text-center">
                                    <span className="icon-box-icon">
                                        <i className="icon-unlock"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Paiement sécurisé</h3>
                                        <p className="text-white">Paiement 100% sécurisé</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <div className="icon-box text-center">
                                    <span className="icon-box-icon">
                                        <i className="icon-headphones"></i>
                                    </span>
                                    <div className="icon-box-content">
                                        <h3 className="icon-box-title">Assistance de qualité</h3>
                                        <p className="text-white">Toujours disponible 24h/24 et 7j/7</p>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="text-center mt-1">
                        <a href='#' className="banner-link text-high-pink">
                            Plus d'info
                        </a>
                    </div>
                </div>
            </div>
            
            {/* GROUPAGE AERIEN */}
            <div className="container mt-10">
                <div className="row">
                    <div className="col-12">
                        <div className="banner banner-big rounded groupage">
                            <ALink href="#">
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="banner"
                                    height={ 470 }
                                    width={ 300 }
                                    src="images/import/groupage.webp"
                                    threshold={ 200 }
                                    effect="black-and-white"
                                />
                            </ALink>

                            <div className="banner-content">
                                {/* <h4 className="banner-subtitle text-primary"></h4> */}
                                <h3 className="banner-title text-high-pink">Groupage <br />aerien.</h3>
                                <p className="d-none d-lg-block">Regroupez vos colis, Envoyez les nous. Nous nous occupons du reste</p>

                                <ALink href="/express" className="btn btn-primary btn-rounded"><span>Plus d'info</span><i className="icon-long-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-6"></div>
            <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                <NewCollection />
            </Reveal>

            <div className="pb-3">
                <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                    <div className="container brands pt-5 pt-lg-7">
                        <h2 className="text-center mb-4">Nos partenaires</h2>
                        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 500 } triggerOnce>
                            <OwlCarousel adClass="brands-border owl-simple brand-carousel mt-3 mb-3 cols-xl-7 cols-lg-5 cols-md-4 cols-sm-3 cols-2" options={ brandSlider }>
                                {
                                    homeData.brands.map( ( brand, index ) => (
                                        <ALink href="#" className="brand mr-0" key={ index } >
                                            <img src={ brand.image } alt="brand" width={ brand.width } height={ brand.height } />
                                        </ALink>
                                    ) )
                                }
                            </OwlCarousel>
                        </Reveal>
                    </div>
                </Reveal>

                <div className="mb-5 mb-lg-7"></div>

            </div>

            <div className="container mb-10">
                    <h2 className="text-center mb-3">About us</h2>

                        <blockquote className="testimonial text-center">
                            <img src="images/testimonials/user-1.jpg" alt="user" />
                            <p style={{fontSize: 20}}>“ Mianava est bien plus qu'une entreprise de vente en ligne et de groupage aérien. Nous sommes une communauté qui prône les valeurs d'amour et de partage. Nous croyons que chaque petit geste de générosité peut faire une grande différence dans le monde. C'est pourquoi nous sommes déterminés à offrir des services qui non seulement répondent à vos besoins, mais qui encouragent également la solidarité et l'empathie. Bienvenue chez Mianava, où le partage et l'amour sont au cœur de tout ce que nous faisons. ”</p>

                            <cite>
                                Mianava
                            </cite>
                        </blockquote>
                </div>
        </main>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Home );