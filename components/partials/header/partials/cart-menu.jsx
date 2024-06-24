import { useEffect } from 'react';
import { connect } from 'react-redux';

import ALink from '~/components/features/alink';

import { actions } from '~/store/cart';
import { useStore } from '~/store/zustand';
import { cartQtyTotal, cartPriceTotal } from '~/utils/index';

function CartMenu ( props ) {
    const { cartlist } = props;
    const cartData = useStore((state) => state.cartData);
    const getTotal = useStore((state) => state.getTotal);
    const getItemCount = useStore((state) => state.getItemCount);
    const removeFromCart = useStore((state) => state.removeFromCart);

    useEffect(() => {
        const itemCount = getItemCount();
        // console.log({ total });
        console.log({ cartData });
        console.log({ itemCount });
    }, [cartData, getItemCount]);

    const itemCount = getItemCount();
    const total = getTotal();

    return (
        <div className="dropdown cart-dropdown">
            <ALink href="/shop/cart" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                <i className="icon-shopping-cart"></i>
                <span className="cart-count">{itemCount}</span>
                <span className="cart-txt font-weight-semibold">{total}Ar</span>
            </ALink>

            <div className={ `dropdown-menu dropdown-menu-right ${cartData.length === 0 ? 'text-center' : ''}` } >
                {
                    cartData.length === 0 ?
                        <p>No products in the cart.</p> :
                        <>
                            <div className="dropdown-cart-products">
                                { 
                                    cartData.map( ( item, index ) => {
                                        return(
                                            <div className="product justify-content-between" key={ index }>
                                                <div className="product-cart-details">
                                                    <h4 className="product-title">
                                                        <ALink href={ `/product/default/${item.slug}` }>{ item.product?.fieldData.name }</ALink>
                                                    </h4>

                                                    <span className="cart-product-info">
                                                        {/* <span className="cart-product-qty">{ item.qty } </span> */}
                                                        {item.skus[0].fieldData.price.value}Ar
                                                        {/* <span className="cart-product-qty">{ item.qty } </span>
                                                        x ${ item.sale_price ? item.sale_price.toFixed( 2 ) : item.price.toFixed( 2 ) } */}
                                                    </span>
                                                </div>

                                                <figure className="product-image-container ml-2">
                                                    <ALink href={ `/product/default/${item.slug}` } className="product-image">
                                                        <img src={item.product.fieldData["product-details-image-one"].url} alt="product" />
                                                    </ALink>
                                                </figure>
                                                <button className="btn-remove" title="Remove Product" onClick={ () => removeFromCart(item)}><i className="icon-close"></i></button>
                                            </div>
                                        )
                                    }
                                    ) 
                                }
                            </div>
                            <div className="dropdown-cart-total">
                                <span>Total</span>

                                <span className="cart-total-price">{total}Ar</span>
                                {/* <span className="cart-total-price">${ cartPriceTotal( cartlist ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span> */}
                            </div>

                            <div className="dropdown-cart-action">
                                <ALink href="/shop/cart" className="btn btn-custom">Voir le panier</ALink>
                                {/* <ALink href="/shop/checkout" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></ALink> */}
                            </div>
                        </>
                }
            </div>
        </div>
    );
}

function mapStateToProps ( state ) {
    return {
        cartlist: state.cartlist.data
    }
}

export default connect( mapStateToProps, { ...actions } )( CartMenu );
// export default CartMenu ;