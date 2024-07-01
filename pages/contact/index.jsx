import GoogleMapReact from 'google-map-react';
import ALink from '~/components/features/alink';
import PageHeader from "~/components/features/page-header";

const MapComponent = ( { text } ) => <div>{ text }</div>;

function Contact2 () {
    return (
        <div className="main">
            <PageHeader title="Contact us 2" subTitle="Pages" />
            <nav className="breadcrumb-nav border-0 mb-5">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <ALink href="/">Home</ALink>
                        </li>
                        <li className="breadcrumb-item">
                            <ALink href="#">Pages</ALink>
                        </li>
                        <li className="breadcrumb-item active">Contact Us 2</li>
                    </ol>
                </div>
            </nav>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="contact-box text-center">
                                <h3>Office</h3>
                                <address>1 New York Plaza, New York, <br />NY 10004, USA</address>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-box text-center">
                                <h3>Discutons ensemble </h3>

                                <div><a href="mailto:contact.mianava@gmail.com">contact.mianava@gmail.com</a></div>
                                {/* <div><a href="tel:#">+1 987-876-6543</a>, <a href="tel:#">+1 987-976-1234</a></div> */}
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="contact-box text-center">
                                <h3>Réseaux sociaux</h3>

                                <div className="social-icons social-icons-color justify-content-center">
                                    <ALink href="https://www.facebook.com/Mianavaofficiel/" className="social-icon social-facebook" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></ALink>
                                    <ALink href="https://www.instagram.com/_mianava_/" className="social-icon social-instagram" target="_blank" title="Instagram"><i className="icon-instagram"></i></ALink>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="mt-3 mb-5 mt-md-1" />
                    <div className="touch-container row justify-content-center">
                        <div className="col-md-9 col-lg-7">
                            <div className="text-center">
                                <h2 className="title mb-1">Prenez Contact</h2>
                                <p className="lead text-primary">
                                    Collaborez avec Mianava pour créer des expériences exceptionnelles.
							    </p>
                                <p className="mb-3">
                                Pour toute question ou proposition de partenariat, notre équipe est prête à vous aider. Contactez-nous pour explorer ensemble de nouvelles opportunités.
                                </p>
                            </div>

                            <form action="#" className="contact-form mb-2">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <label htmlFor="cname" className="sr-only">Nom</label>
                                        <input type="text" className="form-control" id="cname" placeholder="Nom *" required />
                                    </div>

                                    <div className="col-sm-4">
                                        <label htmlFor="cemail" className="sr-only">Email</label>
                                        <input type="email" className="form-control" id="cemail" placeholder="Email *" required />
                                    </div>

                                    <div className="col-sm-4">
                                        <label htmlFor="cphone" className="sr-only">Téléphone</label>
                                        <input type="tel" className="form-control" id="cphone" placeholder="Téléphone" />
                                    </div>
                                </div>

                                <label htmlFor="csubject" className="sr-only">Sujet</label>
                                <input type="text" className="form-control" id="csubject" placeholder="Sujet" />

                                <label htmlFor="cmessage" className="sr-only">Message</label>
                                <textarea className="form-control" cols="30" rows="4" id="cmessage" required placeholder="Message *"></textarea>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                        <span>Envoyer</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact2;