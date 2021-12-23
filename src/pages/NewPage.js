import React, { Component } from 'react';

export default class NewPage extends Component {
    render() {
        return (
            <div>
                <header>
                    <div className="collapse bg-dark" id="navbarHeader">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-md-7 py-4">
                                    <h4 className="text-white">About</h4>
                                    <p className="text-muted">Welcome to Cat Explorer. This site explains about some of the cat breeds along with
                                        their
                                        photo.</p>
                                </div>
                                <div className="col-sm-4 offset-md-1 py-4">
                                    <h4 className="text-white">Contact</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                        <li><a href="#" className="text-white">Like on Facebook</a></li>
                                        <li><a href="#" className="text-white">Email me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar navbar-dark bg-dark shadow-sm">
                        <div className="container">
                            <a href="#" className="navbar-brand d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} aria-hidden="true" className="me-2" viewBox="0 0 24 24">
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                    <circle cx={12} cy={13} r={4} />
                                </svg>
                                <strong>Cat Explorer</strong>
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                        </div>
                    </div>
                </header>

                <div>
                    <main>
                        <section className="py-5 text-center container">
                            <div className="row py-lg-5">
                                <div className="col-lg-6 col-md-8 mx-auto">
                                    <h1 className="fw-light">Cat Explorer</h1>
                                    <p className="lead text-muted">Welcome to Cat Explorer. This site explains about some of the cat breeds along with
                                        their photo.</p>
                                    <p>Click below to receive notifications!</p>
                                    <p>
                                        <button id="notifications" className="btn btn-primary">Receive Notifications!</button>
                                        <a href="javascript:void(0)" onClick={() => alert('Thank you!')} className="btn btn-primary my-2">I love cats</a>
                                        <a href="javascript:void(0)" onClick={() => alert('Good to know!')} className="btn btn-secondary my-2">I am a dog
                                            person</a>
                                    </p>
                                    <button type="button" className="btn btn-primary">
                                        Notifications <span id="badge-text" className="badge bg-secondary">0</span>
                                    </button>
                                </div>
                            </div>
                        </section>
                        <div className="album py-5 bg-light">
                            <div className="container">
                                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/american-shorthair.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">American Shorthair</p>
                                                <p className="card-text">The American Shorthair is a true breed of working cat. The general effect is that
                                                    of a strongly built, well balanced, symmetrical cat with conformation indicating power, endurance, and
                                                    agility.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/birman-detail.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">Birman</p>
                                                <p className="card-text">A cat of mystery and legend, the Birman is a colorpointed cat with long silky hair
                                                    and four pure white feet. They are often strongly built, elongated and stocky, neither svelte nor
                                                    stocky.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/bengal-detail.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">Bengal</p>
                                                <p className="card-text">The Bengal is a domestic cat that has physical features distinctive to the small
                                                    forest-dwelling wildcats, and with the loving, dependable temperament of a family pet.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/calico.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">Calico</p>
                                                <p className="card-text">Calico cats are wonderful! Keep in mind, calico cats are not a breed. Instead,
                                                    calico refers to their tri-color coats which include black, orange and white.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/domestic_long_hair.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">Domestic Long Hair</p>
                                                <p className="card-text">A relative of the domestic short and medium haired cats, the domestic long hair is
                                                    a sight to behold. Because the long hair gene is a recessive trait.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/laperm.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">LaPerm</p>
                                                <p className="card-text">The LaPerm breed is a naturally occurring mutation producing curly coats in both
                                                    long- and shorthaired cats. They are medium sized, of moderate type.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/maine-coon-detail.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">Maine Coon</p>
                                                <p className="card-text">The Maine Coon is solid, rugged, and can endure a harsh climate. A distinctive
                                                    characteristic of this cat is the smooth, shaggy coat.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/munchkin-detail.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">Munchkin</p>
                                                <p className="card-text">The Munchkin cat has no problem getting around the same as its longer-limbed feline
                                                    friends — it just might take them a few extra steps along the way.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-sm">
                                            <img src="images/ocicat-detail.jpeg" className="card-img-top cat-img img-responsive" />
                                            <div className="card-body">
                                                <p className="text-center fw-bold">Ocicat</p>
                                                <p className="card-text">The Ocicat is a medium to large, well-spotted agouti cat of moderate type. This
                                                    breed displays the look of an athletic animal.</p>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                                    </div>
                                                    <i className="fas fa-star" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <footer className="text-muted py-5">
                        <div className="container">
                            <p className="float-end mb-1">
                                <a href="#">Back to top</a>
                            </p>
                            <p className="mb-1">This Cat Explorer website example uses Bootstrap, Font awesome, and Jquery.</p>
                        </div>
                    </footer>
                    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                        <div id="liveToast" className="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                            </div>
                            <div className="toast-body">
                                Feature In Progress.
                            </div>
                        </div>
                    </div>
                    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
                        <div id="liveToastFav" className="toast fade hide" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                            </div>
                            <div className="toast-body">
                                Updated Favorites!
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}