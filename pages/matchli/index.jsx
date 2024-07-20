import { useQuery } from '@apollo/client';
import withApollo from '~/server/apollo';
import React from 'react'
import Reveal from 'react-awesome-reveal';
import NewCollection from '~/components/partials/home/new-collection';
import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data';
import ALink from '~/components/features/alink';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OutfitOfTheDay from '~/components/outfitOfTheDay/OutfitOfTheDay';

const Matchli = () => {
  return (
    <div>
        <div
            className="video-banner-bg bg-image"
            // style={ { backgroundImage: "url('images/covers/matchli.png')" } }
            style={ { backgroundImage: "url('images/import/matchli.webp')" } }
        >
            <div className="container invisible">
                <h1 className="header-title text-high-pink">
                    Matchli
                </h1>
                <p className='text-high-pink'>Des looks et tenues assorties</p>
                <p className='text-high-pink'>Specialement pour vous</p>
            </div>
        </div>
        <div className="pt-2 pb-3 mt-10">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <div className="banner banner-overlay">
                                    <ALink href="/shop/?category=Homme" className="lazy-media">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/matchli/man.png"
                                            threshold={ 500 }
                                            width="376"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </ALink>

                                    <div className="banner-content banner-content-center">
                                        <h4 className="banner-subtitle text-white"><ALink href="/shop/sidebar/3cols">New in</ALink></h4>
                                        <h3 className="banner-title text-white"><ALink href="/shop/sidebar/3cols"><strong>Homme</strong></ALink></h3>
                                        <ALink href="/shop/?category=Homme" className="btn btn-outline-white banner-link underline">Shop Now</ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <div className="col-sm-4">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <div className="banner banner-overlay">
                                    <ALink href="/shop/?category=Femme" className="lazy-media">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/matchli/woman.png"
                                            threshold={ 500 }
                                            width="376"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </ALink>

                                    <div className="banner-content banner-content-center">
                                        <h4 className="banner-subtitle text-white"><ALink href="/shop/sidebar/3cols">New in</ALink></h4>
                                        <h3 className="banner-title text-white"><ALink href="/shop/sidebar/3cols"><strong>Femme</strong></ALink></h3>
                                        <ALink href="/shop/?category=Femme" className="btn btn-outline-white banner-link underline">Shop Now</ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                        <div className="col-sm-4">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1000 } triggerOnce>
                                <div className="banner banner-overlay">
                                    <ALink href="/shop/?category=Enfant" className="lazy-media">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/matchli/kid.png"
                                            threshold={ 500 }
                                            width="376"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </ALink>

                                    <div className="banner-content banner-content-center">
                                        <h4 className="banner-subtitle text-white"><ALink href="/shop/sidebar/3cols">New in</ALink></h4>
                                        <h3 className="banner-title text-white"><ALink href="/shop/sidebar/3cols"><strong>Enfants</strong></ALink></h3>
                                        <ALink href="/shop/sidebar/3cols?category=men" className="btn btn-outline-white banner-link underline">Shop Now</ALink>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <hr className="mt-0 mb-0" />
                    <div className='mt-10 mb-10'>
                        <OutfitOfTheDay />
                    </div>
                </div>
            </div>
    </div>
  )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Matchli );