import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Blog posts</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@vigneshwaran.03.10/things-to-know-before-stepping-in-to-javascript-web-development-e40fa3d1ac74" className="blog-img"><img src="images/blog1.jpg" className="img-responsive" alt="" /></a>
						<div className="desc">
							<span><small>Febraury 26, 2020 </small> | <small> JavaScript </small></span>
							<h3><a href="https://medium.com/@vigneshwaran.03.10/things-to-know-before-stepping-in-to-javascript-web-development-e40fa3d1ac74">Things to know before stepping in to JavaScript web development</a></h3>
							<p>A brief beginner introduction on how to start with JavaScript</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="https://medium.com/@vigneshwaran.03.10/starting-with-angular-91e200e58177" className="blog-img"><img src="images/blog2.jpg" className="img-responsive" alt="" /></a>
						<div className="desc">
							<span><small>March 1, 2020 </small> | <small> Angular</small></span>
							<h3><a href="https://medium.com/@vigneshwaran.03.10/starting-with-angular-91e200e58177">Starting with Angular</a></h3>
							<p>What is Angular and how to build a simple Hello World application using it.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="https://medium.com/@vigneshwaran.03.10/whats-the-buzz-about-react-bac9e38f2a8b" className="blog-img"><img src="images/blog3.jpg" className="img-responsive" alt="" /></a>
						<div className="desc">
							<span><small>April 1, 2020 </small> | <small> React </small></span>
							<h3><a href="https://medium.com/@vigneshwaran.03.10/whats-the-buzz-about-react-bac9e38f2a8b">What’s the buzz about React?</a></h3>
							<p>How popular is React and why it took over it's competitors. Also includes a beginner introduction to start with React development.</p>
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
