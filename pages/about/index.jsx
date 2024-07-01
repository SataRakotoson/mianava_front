import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';
import OwlCarousel from '~/components/features/owl-carousel';

import { homeData, mainSlider5, mainSlider9 } from '~/utils/data';

function About () {
    return (
        <div className="main">
            <div
                className="video-banner-bg bg-image"
                style={ { backgroundImage: "url('images/import/colombe5.webp')" } }
            >
                <div className="container">
                    <h1 className="header-title text-white">
                        A Propos <br />
                        De Nous
                    </h1>
                </div>
            </div>

            <div className="page-content pb-0 mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-3 mb-lg-0">
                            <h2 className="title">Notre Vision</h2>
                            <p>Chez Mianava, notre vision est de devenir une référence incontournable pour le shopping féminin en ligne. Nous aspirons à créer un espace où chaque femme trouve son expression unique à travers nos collections soigneusement choisies. Nous croyons en l'importance de l'accessibilité, de la qualité et de la diversité pour enrichir l'expérience de chaque cliente. Engagés dans l'innovation et l'écoute, nous adaptons constamment notre offre pour répondre aux évolutions des tendances et des désirs féminins.</p>
                        </div>

                        <div className="col-lg-6">
                            <h2 className="title">Notre Mission</h2>
                            <p>Chez Mianava, notre mission est d'offrir une expérience d'achat sur mesure pour chaque femme, en valorisant la diversité et l'unicité. Nous sélectionnons avec soin nos produits pour garantir qualité et pertinence, en harmonie avec les tendances actuelles et les attentes de nos clientes. Engagés pour l'empowerment féminin, nous cherchons à inspirer confiance et élégance à travers chaque pièce proposée, en cultivant un espace où chaque femme peut trouver son style et exprimer sa personnalité. </p>
                        </div>
                    </div>

                    <div className="mb-5"></div>
                </div>

                <div className="pt-6 pb-5 mb-6 mb-lg-8" style={{backgroundColor: '#222'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-3 mb-lg-0">
                                <h2 className="title text-white">Qui sommes-nous?</h2>
                                <p className="lead text-primary mb-3">Chez Mianava, nous réinventons l'expérience shopping pour les femmes avec passion et élégance.</p>
                                <p className="mb-2 text-white">Rencontrez l'équipe de Mianava : une synergie de créativité et d'expertise au service de l'élégance féminine.</p>
{/* 
                                <ALink href="/blog/classic" className="btn btn-sm btn-minwidth btn-outline-primary-2">
                                    <span>VIEW OUR NEWS</span>
                                    <i className="icon-long-arrow-right"></i>
                                </ALink> */}
                                
                                <div className="wishlist-share">
                                <div className="social-icons social-icons-sm mb-2">
                                    <ALink
                                        href="https://www.facebook.com/Mianavaofficiel/"
                                        target="_blank"
                                        className="social-icon"
                                        title="Facebook"
                                    >
                                        <i className="icon-facebook-f"></i>
                                    </ALink>
                                    <ALink
                                        href="https://www.instagram.com/_mianava_/"
                                        target="_blank"
                                        className="social-icon"
                                        title="Instagram"
                                    >
                                        <i className="icon-instagram"></i>
                                    </ALink>
                                </div>
                            </div>
                            </div>

                            <div className="col-lg-6 offset-lg-1">
                                <div className="about-images">
                                    <img src="images/import/colombe7.webp" alt="" className="about-img-front" />
                                    {/* <img src="images/import/colombe7.webp" alt="" className="about-img-back" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="brands-text">
                                <h2 className="title">Nos partenaires</h2>
                                <p>
                                Chez Mianava, nous collaborons avec des partenaires soigneusement sélectionnés qui partagent notre vision et notre engagement envers l'excellence. Nos partenaires incluent des créateurs de mode, des artisans locaux et des fournisseurs internationaux, tous unis pour enrichir votre expérience shopping avec authenticité et innovation. Ensemble, nous œuvrons pour vous offrir des produits uniques et de haute qualité, respectueux des tendances et des valeurs que nous chérissons.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="brands-display">
                                <div className="row justify-content-center">
                                    { homeData.brands.map( ( brand, index ) =>
                                        <div className="col-6 col-sm-4" key={ index }>
                                            <ALink href="#" className="brand">
                                                <img src={ brand.image } alt="Brand Name" width={ brand.width } height={ brand.height } />
                                            </ALink>
                                        </div>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-4 mb-6" />

                    {/* NOTRE EQUIPE */}

                    {/* <h2 className="title text-center mb-4">Notre equipe</h2>

                    <OwlCarousel adClass="owl-simple" options={ mainSlider9 }>
                        <div className="member member-anim text-center">
                            <figure className="member-media">
                                <div className="lazy-overlay"></div>
                                <LazyLoadImage
                                    alt="member"
                                    src="images/team/member-1.jpg"
                                    threshold={ 500 }
                                    effect="opacity"
                                    height={ 500 }
                                    width={ 376 }
                                />

                                <figcaption className="member-overlay">
                                    <div className="member-overlay-content">
                                        <h3 className="member-title">Samanta Grey<span>Founder & CEO</span></h3>
                                        <p>Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                        <div className="social-icons social-icons-simple">
                                            <ALink href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                                            <ALink href="#" className="social-icon" title="Twitter"><i className="icon-twitter"></i></ALink>
                                            <ALink href="#" className="social-icon" title="Instagram"><i className="icon-instagram"></i></ALink>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>

                            <div className="member-content">
                                <h3 className="member-title">
                                    Samanta Grey
                                    <span>Founder & CEO</span>
                                </h3>
                            </div>
                        </div>

                        <div className="member member-anim text-center">
                            <figure className="member-media">
                                <div className="lazy-overlay"></div>
                                <LazyLoadImage
                                    alt="member"
                                    src="images/team/member-2.jpg"
                                    threshold={ 500 }
                                    effect="opacity"
                                    height={ 500 }
                                    width={ 376 }
                                />

                                <figcaption className="member-overlay">
                                    <div className="member-overlay-content">
                                        <h3 className="member-title">Bruce Sutton<span>Sales & Marketing Manager</span></h3>
                                        <p>Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                        <div className="social-icons social-icons-simple">
                                            <ALink href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                                            <ALink href="#" className="social-icon" title="Twitter"><i className="icon-twitter"></i></ALink>
                                            <ALink href="#" className="social-icon" title="Instagram"><i className="icon-instagram"></i></ALink>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>

                            <div className="member-content">
                                <h3 className="member-title">
                                    Bruce Sutton
                                    <span>Sales & Marketing Manager</span>
                                </h3>
                            </div>
                        </div>

                        <div className="member member-anim text-center">
                            <figure className="member-media">
                                <div className="lazy-overlay"></div>
                                <LazyLoadImage
                                    alt="member"
                                    src="images/team/member-3.jpg"
                                    threshold={ 500 }
                                    effect="opacity"
                                    height={ 500 }
                                    width={ 376 }
                                />

                                <figcaption className="member-overlay">
                                    <div className="member-overlay-content">
                                        <h3 className="member-title">Janet Joy<span>Product Manager</span></h3>
                                        <p>Sed pretium, ligula sollicitudin viverra, tortor libero sodales leo, eget blandit nunc.</p>
                                        <div className="social-icons social-icons-simple">
                                            <ALink href="#" className="social-icon" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                                            <ALink href="#" className="social-icon" title="Twitter"><i className="icon-twitter"></i></ALink>
                                            <ALink href="#" className="social-icon" title="Instagram"><i className="icon-instagram"></i></ALink>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>

                            <div className="member-content">
                                <h3 className="member-title">
                                    Janet Joy
                                    <span>Product Manager</span>
                                </h3>
                            </div>
                        </div>
                    </OwlCarousel> */}


                </div>

                <div className="mb-2"></div>

                <div className="about-testimonials mb-10 pt-6 pb-6 position-relative" style={ { marginBottom: '-1px' } }>
                    <div className="container">
                        <h2 className="title text-center mb-3">Avis Client</h2>

                        <OwlCarousel adClass="owl-simple owl-testimonials-photo" options={ mainSlider5 } >
                            <blockquote className="testimonial text-center">
                                <img src="images/testimonials/user-1.jpg" alt="user" />
                                <p>“ Je recommande vivement Mianava à toutes celles qui cherchent à exprimer leur individualité à travers leur garde-robe. Les produits sont de grande qualité et les descriptions très précises. Recevoir ma commande est toujours un moment de plaisir pur. ”</p>
                                <cite>
                                    Mirana D.
                                    <span>Cliente</span>
                                </cite>
                            </blockquote>

                            <blockquote className="testimonial text-center">
                                <img src="images/testimonials/user-2.jpg" alt="user" />
                                <p>“ Mianava a totalement transformé ma façon de faire du shopping en ligne ! Le choix est incroyable et chaque article semble choisi spécialement pour moi. Je suis fan de leurs collections exclusives qui allient style et confort. Un grand merci pour leur service client exceptionnel ! ”</p>

                                <cite>
                                   Lima J.
                                    <span>Cliente</span>
                                </cite>
                            </blockquote>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;