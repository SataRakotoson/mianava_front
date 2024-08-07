import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/alink';
import Qty from '~/components/features/qty';
import PageHeader from '~/components/features/page-header';

import { actions as cartAction } from '~/store/cart';
import { cartPriceTotal } from '~/utils/index';
import { useStore } from '~/store/zustand';

function Cart ( props ) {
    const [ cartList, setCartList ] = useState( [] );
    const [ shippingCost, setShippingCost ] = useState( 0 );

    const cartData = useStore( ( state ) => state.cartData );
    const total = useStore((state) => state.getTotal());
    const removeFromCart = useStore((state) => state.removeFromCart);

    useEffect( () => {
        setCartList( props.cartItems );
    }, [ props.cartItems ] )

    function onChangeShipping ( value ) {
        setShippingCost( value );
    }

    function changeQty ( value, index ) {
        setCartList(
            cartList.map( ( item, ind ) => {
                if ( ind == index )
                    return {
                        ...item,
                        qty: value,
                        sum:
                            ( item.sale_price
                                ? item.sale_price
                                : item.price ) * value
                    };
                return item;
            } )
        )
    }

    function updateCart ( e ) {
        let button = e.currentTarget;
        button.querySelector( '.icon-refresh' ).classList.add( 'load-more-rotating' );

        setTimeout( () => {
            props.updateCart( cartList );
            button.querySelector( '.icon-refresh' ).classList.remove( 'load-more-rotating' );
        }, 400 );
    }

    return (
        <div className="main">
            <PageHeader title="Panier" subTitle="Shop" />

            <div className="page-content pb-5 mt-8">
                <div className="cart">
                    <div className="container">
                        {
                            cartData.length > 0 ?
                                <div className="row">
                                    <div className="col-lg-9">
                                        <table className="table table-cart table-mobile">
                                            <thead>
                                                <tr>
                                                    <th>Produit</th>
                                                    <th>Prixs</th>
                                                    <th>Quantité</th>
                                                    <th>Total</th>
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                { cartData.length > 0 ?
                                                    cartData.map( ( item, index ) =>
                                                        <tr key={ index }>
                                                            <td className="product-col">
                                                                <div className="product">
                                                                    <figure className="product-media">
                                                                        <ALink href={ `/product/default/${item.slug}` } className="product-image">
                                                                            <img src={item.product.fieldData["product-details-image-one"].url} alt="product" style={{height: '100%', objectFit: 'contain'}} />
                                                                            {/* <img src={ process.env.NEXT_PUBLIC_ASSET_URI + item.sm_pictures[ 0 ].url } alt="product" /> */}
                                                                        </ALink>
                                                                    </figure>

                                                                    <h4 className="product-title">
                                                                        <ALink href={ `/product/default/${item.slug}` }>{ item.name }</ALink>
                                                                    </h4>
                                                                </div>
                                                            </td>

                                                            <td className="price-col">
                                                                {/* ${
                                                                    item.sale_price ?
                                                                        item.sale_price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )
                                                                        :
                                                                        item.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } )

                                                                } */}
                                                                {item.skus[0].fieldData.price.value}Ar
                                                            </td>

                                                            <td className="quantity-col">
                                                                {/* <Qty value={ item.qty } changeQty={ current => changeQty( current, index ) } adClass="cart-product-quantity"></Qty> */}
                                                                1
                                                            </td>

                                                            <td className="total-col">
                                                                {/* ${ item.sum.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) } */}
                                                                {item.skus[0].fieldData.price.value}Ar                                                            </td>

                                                            <td className="remove-col">
                                                                <button className="btn-remove" onClick={ () => removeFromCart(item)}><i className="icon-close"></i></button>
                                                            </td>
                                                        </tr>
                                                    ) :
                                                    <tr>
                                                        <td>
                                                            <p className="pl-2 pt-1 pb-1"> No Products in Cart </p>
                                                        </td>
                                                    </tr>
                                                }

                                            </tbody>
                                        </table>

                                        <div className="cart-bottom">
                                            <div className="cart-discount">
                                                <form action="#">
                                                    <div className="input-group">
                                                        <input type="text" className="form-control" required placeholder="Code promo" />
                                                        <div className="input-group-append">
                                                            <button className="btn btn-outline-primary-2" type="submit"><i className="icon-long-arrow-right"></i></button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            {/* <button className="btn btn-outline-dark-2" onClick={ updateCart }><span>UPDATE CART</span><i className="icon-refresh"></i></button> */}
                                        </div>
                                    </div>
                                    <aside className="col-lg-3">
                                        <div className="summary summary-cart">
                                            <h3 className="summary-title">Récapitulatif</h3>

                                            <table className="table table-summary">
                                                <tbody>
                                                    <tr className="summary-subtotal">
                                                        <td>Sous total:</td>
                                                        {/* <td>{ cartPriceTotal( props.cartItems ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) } Ar</td> */}
                                                        <td>{ total} Ar</td>
                                                    </tr>

                                                    {/* SHIPPING */}
                                                    {/* <tr className="summary-shipping">
                                                        <td>Shipping:</td>
                                                        <td>&nbsp;</td>
                                                    </tr>

                                                    <tr className="summary-shipping-row">
                                                        <td>
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio"
                                                                    id="free-shipping"
                                                                    name="shipping"
                                                                    className="custom-control-input"
                                                                    onChange={ ( e ) => onChangeShipping( 0 ) }
                                                                    defaultChecked={ true }
                                                                />
                                                                <label className="custom-control-label" htmlFor="free-shipping">Free Shipping</label>
                                                            </div>
                                                        </td>
                                                        <td>$0.00</td>
                                                    </tr> */}
                                                    
                                                       
                                                    <tr className="summary-shipping-row">
                                                        {/* <td> 
                                                            <div className="custom-control custom-radio">
                                                                <input type="radio"
                                                                    id="standard-shipping"
                                                                    name="shipping"
                                                                    className="custom-control-input"
                                                                    onChange={ ( e ) => onChangeShipping( 10 ) }
                                                                />
                                                                <label className="custom-control-label" htmlFor="standard-shipping">Standard:</label>
                                                            </div>
                                                        </td>
                                                        <td>$10.00</td> */}
                                                    </tr>

                                                    {/* <tr className="summary-shipping-estimate">
                                                        <td>Estimate for Your Country<br /> <ALink href="/shop/dashboard">Change address</ALink></td>
                                                        <td>&nbsp;</td>
                                                    </tr> */}

                                                    <tr className="summary-total">
                                                        <td>Total:</td>
                                                        <td>
                                                            {total}Ar
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                
                                            </table>
                                            <p> Livraison offerte dès 25 000Ar</p>

                                            <ALink
                                                className="btn btn-outline-primary-2 btn-order btn-block mt-5"
                                                href="/checkout"
                                            >
                                                PASSER AU PAIEMENT
                                            </ALink>
                                        </div>

                                        <ALink href="/shop/sidebar/list" className="btn btn-outline-dark-2 btn-block mb-3"><span>CONTINUER L'ACHAT</span><i className="icon-refresh"></i></ALink>
                                    </aside>
                                </div>
                                :
                                // PAS DE ITEM DANS LE PANIER
                                <div className="row">
                                    <div className="col-12">
                                        <div className="cart-empty-page text-center">
                                            <i className="cart-empty icon-shopping-cart" style={ { lineHeight: 1, fontSize: '15rem' } }></i>
                                            <p className="px-3 py-2 cart-empty mb-3">Pas de produits ajoutés dans le panier</p>
                                            <p className="return-to-shop mb-0">
                                                <ALink
                                                    href="/shop/sidebar/list"
                                                    className="btn btn-primary"
                                                >RETOURNER A LA BOUTIQUE</ALink>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state ) => (
    {
        cartItems: state.cartlist.data
    }
)

export default connect( mapStateToProps, { ...cartAction } )( Cart );