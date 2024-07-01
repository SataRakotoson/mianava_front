import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';

import { actions as wishlistAction } from '~/store/wishlist';
import { actions as cartAction } from '~/store/cart';

function Wishlist ( props ) {
    const [ wishItems, setWishItems ] = useState( [
        {
            name:'Hugo Boss',
            price: 250000,
            image: 'https://uploads-ssl.webflow.com/63e3d9a5757a1c001280fc6c/66293b82fd8286eca98f2bb4_bait-al-bakhoor-khashab-al-oudh-eau-de-parfum-mixte___2111004.webp'
        },
        {
            name:'Hugo Boss',
            price: 250000,
            image: 'https://uploads-ssl.webflow.com/63e3d9a5757a1c001280fc6c/66293b82fd8286eca98f2bb4_bait-al-bakhoor-khashab-al-oudh-eau-de-parfum-mixte___2111004.webp'
        }
    ] );

    function moveToCart ( product ) {
        props.removeFromWishlist( product );
        props.addToCart( product );
    }

    return (
        <main className="main wishlist">
            <PageHeader
                title="Wishlist"
                subTitle="Shop"
            />
            <nav className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Accueil</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="/shop/sidebar/list">Boutique</ALink>
                        </li>
                        <li className="breadcrumb-item active">Wishlist</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content pb-5">
                {
                    wishItems.length > 0 ?
                        <div
                            className="container"
                        >
                            <table className="table table-wishlist table-mobile">
                                <thead>
                                    <tr>
                                        <th>Produits</th>
                                        <th>Prix</th>
                                        {/* <th>Stock Status</th> */}
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        wishItems.map( ( product, index ) => (
                                            <tr
                                                key={ index }
                                            >
                                                <td className="product-col">
                                                    <div className="product">
                                                        <figure className="product-media">
                                                            <ALink href={ `/product/default/${product.slug}` } className="product-image">
                                                                <img src={ product.image } alt="product" />
                                                            </ALink>
                                                        </figure>

                                                        <h4 className="product-title">
                                                            <ALink href={ `/product/default/${product.slug}` }>{ product.name }</ALink>
                                                        </h4>
                                                    </div>
                                                </td>
                                                <td className="price-col">
                                                <div className="product-price d-inline-block mb-0">{ product.price} Ariary</div>
                                                </td>
                                                {/* <td className="stock-col">
                                                    <span className={ `${product.stock == 0 ? 'out-of-stock' : 'in-stock'}` } >{ product.stock == 0 ? 'Out of stock' : 'In stock' }</span>
                                                </td> */}
                                                <td className="action-col">
                                                    <div className="dropdown">
                                                        <button className="btn btn-block btn-outline-primary-2" onClick={ e => moveToCart( product ) }>
                                                            <i className="icon-cart-plus"></i>
                                                            Ajouter au panier
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="remove-col">
                                                    <button
                                                        className="btn-remove"
                                                        onClick={ e => props.removeFromWishlist( product ) }
                                                    >
                                                        <i className="icon-close"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ) )
                                    }
                                </tbody>
                            </table>

                            <div className="wishlist-share">
                                <div className="social-icons social-icons-sm mb-2">
                                    <label className="social-label">Partagez sur:</label>
                                    <ALink
                                        href="https://www.facebook.com/Mianavaofficiel/"
                                        target="_blank"
                                        className="social-icon"
                                        title="Facebook"
                                    >
                                        <i className="icon-facebook-f"></i>
                                    </ALink>
                                    <ALink
                                        href="https://www.instagram.com/_mianava_/"
                                        target="_blank"
                                        className="social-icon"
                                        title="Instagram"
                                    >
                                        <i className="icon-instagram"></i>
                                    </ALink>
                                </div>
                            </div>
                        </div>
                        :
                        <div
                            className="container"
                        >
                            <div className="text-center">
                                <i className="icon-heart-o wishlist-empty d-block" style={ { fontSize: '15rem', lineHeight: '1' } }></i>
                                <span className="d-block mt-2">No products added to wishlist</span>
                                <ALink
                                    href="/shop/sidebar/list"
                                    className="btn btn-primary mt-2"
                                >Go Shop</ALink>
                            </div>
                        </div>
                }

            </div>
        </main>
    )
}

const mapStateToProps = ( state ) => ( {
    wishlist: state.wishlist.data
} )

export default connect( mapStateToProps, { ...wishlistAction, ...cartAction } )( Wishlist );