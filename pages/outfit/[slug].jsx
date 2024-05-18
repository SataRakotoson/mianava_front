import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import withApollo from '~/server/apollo';
import { GET_HOME_DATA, GET_PRODUCT } from '~/server/queries';

import PageHeader from '~/components/features/page-header';
import Reveal from 'react-awesome-reveal';
import NewCollection from '~/components/partials/home/new-collection';
import { fadeIn } from '~/utils/data';
import OutfitOfTheDay from '~/components/outfitOfTheDay/OutfitOfTheDay';

function Outfit () {

    const { data, loading, error } = useQuery( GET_HOME_DATA );
    const newProducts = data && data.homeData.products.slice( 0, 8 );

    return (
        <div className="main">
            <PageHeader title='Outfit du jour' subTitle="Mianava" />
            <div className="container">
                <div className='mb-5 mt-8'>
                    <Reveal keyframes={ fadeIn } delay={ 100 } duration={ 1000 } triggerOnce>
                        <OutfitOfTheDay title={false} products={ newProducts } ALinktitle='' loading={ loading } />
                    </Reveal>
                </div>
            </div>
        </div >
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Outfit );
