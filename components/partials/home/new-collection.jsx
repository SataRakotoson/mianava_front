import ALink from '~/components/features/alink';
import ProductEleven from '~/components/features/products/product-eleven';
// import ProductTwelve from '~/components/features/products/product-twelve';
import { products } from '@/utils/products';

function NewCollection ( props ) {
    const products_mianava = products
    return (
        <div className="container">
            <h2 className="text-center mb-4">Nos produits phares</h2>

            <div className="products">
                <div className="row justify-content-center">
                    {
                        // loading ?
                        //     [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( item =>
                        //         <div className="col-6 col-md-4 col-lg-3" key={ item }>
                        //             <div className="skel-pro"></div>
                        //         </div>
                        //     )
                        //     :
                        products_mianava.filter(product => product.product?.fieldData["today-s-deals"]).map( ( product, index ) =>
                                <div className="col-6 col-md-4 col-lg-3" key={ index }>
                                    {/* <ProductTwelve/> */}
                                    <ProductEleven product={product}/>
                                </div>
                            )
                    }
                </div>
            </div>
            {
                props.more ? (
                    <div className="more-container text-center mt-2">
                        <ALink href="/shop/sidebar/list" className="btn btn-more"><span>show more</span></ALink>
                    </div>
                ) : (
                    ''
                )
            }
        </div>
    )
}

export default NewCollection;