import { useEffect } from 'react';
import { connect } from 'react-redux';
import SlideToggle from 'react-slide-toggle';

import ALink from '~/components/features/alink';
import Accordion from '~/components/features/accordion/accordion';
import Card from '~/components/features/accordion/card';
import PageHeader from '~/components/features/page-header';

import { cartPriceTotal } from '~/utils/index';

function Checkout ( props ) {
    const { cartlist } = props;

    useEffect( () => {
        document.querySelector( 'body' ).addEventListener( "click", clearOpacity )

        return () => {
            document.querySelector( 'body' ).removeEventListener( "click", clearOpacity );
        }
    }, [] )

    function clearOpacity () {
        if ( document.querySelector( '#checkout-discount-input' ).value == '' )
            document.querySelector( '#checkout-discount-form label' ).removeAttribute( 'style' );
    }

    function addOpacity ( e ) {
        e.currentTarget.parentNode.querySelector( "label" ).setAttribute( "style", "opacity: 0" );
    }

    return (
        <div className="main">
            <PageHeader title="Checkout" subTitle="Shop" />

            <div className="page-content mt-8">
                <div className="checkout">
                    <div className="container">
                        <div className="checkout-discount">
                            <form action="#" id="checkout-discount-form">
                                <input type="text" className="form-control" required id="checkout-discount-input" onClick={ addOpacity } />
                                <label htmlFor="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
                            </form>
                        </div>

                        <form action="#">
                            <div className="row">
                                <div className="col-lg-9">
                                    <h2 className="checkout-title">Billing Details</h2>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>First Name *</label>
                                            <input type="text" className="form-control" required />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>Last Name *</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>

                                    <label>Company Name (Optional)</label>
                                    <input type="text" className="form-control" />

                                    <label>Country *</label>
                                    <input type="text" className="form-control" required />

                                    <label>Street address *</label>
                                    <input type="text" className="form-control" placeholder="House number and Street name" required />
                                    <input type="text" className="form-control" placeholder="Appartments, suite, unit etc ..." required />

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Town / City *</label>
                                            <input type="text" className="form-control" required />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>State / County *</label>
                                            <input type="text" className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label>Postcode / ZIP *</label>
                                            <input type="text" className="form-control" required />
                                        </div>

                                        <div className="col-sm-6">
                                            <label>Phone *</label>
                                            <input type="tel" className="form-control" required />
                                        </div>
                                    </div>

                                    <label>Email address *</label>
                                    <input type="email" className="form-control" required />

                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="checkout-create-acc" />
                                        <label className="custom-control-label" htmlFor="checkout-create-acc">Create an account?</label>
                                    </div>

                                    <SlideToggle duration={ 300 } collapsed >
                                        { ( { onToggle, setCollapsibleElement } ) => (
                                            <div className="form-group">
                                                <div className="custom-control custom-checkbox mt-0 address-box">
                                                    <input type="checkbox" className="custom-control-input"
                                                        id="different-shipping" onChange={ onToggle } />
                                                    <label className="custom-control-label" htmlFor="different-shipping">Ship to a different address?
                                                    </label>
                                                </div>
                                                <div className="shipping-info" ref={ setCollapsibleElement } style={ { overflow: 'hidden' } }>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>First name <abbr className="required"
                                                                    title="required">*</abbr></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label>Last name <abbr className="required"
                                                                    title="required">*</abbr></label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Company name (optional)</label>
                                                        <input type="text" className="form-control" />
                                                    </div>

                                                    <div className="select-custom">
                                                        <label>Country / Region <span className="required">*</span></label>
                                                        <select name="orderby" className="form-control">
                                                            <option value="" defaultValue="selected">Vanuatu</option>
                                                            <option value="1">Brunei</option>
                                                            <option value="2">Bulgaria</option>
                                                            <option value="3">Burkina Faso</option>
                                                            <option value="4">Burundi</option>
                                                            <option value="5">Cameroon</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-group mb-1 pb-2">
                                                        <label>Street address <abbr className="required"
                                                            title="required">*</abbr></label>
                                                        <input type="text" className="form-control"
                                                            placeholder="House number and street name" required />
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="text" className="form-control"
                                                            placeholder="Apartment, suite, unit, etc. (optional)" required />
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Town / City <abbr className="required"
                                                            title="required">*</abbr></label>
                                                        <input type="text" className="form-control" required />
                                                    </div>

                                                    <div className="select-custom">
                                                        <label>State / County <abbr className="required"
                                                            title="required">*</abbr></label>
                                                        <select name="orderby" className="form-control">
                                                            <option value="" defaultValue="selected">NY</option>
                                                            <option value="1">Brunei</option>
                                                            <option value="2">Bulgaria</option>
                                                            <option value="3">Burkina Faso</option>
                                                            <option value="4">Burundi</option>
                                                            <option value="5">Cameroon</option>
                                                        </select>
                                                    </div>

                                                    <div className="form-group">
                                                        <label>Postcode / ZIP <abbr className="required"
                                                            title="required">*</abbr></label>
                                                        <input type="text" className="form-control" required />
                                                    </div>
                                                </div>
                                            </div>
                                        ) }
                                    </SlideToggle >

                                    <label>Order notes (optional)</label>
                                    <textarea className="form-control" cols="30" rows="4" placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
                                </div>

                                <aside className="col-lg-3">
                                    <div className="summary">
                                        <h3 className="summary-title">Votre commande</h3>

                                        <table className="table table-summary">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>

                                                { cartlist.map( ( item, index ) =>
                                                    <tr key={ index }>
                                                        <td> <ALink href={ `/product/default/${item.slug}` }>{ item.name }</ALink></td>
                                                        <td>${ item.sum.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</td>
                                                    </tr>
                                                ) }
                                                <tr className="summary-subtotal">
                                                    <td>Subtotal:</td>
                                                    <td>${ cartPriceTotal( cartlist ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping:</td>
                                                    <td>Free Shipping</td>
                                                </tr>
                                                <tr className="summary-total">
                                                    <td>Total:</td>
                                                    <td>${ cartPriceTotal( cartlist ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <p><strong>Mode de paiement</strong> </p>
                                        <Accordion type="checkout">
                                            <Card title="Visa" expanded={ true }>
                                                <p className='mb-2 font-weight-bolder'>Veuillez remplir tous les champs suivants:</p>
                                                <div className='input-group'>
                                                    <input type="text" placeholder='Numero de la carte' className="form-control" />
                                                </div>
                                                <div className="row">
                                                    <div className='col input-group'>
                                                        <input type="text" placeholder='MM/YY' className="form-control" />
                                                    </div>
                                                    <div className='col input-group mr-2'>
                                                        <input type="text" placeholder='CVV' className="form-control" />
                                                    </div>
                                                </div>
                                            </Card>

                                            <Card title="Mvola">
                                                <div className='input-group'>
                                                    <input type="text" placeholder='+26134 ...' className="form-control" />
                                                </div>                                            
                                            </Card>

                                            <Card title="Orange Money">
                                                <div className='input-group'>
                                                    <input type="text" placeholder='+26132 ...' className="form-control" />
                                                </div>                                           
                                            </Card>
                                        </Accordion>

                                        <button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
                                            <span className="btn-text">Place Order</span>
                                            <span className="btn-hover-text">Proceed to Checkout</span>
                                        </button>
                                    </div>
                                </aside>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const mapStateToProps = ( state ) => ( {
    cartlist: state.cartlist.data,
} )

export default connect( mapStateToProps )( Checkout );