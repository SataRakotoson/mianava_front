import { Router } from 'next/router';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ALink from '~/components/features/alink';

const loginSubmit = () => {
    alert('login submit')
    Router.push('/')
}

function Login () {
    return (
        <div className="main vh-100">
            <div className="login-page h-100 bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17" style={ { backgroundImage: `url(images/import/colombe2.webp)` } }>
                <div className="container">
                    <div className="form-box">
                        <div className="form-tab">
                            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                                <TabList className="nav nav-pills nav-fill">
                                    <Tab className="nav-item">
                                        <span className="nav-link">AUTHENTIFICATION</span>
                                    </Tab>

                                    <Tab className="nav-item">
                                        <span className="nav-link">INSCRIPTION</span>
                                    </Tab>
                                </TabList>

                                <div className="tab-content">
                                    <TabPanel style={ { paddingTop: "2rem" } }>
                                        <div>
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="singin-email-2">Nom d'utilisateur ou email *</label>
                                                    <input type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="singin-password-2">Mot de passe *</label>
                                                    <input type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                                                </div>

                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SE CONNECTER</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <ALink href="/pages/login" className="forgot-link">Mot de passe oublié?</ALink>
                                                </div>
                                            </form>

                                            {/* SOCIAL MEDIA */}
                                            {/* <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <ALink href="/pages/login" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                    </ALink>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <ALink href="/pages/login" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                    </ALink>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <form action="#">
                                            <div className="form-group">
                                                <label htmlFor="singin-email-2">Nom d'utilisateur ou email *</label>
                                                <input type="text" className="form-control" id="singin-email-2" name="singin-email" required />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="singin-password-2">Mot de passe *</label>
                                                <input type="password" className="form-control" id="singin-password-2" name="singin-password" required />
                                            </div>

                                            <div className="form-footer">
                                                <button type="submit" className="btn btn-outline-primary-2">
                                                    <span>S'INSCRIRE</span>
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>
                                            </div>
                                        </form>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;