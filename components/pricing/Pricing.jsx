import React from 'react'
import ALink from '../features/alink'

const Pricing = () => {
  return (
    <div className='row justify-content-between'>
        <div className='col-md-4 px-8'>
            <div className="card rounded">
                <div className="card-body">
                    <div className="text-center">
                        <p>Image</p>
                        <p>PACK</p>
                        <h2 className='text-pink'>Gold</h2>
                        <h3>100 000Ar/mois</h3>
                        <p className='mb-4'>+ com 5% sur le prix de vente</p>
                        <ALink href="#" className="btn btn-primary btn-rounded">Contacter</ALink>
                    </div>
                    <hr />
                    <div className="pricing-list">
                        <ul>
                            <li className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Publications illimitées sur nos réseaux</li>
                            <li><i className='icon-check-circle-o'></i>Livraison à notre charge</li>
                            <li><i className='icon-check-circle-o'></i>Paiement direct</li>
                            <li><i className='icon-check-circle-o'></i>Visuel préparé par nos soins</li>
                            <li className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Nous envoyer le descriptif et les photos sur fond blanc à l'avance pour qu'on puisse préparer et programmer les publications</li>
                            <li  className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Si une vente se fait, un livreur viendra récupérer le produit chez vous et vous paiera directement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-4 px-8'>
            <div className="card rounded">
                <div className="card-body">
                    <div className="text-center">
                        <p>Image</p>
                        <p>PACK</p>
                        <h2 className='text-pink'>Argent</h2>
                        <h3>50 000Ar/mois</h3>
                        <p className='mb-4'>+ com 10% sur le prix de vente</p>
                        <ALink href="#" className="btn btn-primary btn-rounded">Contacter</ALink>
                    </div>
                    <hr />
                    <div className="pricing-list">
                        <ul>
                            <li className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Publications illimitées sur nos réseaux</li>
                            <li><i className='icon-check-circle-o'></i>Livraison à notre charge</li>
                            <li><i className='icon-check-circle-o'></i>Visuel préparé par nos soins</li>
                            <li className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Nous envoyer le descriptif et les photos sur fond blanc à l'avance pour qu'on puisse préparer et programmer les publications</li>
                            <li  className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Si une vente se fait, les articles peuvent être déposé contre paiement au niveau de notre dépôt ou un livreur peut venir récupérer moyennant des frais en sus de 4500 Ar</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-md-4 px-8'>
            <div className="card rounded">
                <div className="card-body">
                    <div className="text-center">
                        <p>Image</p>
                        <p>PACK</p>
                        <h2 className='text-pink'>Bronze</h2>
                        <h3>30 000Ar/mois</h3>
                        <p className='mb-4'>+ com 10% sur le prix de vente</p>
                        <ALink href="#" className="btn btn-primary btn-rounded">Contacter</ALink>
                    </div>
                    <hr />
                    <div className="pricing-list">
                        <ul>
                            <li className='d-flex align-items-start'><i className='icon-check-circle-o'></i>10 Publications</li>
                            <li><i className='icon-check-circle-o'></i>Livraison à notre charge</li>
                            <li><i className='icon-check-circle-o'></i>Visuel préparé par nos soins</li>
                            <li className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Nous envoyer le descriptif et les photos sur fond blanc à l'avance pour qu'on puisse préparer et programmer les publications</li>
                            <li  className='d-flex align-items-start'><i className='icon-check-circle-o'></i>Si une vente se fait, un livreur viendra récupérer le produit chez vous et vous paiera directement</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing