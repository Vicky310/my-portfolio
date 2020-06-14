import React, { Component } from 'react';
import { Button, Modal } from 'antd';

export default class Projects extends Component {
	state = {
		showMessenger: false,
		showBurger: false,
		showWinHacks: false,
		showSciOfRelief: false,
		showDiagnosis: false,
		showNodeShop: false
	};

	showMessengerModal = () => {
		this.setState({
			showMessenger: true,
		});
	};

	handleCloseMessenger = e => {
		this.setState({
			showMessenger: false,
		});
	};

	showBurgerModal = () => {
		this.setState({
			showBurger: true,
		});
	};

	handleCloseBurger = e => {
		this.setState({
			showBurger: false,
		});
	};

	showWinHacksModal = () => {
		this.setState({
			showWinHacks: true,
		});
	};

	handleCloseWinHacks = e => {
		this.setState({
			showWinHacks: false,
		});
	};

	showSciOfReliefModal = () => {
		this.setState({
			showSciOfRelief: true,
		});
	};

	handleCloseSciOfRelief = e => {
		this.setState({
			showSciOfRelief: false,
		});
	};

	showDiagnosisModal = () => {
		this.setState({
			showDiagnosis: true,
		});
	};

	handleCloseDiagnosis = e => {
		this.setState({
			showDiagnosis: false,
		});
	};

	showNodeShopModal = () => {
		this.setState({
			showNodeShop: true,
		});
	};

