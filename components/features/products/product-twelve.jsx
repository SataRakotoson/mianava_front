import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';

import { actions as wishlistAction } from '~/store/wishlist';
import { actions as cartAction } from '~/store/cart';
import { actions as compareAction } from '~/store/compare';
import { actions as demoAction } from '~/store/demo';

import { isInWishlist, isInCompare } from '~/utils';

import Hand1 from '@/assets/images/hand1.jpg'
import Hand2 from '@/assets/images/hand2.jpg'
import Link from 'next/link';

function ProductTwelve ( props ) {
    const router = useRouter();
    const { product, wishlist } = props;
    const [ maxPrice, setMaxPrice ] = useState( 0 );
    const [ minPrice, setMinPrice ] = useState( 99999 );

    // useEffect( () => {
    //     let min = minPrice;
    //     let max = maxPrice;
    //     product.variants.map( item => {
    //         if ( min > item.price ) min = item.price;
    //         if ( max < item.price ) max = item.price;
    //     }, [] );

    //     if ( product.variants.length == 0 ) {
    //         min = product.sale_price
    //             ? product.sale_price
    //             : product.price;
    //         max = product.price;
    //     }

    //     setMinPrice( min );
    //     setMaxPrice( max );
    // }, [] )

    // function onCartClick ( e ) {
    //     e.preventDefault();
    //     props.addToCart( product );
    // }

    // function onWishlistClick ( e ) {
    //     e.preventDefault();
    //     if ( !isInWishlist( props.wishlist, product ) ) {
    //         props.addToWishlist( product );
    //     } else {
    //         router.push( '/pages/wishlist' );
    //     }
    // }

    // function onCompareClick ( e ) {
    //     e.preventDefault();
    //     if ( !isInCompare( props.comparelist, product ) ) {
    //         props.addToCompare( product );
    //     }
    // }

    // function onQuickView ( e ) {
    //     e.preventDefault();
    //     props.showQuickView( product.slug );
    // }

    return (
        <div className="product product-7 text-center">
            <figure className="product-media">
                <ALink href={ `/product/12` }>
                    <LazyLoadImage
                        alt="product"
                        src={Hand1}
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="product-image"
                    />
                    <LazyLoadImage
                        alt="product"
                        src={Hand2}
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="product-image-hover"
                    />
                    {/* {
                        product.sm_pictures.length >= 2 ?
                            <LazyLoadImage
                                alt="product"
                                src={Hand2}
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    } */}
                </ALink>
                <div className="product-action product-action-transparent">
                    <button className="btn-product btn-cart">
                        <span>add to cart</span>
                    </button>
                </div>
            </figure>

            <div className="product-body">
                <div className="product-cat">
                    
                        <div className='d-flex justify-content-center'>
                        {
                            ['Women'].map( ( item, index ) => (
                                <React.Fragment key={index }>
                                    {/* <ALink href={ { pathname: '/shop/sidebar/list', query: { category: item.slug } } }>
                                        { item.name }
                                    </ALink> */}
                                    <p>{item}</p>
                                    {/* { index < product.category.length - 1 ? ', ' : "" } */}
                                </React.Fragment>
                        ) )
                    }
                        </div>
                        
                </div>

                <h3 className="product-title">
                    <ALink href='/product/12'>Produit de test</ALink>
                </h3>

                {/* {
                    !product.stock || product.stock == 0 ?
                        <div className="product-price">
                            <span className="out-price">${ product.price.toFixed( 2 ) }</span>
                        </div>
                        :
                        minPrice == maxPrice ?
                            <div className="product-price">${ minPrice.toFixed( 2 ) }</div>
                            :
                            product.variants.length == 0 ?
                                <div className="product-price">
                                    <span className="new-price">Now ${ minPrice.toFixed( 2 ) }</span>
                                    <span className="old-price">Was ${ maxPrice.toFixed( 2 ) }</span>
                                </div>
                                :
                                <div className="product-price">${ minPrice.toFixed( 2 ) }&ndash;${ maxPrice.toFixed( 2 ) }</div>
                } */}

                <div className="product-price">
                    <span className="new-price">320.000Ar</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return {
        wishlist: state.wishlist.data,
        comparelist: state.comparelist.data
    }
}

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction, ...compareAction, ...demoAction } )( ProductTwelve );