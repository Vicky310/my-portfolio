import React, { Component } from 'react';


export default class Contact extends Component {
  render() {
    return (
      <div>
			<section className="colorlib-contact" data-section="contact">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3">
							<span className="heading-meta">How to reach me</span>
							<h2 className="colorlib-heading">Contact</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-md-5">
							<div className="colorlib-feature colorlib-feature-sm">
								<div className="colorlib-icon">
									<i className="icon-globe-outline"></i>
								</div>
								<div className="colorlib-text">
									<p>balasubv@uwindsor.ca</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm">
								<div className="colorlib-icon">
									<i className="icon-map"></i>
								</div>
								<div className="colorlib-text">
									<p>242 Brock Street Windsor, Ontario N9C2S6</p>
								</div>
							</div>

							<div className="colorlib-feature colorlib-feature-sm">
								<div className="colorlib-icon">
									<i className="icon-phone"></i>
								</div>
								<div className="colorlib-text">
									<p><a href="tel://">+1 519-992-8272</a></p>
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
