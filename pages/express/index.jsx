import { useQuery } from '@apollo/client';
import withApollo from '~/server/apollo';
import React from 'react'
import Reveal from 'react-awesome-reveal';
import NewCollection from '~/components/partials/home/new-collection';
import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data';
import ALink from '~/components/features/alink';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OutfitOfTheDay from '~/components/outfitOfTheDay/OutfitOfTheDay';

const Express = () => {
  return (
    <div>
        <div
            className="video-banner-bg bg-image"
            style={ { backgroundImage: "url('images/covers/proex.png')", height: '800px' } }
        >
            {/* <div className="container">
                <h1 className="header-title text-high-pink">
                    ProEx
                </h1>
            </div> */}
        </div>
        <div className="mt-10 mb-10">
            <div className='container text-center'>
                <h1 className='text-high-pink'>Europe - Madagascar</h1>
                <div className="row justify-content-center">
                    <p className='w-75 text-center'>Profite d'un service unique qui te permet d'acheter en Europe et de recevoir tes articles directement à Madagascar. Nous simplifions le processus pour te garantir une expérience fluide et sans tracas.</p>
                </div>
            </div>
        </div>
        <div className="mb-10">
            <div className="container text-center">
                <h2 className='text-high-pink mb-4'>Etapes du service</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-info-circle"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="">Fais Tes Achats</h4>

                                <p>Choisis et achète tes produits sur n'importe quel site. Profite d'une grande variété de choix et de prix avantageux.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-star-o"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="">Envoie à Notre Adresse</h4>

                                <p>Lors de la finalisation de ton achat, utilise notre adresse française comme destination de livraison. Nous recevrons tes articles pour toi.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-heart-o"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="">Nous Livrons à Madagascar</h4>

                                <p>Une fois que nous avons reçu tes achats, nous les expédions directement à ton adresse à Madagascar. Rapide, sûr, et efficace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-10">
            <div className="container text-center">
                <h2 className='text-high-pink mb-4'>Nos tarifs d'envoi colis</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 mb-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-info-circle"></i>
                            </span>
                            <div className="icon-box-content">
                                <p>Vêtements, chaussures, jouets, cosmétiques etc... <br />
                                    Neuf et/ou d'occasion</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-star-o"></i>
                            </span>
                            <div className="icon-box-content">
                                <p>Pièces auto <br />
                                (prévoir 10% du prix pour la douane avec facture si grosse pièce).</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-heart-o"></i>
                            </span>
                            <div className="icon-box-content">
                                <p>Tout ce qui est électronique et gros volume dépassant 1m².</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-info-circle"></i>
                            </span>
                            <div className="icon-box-content">
                                <p>Pièce pour envoyer un téléphone.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-star-o"></i>
                            </span>
                            <div className="icon-box-content">
                                <p>Poids pour envoyer un ordi.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="icon-box text-center">
                            <span className="icon-box-icon">
                                <i className="icon-heart-o"></i>
                            </span>
                            <div className="icon-box-content">
                                Image livraison 5 a 7 jours
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-10">
            <div className="container">
                <h2 className='text-high-pink text-center mb-4'>Lieu de depot et recuperation colis</h2>
                <div className='row justify-content-center'>
                    <div className="row w-75">
                        <div className="col-md-6">
                            Image
                        </div>
                        <div className="col-md-6">
                            <p className='mb-3'>Nos envois se font une fois par semaine en fonction des disponibilités des vols de Turkish Airlines</p>
                            
                            <h4 className='text-high-pink'>Lieu de depot ou d'envoi postal</h4>
                            <p>Société PROREV (Votre nom ou Pseudo FB/insta)</p>
                            <p className='mb-3'>
                                <strong>3 RUE DU CREUX CHEMIN 78910 ORVILLIERS</strong>
                            </p>

                            <h4 className='text-high-pink'>Lieu de récupération à Tanà</h4>
                            <p>
                                <strong>LOT VB5A FALIARIVO AMBANIDIA ANTANANARIVO 101</strong>
                            </p>
                            <p>Envoi possible dans tout Madagascar selon le transporteur de votre choix en PA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mb-10">
            <div className="container">
                <div className="text-center text-high-pink mb-4">
                    <h2 className='text-high-pink'>Service +: Option Controle</h2>
                    <p>Si vous le souhaitez, nous pourrons proceder a une verification du contenu de votre colis</p>
                </div>
                <div className="row">
                        <div className="col-lg-6">
                            <div className="cta bg-image" style={ { backgroundImage: `url(images/backgrounds/cta/bg-3.jpg)`, backgroundPosition: `center right` } }>
                                <div className="cta-wrapper cta-text">
                                    <h3 className="cta-title">Les avantages</h3>
                                    <ul style={{listStyleType: 'initial'}}>
                                        <li>Des photos à l'appui</li>
                                        <li>Contrôle de taille et qualité</li>
                                        <li>Minimisation du poids</li>
                                        <li>Prix 0,50€ par pièce contrôlée</li>
                                        <li>Livraison offerte à votre domicile</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="cta bg-image  h-100" style={ { backgroundImage: `url(images/backgrounds/cta/bg-4.jpg)`, backgroundPosition: `center right` } }>
                                <div className="cta-wrapper">
                                    <h3 className="cta-title mb-3">Mode de paiement</h3>
                                    <div className='row justify-content-around mb-4'>
                                        <div className="col-md-3 bg-success">
                                            Image
                                        </div>
                                        <div className="col-md-3 bg-danger">
                                            Image
                                        </div>
                                        <div className="col-md-3 bg-info">
                                            Image
                                        </div>
                                    </div>
                                    <div className='row justify-content-around'>
                                        <div className="col-md-3 bg-success">
                                            Image
                                        </div>
                                        <div className="col-md-3 bg-danger">
                                            Image
                                        </div>
                                        <div className="col-md-3 bg-info">
                                            Image
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Express );