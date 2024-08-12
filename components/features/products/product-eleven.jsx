import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/alink';

import { actions as wishlistAction } from '~/store/wishlist';
import { actions as cartAction } from '~/store/cart';
import { actions as compareAction } from '~/store/compare';
import { actions as demoAction } from '~/store/demo';

import { isInWishlist, isInCompare, getIndex } from '~/utils';

import Hand1 from '@/assets/images/hand1.jpg'
import Hand2 from '@/assets/images/hand2.jpg'

import { toast } from 'react-toastify';
import { useStore } from '~/store/zustand';

function ProductEleven ( props ) {
    const router = useRouter();
    const { product } = props;
    // const [ maxPrice, setMaxPrice ] = useState( 0 );
    // const [ minPrice, setMinPrice ] = useState( 99999 );
    
    const addToCart = useStore((state) => state.addToCart)
    const cartData = useStore((state) => state.cartData)

    

    const cartClick = (product) => {
        addToCart(product)
        console.log('ATOO ', cartData)
        toast.success('Ajoute avec succes')
    }

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
        <div className="product product-7 text-center w-100">
            <figure className="product-media">
                {/* {
                    product.new ?
                        <span className="product-label label-new">New</span>
                        : ""
                }

                {
                    product.sale_price ?
                        <span className="product-label label-sale">Sale</span>
                        : ""
                }

                {
                    product.top ?
                        <span className="product-label label-top">Top</span>
                        : ""
                }

                {
                    !product.stock || product.stock == 0 ?
                        <span className="product-label label-out">Out of Stock</span>
                        : ""
                } */}

                <ALink href={`/product/${product.product.fieldData.slug}`}>
                    <LazyLoadImage
                        className='product_card' //A CREER dans un scss global
                        style={{objectFit:"contain"}} //style de secours
                        alt="product"
                        src={product.product?.fieldData["product-details-image-one"]?.url}
                        threshold={ 500 }
                        effect="black and white"
                        wrapperClassName="product-image"
                    />
                    {
                        true ?
                            <LazyLoadImage
                                className='product_card' //A CREER dans un scss global
                                style={{objectFit:"contain"}} //style de secours
                                alt="product"
                                // style={{height: '100%'}}
                                src={product.product?.fieldData["product-details-image-one"]?.url}
                                threshold={ 500 }
                                effect="black and white"
                                wrapperClassName="product-image-hover"
                            />
                            : ""
                    }
                </ALink>
                
                {/* WISHLIST */}
                <div className="product-action-vertical">
                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>ajouter aux wishlists</span></a>
                </div>

                {/* {
                    product.stock > 0 ?
                        <div className="product-action-vertical">
                            {
                                isInWishlist( wishlist, product ) ?
                                    <ALink href="/shop/wishlist" className="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"><span>go to wishlist</span></ALink>
                                    :
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>add to wishlist</span></a>

                            }
                            <a href="#" className="btn-product-icon btn-quickview" title="Quick View" onClick={ onQuickView }><span>quick view</span></a>
                            <a href="#" className="btn-product-icon btn-compare" onClick={ onCompareClick }><span>compare</span></a>
                        </div>
                        :
                        <div className="product-action-vertical">
                            {
                                isInWishlist( wishlist, product ) ?
                                    <ALink href="/shop/wishlist" className="btn-product-icon btn-wishlist btn-expandable added-to-wishlist"><span>go to wishlist</span></ALink>
                                    :
                                    <a href="#" className="btn-product-icon btn-wishlist btn-expandable" onClick={ onWishlistClick }><span>add to wishlist</span></a>

                            }
                            <a href="#" className="btn-product-icon btn-quickview" title="Quick View" onClick={ onQuickView }><span>quick view</span></a>
                        </div>
                } */}

                {
                    true ?
                        <div className="product-action">
                            {
                                false > 0 ?
                                    <ALink href={`/product/${product.product.fieldData.slug}`} className="btn-product btn-cart btn-select">
                                        <span>Sélectionnez les variants</span>
                                    </ALink>
                                    :
                                    <button className="btn-product btn-cart" onClick={() => cartClick(product)}>
                                        <span>Ajouter au panier</span>
                                    </button>
                            }
                        </div>
                        : ""
                }

            </figure>

            <div className="product-body">
                <div className="product-cat">
                    {
                        ['Parfum'].map( ( item, index ) => (
                            <React.Fragment key={ index }>
                                {/* <ALink href={ { pathname: '/shop/sidebar/list', query: { category: item.slug } } }>
                                    { item }
                                </ALink> */}
                                <p>
                                    { item }
                                </p>
                                {/* { index < product.category.length - 1 ? '- ' : "" } */}
                            </React.Fragment>
                        ) )
                    }
                </div>

                <h3 className="product-title">
                <ALink href={`/product/${product.product.fieldData.slug}`}>{product.product.fieldData.name}</ALink>
                    {/* <ALink href={ `` }>{product.product.fieldData.name}</ALink> */}
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
                                    <span className="new-price">${ minPrice.toFixed( 2 ) }</span>
                                    <span className="old-price">${ maxPrice.toFixed( 2 ) }</span>
                                </div>
                                :
                                <div className="product-price">${ minPrice.toFixed( 2 ) }&ndash;${ maxPrice.toFixed( 2 ) }</div>
                } */}
                <div className='product-price'>
                    <span className="new-price">{product.skus[0].fieldData.price.value} MGA</span>
                </div>

                <div className="ratings-container">
                    <div className="ratings">
                        <div className="ratings-val" style={ { width: '75%' } }></div>
                        <span className="tooltip-text">4.00</span>
                    </div>
                    <span className="ratings-text">( 2 Reviews )</span>
                </div>

                {/* {
                    product.variants.length > 0 ?
                        <div className="product-nav product-nav-dots">
                            <div className="row no-gutters">
                                {
                                    product.variants.map( ( item, index ) => (
                                        <ALink href="#" style={ { backgroundColor: item.color } } key={ index }><span className="sr-only">Color Name</span></ALink>
                                    ) )
                                }
                            </div>
                        </div>
                        : ""
                } */}
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

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction, ...compareAction, ...demoAction } )( ProductEleven );