import { useQuery } from '@apollo/client';
import withApollo from '~/server/apollo';
import React from 'react'
import Reveal from 'react-awesome-reveal';
import NewCollection from '~/components/partials/home/new-collection';
import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data';
import ALink from '~/components/features/alink';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OutfitOfTheDay from '~/components/outfitOfTheDay/OutfitOfTheDay';

const SAM = () => {
  return (
    <div>
        <div
            className="video-banner-bg bg-image"
            // style={ { backgroundImage: "url('images/covers/sam.png')" } }
            style={ { backgroundImage: "url('images/import/sam.webp')" } }
        >
            <div className="container invisible">
                <h1 className="header-title text-high-pink">
                    Service Achat <br />
                    Mianava
                </h1>
                <p className='text-high-pink font-weight-bolder'>Vous choisissez, Nous achetons, Nous livrons</p>
                <p className='text-high-pink font-weight-bolder'>C'est aussi simple que ça</p>
            </div>
        </div>
        <div className="mt-10 mb-10">
            <div className="container">
                <h2 className="mb-4 text-center">
                    SERVICE ACHAT MIANAVA
                </h2>

                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-info-circle"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="">Choisis sur ton site préféré</h4>

                                <p>Navigue sur n'importe quel site  et sélectionne les produits que tu désires. Copie simplement le lien du produit.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-star-o"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="">Nous Prenons le Relais</h4>

                                <p>Soumets-nous le lien de ton produit. Notre équipe s'occupe de l'achat en respectant tes préférences.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-heart-o"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="">Livraison Directe à Ta Porte</h4>

                                <p>Une fois l'achat effectué, nous organisons une livraison rapide et sûre jusqu'à chez toi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-10">
            <div className="container">
                <h2 className='text-center mb-4'>Contactez nous</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="contact-box text-center">
                            <h3>Adresse</h3>
                            <address>Antananarivo, Madagascar</address>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-box text-center">
                            <h3>Commencez une conversation</h3>

                            <div><a href="mailto:#">contact@mianava.com</a></div>
                            {/* <div><a href="tel:#">+1 987-876-6543</a>, <a href="tel:#">+1 987-976-1234</a></div> */}
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="contact-box text-center">
                            <h3>Reseaux sociaux</h3>

                            <div className="social-icons social-icons-color justify-content-center">
                                <ALink href="https://www.facebook.com/Mianavaofficiel/" className="social-icon social-facebook" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                                <ALink href="https://www.instagram.com/_mianava_/" className="social-icon social-instagram" title="Instagram"><i className="icon-instagram"></i></ALink>
                                {/* <ALink href="#" className="social-icon social-pinterest" title="Pinterest"><i className="icon-pinterest"></i></ALink> */}
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mt-3 mb-5 mt-md-1" />
                <div className="touch-container row justify-content-center">
                    <div className="col-md-9 col-lg-7">
                        <div className="text-center">
                            <h2 className="title mb-4">Ou envoie nous le lien de ton produit</h2>
                        </div>

                        <form action="#" className="contact-form mb-2">

                            <label htmlFor="csubject" className="sr-only">Nom</label>
                            <input type="text" className="form-control" id="csubject" placeholder="Name" />

                            <label htmlFor="csubject" className="sr-only">Email</label>
                            <input type="text" className="form-control" id="csubject" placeholder="Email" />

                            <label htmlFor="cmessage" className="sr-only">Message</label>
                            <textarea className="form-control" cols="30" rows="4" id="cmessage" required placeholder="Lien du produit"></textarea>

                            <div className="text-center">
                                <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                    <span>ENVOYEZ</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( SAM );