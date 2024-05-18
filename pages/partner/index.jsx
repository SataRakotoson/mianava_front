import { useQuery } from '@apollo/client';
import withApollo from '~/server/apollo';
import React from 'react'
import Reveal from 'react-awesome-reveal';
import NewCollection from '~/components/partials/home/new-collection';
import { GET_HOME_DATA } from '~/server/queries';
import { fadeIn } from '~/utils/data';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Pricing from '~/components/pricing/Pricing';

const Partner = () => {

    const { data, loading, error } = useQuery( GET_HOME_DATA );
    const newProducts = data && data.homeData.products.slice( 0, 8 );
  return (
    <div>
        <div
            className="video-banner-bg bg-image"
            style={ { backgroundImage: "url('images/covers/partner.png')" } }
        >
            <div className="container ">
                <h1 className="header-title ">
                    Mianava <br />
                    Partner
                </h1>
                <p className='text-high-pink'>Vendez vos articles ici</p>
            </div>
        </div>
        <div className='mb-10 mt-10'>
            <div className="container">
                <h2 className='text-center text-high-pink mb-4'>
                    Merci de votre interet pour une collaboration
                </h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="banner">
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="banner"
                                    height={ 275 }
                                    src="images/banners/banner-1.jpg"
                                    threshold={ 200 }
                                    width={ 300 }
                                    effect="opacity"
                                />

                            <div className="banner-content px-4">
                                <p>Nous proposons trois packs de partenariats en rapport avec nos réseaux et selon votre budget:</p>
                                <ul style={{listStyleType: 'initial'}}>
                                    <li>Pack Gold</li>
                                    <li>Pack Silver</li>
                                    <li>Pack Bronze</li>
                                </ul>
                                <p>En rapport aux normes que nous imposons, nous seront contraints de vérifier les produits, nous ne vendons de la <strong>contrefaçon</strong></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="banner">
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="banner"
                                    height={ 275 }
                                    width={ 300 }
                                    src="images/banners/banner-2.jpg"
                                    threshold={ 200 }
                                    effect="opacity"
                                />

                            <div className="banner-content pl-4 pr-5">
                                <h4>Viens te joindre a nous et travaillons ensemble dans la bonne humeur!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="mb-10">
            <div className="container">
                <Pricing />
            </div>
        </div>
    </div>
  )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Partner );