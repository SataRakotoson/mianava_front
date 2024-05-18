import { useQuery } from '@apollo/client';
import withApollo from '~/server/apollo';
import React from 'react'
import Reveal from 'react-awesome-reveal';
import NewCollection from '~/components/partials/home/new-collection';
import { GET_HOME_DATA } from '~/server/queries';
import { fadeIn } from '~/utils/data';
import VenteEphemere from '~/components/venteEphemere/VenteEphemere';

const Ephemere = () => {

    // const { data, loading, error } = useQuery( GET_HOME_DATA );
    // const newProducts = data && data.homeData.products.slice( 0, 8 );
  return (
    <div>
        <div
            className="video-banner-bg bg-image"
            // style={ { backgroundImage: "url('images/covers/ephemere.png')" } }
            style={ { backgroundImage: "url('images/import/ephemere.webp')" } }
        >
            <div className="container invisible">
                <h1 className="header-title text-high-pink">
                    Vente <br />
                    Ephemere
                </h1>
                <p className='m-0 font-weight-bolder text-high-pink'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Dolor excepturi assumenda minus explicabo.</p>
            </div>
        </div>
        <div className="mb-6"></div>
        <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
            <VenteEphemere title='Ca va vous plaire!' more={false}/>
        </Reveal>
        <div className="mb-6"></div>
    </div>
  )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Ephemere );