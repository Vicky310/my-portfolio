import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Tazwiz - MERN Stack developer intern<span> July 2020 - December 2020</span></h2>
                        <p> Developed new features for Tazwiz.com handling responsive design in front end using React and creating new APIs in Node.js backend.</p>
                        <p> Worked closely with Chief Architect to build Tazwiz mobile application for both Android and iOS from scratch in React Native</p>
                        <p> Developed a care home booking system with a customer facing web application using React and an Admin application using React Admin </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate student at University of Windsor <span>September 2019 - December 2020</span></h2>
                        <p>I'm pursuing Master of Applied Computing, A profressional course targeted to train you for industry standards. </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer - Accenture Solutions <span>December 2016 - July 2019</span></h2>
                        <p>As a Software Engineer at Accenture I was exposed to the cool things JavaScript could do in a Web application and I was a part of the team responsible for creating a Web application for a Diamond Client of Accenture</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Bachelors of Engineering in Computer Science - Panimalar Engineering College <span>August 2012 - May 2016</span></h2>
                        <p>The spark was created during my high school when I got my first Personal Computer and that resulted in pursuing my Undergrad as a Computer Science major</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}