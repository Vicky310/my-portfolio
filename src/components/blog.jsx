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
									<a href="https://medium.com/@vigneshwaran.03.10/things-to-know-before-stepping-in-to-javascript-web-development-e40fa3d1ac74" className="blog-img" target="_blank" rel="noopener noreferrer"><img src="images/blog1.jpg" className="img-responsive" alt="" /></a>
									<div className="desc">
										<span><small>Febraury 26, 2020 </small> | <small> JavaScript </small></span>
										<h3><a href="https://medium.com/@vigneshwaran.03.10/things-to-know-before-stepping-in-to-javascript-web-development-e40fa3d1ac74" target="_blank" rel="noopener noreferrer">Things to know before stepping in to JavaScript web development</a></h3>
										<p>A brief beginner introduction on how to start with JavaScript</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
								<div className="blog-entry">
									<a href="https://medium.com/@vigneshwaran.03.10/starting-with-angular-91e200e58177" className="blog-img" target="_blank" rel="noopener noreferrer"><img src="images/blog2.jpg" className="img-responsive" alt="" /></a>
									<div className="desc">
										<span><small>March 1, 2020 </small> | <small> Angular</small></span>
										<h3><a href="https://medium.com/@vigneshwaran.03.10/starting-with-angular-91e200e58177" target="_blank" rel="noopener noreferrer">Starting with Angular</a></h3>
										<p>What is Angular and how to build a simple Hello World application using it.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://medium.com/@vigneshwaran.03.10/whats-the-buzz-about-react-bac9e38f2a8b" className="blog-img" target="_blank" rel="noopener noreferrer"><img src="images/blog3.jpg" className="img-responsive" alt="" /></a>
									<div className="desc">
										<span><small>April 1, 2020 </small> | <small> React </small></span>
										<h3><a href="https://medium.com/@vigneshwaran.03.10/whats-the-buzz-about-react-bac9e38f2a8b" target="_blank" rel="noopener noreferrer">What’s the buzz about React?</a></h3>
										<p>How popular is React and why it took over it's competitors. Also includes a beginner introduction to start with React development.</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://medium.com/@vigneshwaran.03.10/angular-vs-react-vs-vue-a77645361ada" className="blog-img" target="_blank" rel="noopener noreferrer"><img src="images/blog4.jpg" className="img-responsive" alt="" /></a>
									<div className="desc">
										<span><small>May 12, 2020 </small> | <small> Angular, React, Vue </small></span>
										<h3><a href="https://medium.com/@vigneshwaran.03.10/angular-vs-react-vs-vue-a77645361ada" target="_blank" rel="noopener noreferrer">Angular Vs React Vs Vue</a></h3>
										<p>A simple comparison of the top 3 JavaScript frameworks.</p> 
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="blog-entry">
									<a href="https://medium.com/@vigneshwaran.03.10/what-is-deno-and-should-we-start-learning-it-6d5bdc2a3acf" className="blog-img" target="_blank" rel="noopener noreferrer"><img src="images/blog5.jpg" className="img-responsive" alt="" /></a>
									<div className="desc">
										<span><small>May 23, 2020 </small> | <small> Deno.js </small></span>
										<h3><a href="https://medium.com/@vigneshwaran.03.10/what-is-deno-and-should-we-start-learning-it-6d5bdc2a3acf" target="_blank" rel="noopener noreferrer">What is Deno and should we start learning it?</a></h3>
										<p>An Overview of the new JavaScript player Deno.js!</p> 
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