	handleCloseNodeShop = e => {
		this.setState({
			showNodeShop: false,
		});
	};


	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Projects</h2>
							</div>
						</div>
						<div className="row">
						<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/node-shop.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3 style={{ fontWeight: 'bold' }}>Node Shop</h3>
											<span style={{ color: 'black', fontWeight: 'bold' }}>Node.js, MongoDB</span>
											<p className="icon">
												<span><a href="https://github.com/Vicky310/Node-Shop" target="_blank" rel="noopener noreferrer"><i className="icon-github" />Code</a></span>
												<span><a href="https://node-shop-vicky.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> Demo</a></span>
												<span onClick={this.showNodeShopModal}><a href><i className="icon-info" />Info</a></span>
												<Modal
													title="Node Shop"
													visible={this.state.showNodeShop}
													onOk={this.handleCloseNodeShop}
													closable={false}
													footer={[
														<Button key="Ok" onClick={this.handleCloseNodeShop}>
															Return
                                                    </Button>,

													]}
												>
													<p>
														My most recent application created entirely on Node.js. I was working on it to test my backend development skills. It turned out to be a full scale E-Commerce application
														with Stripe for payment and MongoDB for storage. Go ahead and play with it in the Demo link!
                                                </p>
												</Modal>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{ backgroundImage: 'url(images/messenger.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3 style={{ fontWeight: 'bold' }}>Lets Talk Messenger</h3>
											<span style={{ color: 'black', fontWeight: 'bold' }}>React, ExpressJS, MongoDB</span>
											<p className="icon">
												<span><a href="https://github.com/Vicky310/MongoDBMessenger" target="_blank" rel="noopener noreferrer"><i className="icon-github" />Code</a></span>
												<span onClick={this.showMessengerModal}><a href><i className="icon-info" />Info</a></span>
												<Modal
													title="Lets Talk Messenger"
													visible={this.state.showMessenger}
													onOk={this.handleCloseMessenger}
													closable={false}
													footer={[
														<Button key="Ok" onClick={this.handleCloseMessenger}>
															Return
                                                    </Button>,

													]}
												>
													<p>
														A simple messenger with React and ExpressJS. It is a team project using MongoDB as database and allowing real time communication between users who sign up to the application.
                                                </p>
												</Modal>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{ backgroundImage: 'url(images/burger.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3 style={{ fontWeight: 'bold' }}>Burger Builder</h3>
											<span style={{ color: 'black', fontWeight: 'bold' }}>React, Redux, Firebase</span>
											<p className="icon">
												<span><a href="https://github.com/Vicky310/BurgerBuilderWebApplication" target="_blank" rel="noopener noreferrer"><i className="icon-github" />Code</a></span>
												<span><a href="https://react-burgerapplication.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> Demo</a></span>
												<span onClick={this.showBurgerModal}><a href><i className="icon-info" />Info</a></span>
												<Modal
													title="Burger Builder"
													visible={this.state.showBurger}
													onOk={this.handleCloseBurger}
													closable={false}
													footer={[
														<Button key="Ok" onClick={this.handleCloseBurger}>
															Return
                                                    </Button>,

													]}
												>
													<p>
														Started out to quench my thirst for React and ended up creating this full scale React Project with Redux for state management and Firebase for database.
                                                </p>
												</Modal>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{ backgroundImage: 'url(images/winhacks.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3 style={{ fontWeight: 'bold' }}>Lost In The Separation (WinHacks 2020)</h3>
											<span style={{ color: 'black', fontWeight: 'bold' }}>React, Redux, Firebase</span>
											<p className="icon">
												<span><a href="https://github.com/Vicky310/Winhacks2020" target="_blank" rel="noopener noreferrer"><i className="icon-github" />Code</a></span>
												<span><a href="https://winhacks2020-88149.firebaseapp.com/" target="_blank" rel="noopener noreferrer"><i className="icon-eye" /> Demo</a></span>
												<span onClick={this.showWinHacksModal}><a href><i className="icon-info" />Info</a></span>
												<Modal
													title="Lost In The Separation"
													visible={this.state.showWinHacks}
													onOk={this.handleCloseWinHacks}
													closable={false}
													footer={[
														<Button key="Ok" onClick={this.handleCloseWinHacks}>
															Return
                                                    </Button>,

													]}
												>
													<p>
														A prototype built for WinHacks 2020(In 36 hours): The application is a website that allows users to connect to those around them through a news forum board.
														This board contains updates from the members of the community about their situations. Additionally,
														the user will be given the option to connect to a random community around the world. This will embark them on a journey through five communities
														to reach the sixth and final community. Within each community the user visits, they will be able to interact, through forums, with members of the community.

														A community is defined as a high density cluster of users. Upon sign-up, the user will be assigned a community based upon their location.
                                                </p>
												</Modal>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/sciofrelief.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3 style={{ fontWeight: 'bold' }}>Sci of Relief Web Application</h3>
											<span style={{ color: 'black', fontWeight: 'bold' }}>Angular, Dialogflow</span>
											<p className="icon">
												<span onClick={this.showSciOfReliefModal}><a href><i className="icon-info" />Info</a></span>
												<Modal
													title="Sci of Relief"
													visible={this.state.showSciOfRelief}
													onOk={this.handleCloseSciOfRelief}
													closable={false}
													footer={[
														<Button key="Ok" onClick={this.handleCloseSciOfRelief}>
															Return
                                                    </Button>,

													]}
												>
													<p>
														I led a team of 3 to create a web application for Department of Science, University of Windsor. The application is intended to provide recommendations to students
														who experience stress in their student life to better tackle their issues matching them with University Wellness groups. The application also includes a chatbot which
														answers specific questions instead of walking through the questionnaire.
                                                </p>
												</Modal>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{ backgroundImage: 'url(images/diseaseDiagnosis.jpg)' }}>
									<div className="desc">
										<div className="con">
											<h3 style={{ fontWeight: 'bold' }}>Disease diagnosis using Hadoop MapReduce</h3>
											<span style={{ color: 'black', fontWeight: 'bold' }}>Java, Hadoop</span>
											<p className="icon">
												<span><a href="https://github.com/Vicky310/HadoopDiseaseAnalyzer" target="_blank" rel="noopener noreferrer"><i className="icon-github" />Code</a></span>
												<span onClick={this.showDiagnosisModal}><a href><i className="icon-info" />Info</a></span>
												<Modal
													title="Disease diagnosis using Hadoop"
													visible={this.state.showDiagnosis}
													onOk={this.handleCloseDiagnosis}
													closable={false}
													footer={[
														<Button key="Ok" onClick={this.handleCloseDiagnosis}>
															Return
                                                    </Button>,

													]}
												>
													<p>
														It was my Undergrad capestone project. The personalized healthcare system uses enormous amount of unstructured data gathered from
														various biomedical institutes and hospitals and using
														the map reduce technique the unstructured data is
														analyzed and based on the symptoms given by the
														patient the disease is effectively diagnosed and the best
														drug is identified.
                                                </p>
												</Modal>
											</p>
										</div>
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
