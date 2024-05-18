import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';

import withApollo from '~/server/apollo';
import { GET_PRODUCT } from '~/server/queries';

import GalleryDefault from '~/components/partials/product/gallery/gallery-default';
import DetailOne from '~/components/partials/product/details/detail-one';
import InfoOne from '~/components/partials/product/info-tabs/info-one';
import RelatedProductsOne from '~/components/partials/product/related/related-one';
import PageHeader from '~/components/features/page-header';
import { products } from '~/utils/products';

function Product () {
    const slug = useRouter().query.slug;
    console.log({slug})
    const product_slug = products.filter(product => product.product?.fieldData.slug == slug)
    const product = product_slug[0]

    if ( !slug ) return <div></div>;

    // const { data, loading, error } = useQuery( GET_PRODUCT, { variables: { slug } } );
    // const product = data && data.product.single;
    // const related = data && data.product.related;
    // const prev = data && data.product.prev;
    // const next = data && data.product.next;

    // console.log({error})

    // if ( error ) {
    //     return <div></div>
    // }

    return (
        <div className="main">
            <PageHeader title='Boutique' subTitle="Mianava" />
            <div className="page-content">
                <div className="container skeleton-body mt-8">
                    <div className="product-details-top">
                        <div className={ `row skel-pro-single ${false ? '' : 'loaded'}` }>
                            <div className="col-md-6">
                                <div className="skel-product-gallery"></div>
                                {
                                    !false ?
                                        <GalleryDefault product={product}/>
                                        : ""
                                }
                            </div>

                            <div className="col-md-6">
                                <div className="entry-summary row">
                                    <div className="col-md-12">
                                        <div className="entry-summary1 mt-2 mt-md-0"></div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="entry-summary2"></div>
                                    </div>
                                </div>
                                {
                                    !false ?
                                        <DetailOne  product={product}/>
                                        : ""
                                }
                            </div>
                        </div>
                    </div>

                    {
                        false ?
                            <div className="skel-pro-tabs"></div>
                            :
                            <InfoOne/>
                    }

                    <RelatedProductsOne products={ 'related' } />
                </div >
            </div >
        </div >
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Product );
