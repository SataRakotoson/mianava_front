import Countdown from 'react-countdown';

import ProductThirteen from '~/components/features/products/product-thirteen';
import { rendererThree } from '~/components/features/count-down';

function DealCollection ( props ) {
    const { products = [], loading } = props;

    return (
        <div className="deal bg-image pt-8 pb-8" style={ { backgroundImage: `url(images/home/banners/bg-1.jpg)` } }>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="deal-content text-center">
                            <h4>Limited quantities. </h4>

                            <h2>Deal of the Day</h2>

                            <div className="deal-countdown">
                                <Countdown date={ `2022-02-01T01:02:03` } renderer={ rendererThree } />
                            </div>
                        </div>
                        <div className="row deal-products">
                            {
                                loading ?
                                    [ 1, 2 ].map( item =>
                                        <div className="col-6" key={ item }>
                                            <div className="skel-pro"></div>
                                        </div>
                                    )
                                    :
                                    products.map( ( product, index ) =>
                                        <div className="col-6" key={ index }>
                                            <ProductThirteen product={ product } />
                                        </div>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DealCollection;