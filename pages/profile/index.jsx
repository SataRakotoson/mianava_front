import Link from 'next/link';
import React, { useState } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';

import ALink from '~/components/features/alink';
import PageHeader from '~/components/features/page-header';

function Profile () {

    const [activePurchase, setActivePurchase] = useState()

    function toOrder ( e ) {
        e.preventDefault();
        document
            .querySelector( '.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(2)' )
            .click();
    }

    function toAddress ( e ) {
        e.preventDefault();
        document
            .querySelector( '.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(4)' )
            .click();
    }

    function toAccount ( e ) {
        e.preventDefault();
        document
            .querySelector( '.nav-dashboard .react-tabs__tab-list .nav-item:nth-child(5)' )
            .click();
    }

    return (
        <div className="main">
            <PageHeader title="Mon compte" subTitle="Shop" />

            <div className="page-content mt-8">
                <div className="dashboard">
                    <div className="container">
                        <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                            <Tabs selectedTabClassName="active show">
                                <div className="row">
                                    <aside className="col-md-4 col-lg-3 mb-md-0 mb-2">
                                        <TabList>
                                            <Tab className="nav-item">
                                                <span className="nav-link">Mes achats</span>
                                            </Tab>
                                            <Tab className="nav-item">
                                                <span className="nav-link">Parametres du compte</span>
                                            </Tab>
                                            <Tab className="nav-item">
                                                <ALink href="/" className="nav-link">Deconnexion</ALink>
                                            </Tab>
                                        </TabList>
                                    </aside>

                                    <div className="col-md-8 col-lg-9" style={ { marginTop: "1rem" } }>
                                        <div className="tab-pane">
                                            <TabPanel>
                                                {
                                                    activePurchase ? (
                                                        <div className="purchase">
                                                            {
                                                                [1, 2, 3].map((item,index) => (
                                                                    <div className='purchase-item'>
                                                                        <div className='d-flex row justify-content-between'>
                                                                            <div className='col-md-6'>
                                                                                <p>Achat du <strong className='text-high-pink'>24/04/2024</strong></p>
                                                                                <div className='my-4'>
                                                                                    <p className='m-0'>Expediteur: Mianava</p>
                                                                                    <p className='m-0'>Destinataire: John Doe</p>
                                                                                </div>
                                                                                <p>Nombre d'articles achetes: <strong>4</strong></p>
                                                                            </div>
                                                                            <div className='px-4 d-flex flex-column justify-content-between'>
                                                                                <p>Total: <strong>650.000Ar</strong></p>
                                                                                <Link href='#' className='btn btn-primary'>Plus d'info</Link>
                                                                            </div>
                                                                        </div>
                                                                        <hr />
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    ) : (
                                                        <div className='invoice border p-5 rounded'> 
                                                            <div className="top d-flex justify-content-between">
                                                                <div className="left">
                                                                    <p className='m-0'><strong>Mianava</strong></p>
                                                                    <p>Lot bla bla bla</p>
                                                                </div>
                                                                <div className="right">
                                                                    <p className='m-0'>Facture de:</p>
                                                                    <p className='m-0'>John Doe</p>
                                                                    <p className='m-0'>Fianarantsoa</p>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p><strong>Adresse de livraison:</strong></p>
                                                                <p className='m-0'>John Doe</p>
                                                                <p className='m-0 mb-2'>Fianarantsoa</p>
                                                                <p><strong>Date: </strong>25/04/2024</p>
                                                            </div>
                                                            <div>
                                                                <table className="table">
                                                                    <thead className="thead-dark">
                                                                        <tr>
                                                                            <th scope='col' className='pl-4'>#</th>
                                                                            <th scope='col'>Nom item</th>
                                                                            <th scope='col'>Prix Unitaire</th>
                                                                            <th scope='col'>Quantite</th>
                                                                            <th scope='col'>Total</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td scope='row' className='pl-4'>1</td>
                                                                            <td>Produit de test</td>
                                                                            <td>60.000Ar</td>
                                                                            <td>1</td>
                                                                            <td>60.000Ar</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <p><strong>Total: </strong>60.000Ar</p>
                                                        </div>
                                                    )
                                                }
                                            </TabPanel>

                                            <TabPanel>
                                                <form action="#">
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

                                                    <label>Display Name *</label>
                                                    <input type="text" className="form-control" required />
                                                    <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small>

                                                    <label>Email address *</label>
                                                    <input type="email" className="form-control" required />

                                                    <label>Current password (leave blank to leave unchanged)</label>
                                                    <input type="password" className="form-control" />

                                                    <label>New password (leave blank to leave unchanged)</label>
                                                    <input type="password" className="form-control" />

                                                    <label>Confirm new password</label>
                                                    <input type="password" className="form-control mb-2" />

                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SAVE CHANGES</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>
                                                </form>
                                            </TabPanel>
                                            <TabPanel>
                                                <div></div>
                                            </TabPanel>
                                        </div>
                                    </div>
                                </div>
                            </Tabs>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( Profile );