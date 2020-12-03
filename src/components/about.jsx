import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I like spinning the web and swinging along. Not a <b>Spiderman</b> but a <b>Web developer</b>. (Although I would'nt mind if I'm a Spiderman too :P)</p>
                                            <p>I keep learning new technologies for the love of it and keep creating stuff out of the things I learn. I would love for an opportunity to collaborate, learn, share and of course <b>CREATE!</b> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my interests</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb" />
                                    </span>
                                    <div className="desc" style={{ backgroundColor: 'white' }}>
                                        <h3>Development </h3>
                                        <p>I love building applications using Angular, React, React Native and anything JavaScript and HTML</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3" />
                                    </span>
                                    <div className="desc">
                                        <h3>Learning and Sharing</h3>
                                        <p>I like to learn new things and share them. What's the fun in keeping things to yourself right?</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-book" />
                                    </span>
                                    <div className="desc">
                                        <h3>Bibliophile</h3>
                                        <p>I love reading. Though an amateur and a lot of books to cover, I have read a fair number of books.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-plane" />
                                    </span>
                                    <div className="desc">
                                        <h3>Travel</h3>
                                        <p>I'm a travel freak. I like to travel places. Meet new people. Get new experience .</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}