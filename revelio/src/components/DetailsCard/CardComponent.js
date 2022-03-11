import React from "react";
	
	import { Card, CardBody, Col, Button, CardImg } from "reactstrap";
	
	import { Fade } from "react-reveal";
	
	const CardComponent = ({ data }) => {
		return (
			<Col lg="6">
				<Fade bottom duration={1000} distance="40px">
					<Card className="shadow-lg--hover shadow mt-4">
                        <CardImg
                        alt="Card image cap"
                        src="https://drive.google.com/uc?export=view&id=197NOUxG174_z9lJmVKMN_4xTE9HpqaJh"
                        top
                        width="100%"
                        />
						<CardBody>
							<div className="d-flex px-3">
								<div className="pl-4">
									{/* <h3>{data.name}</h3> */}
                                    <h3>Card</h3>
									{/* <p className="description mt-3">{data.desc}</p> */}
                                    <p className="description mt-3">abc</p>
									{/* {data.github ? ( */}
										<Button
											className="btn-icon"
											color="github"
											// href={data.link}
											target="_blank"
										>
											<span className="btn-inner--icon">
												<i className="fa fa-github" />
											</span>
										</Button>
									{/* ) : null} */}
									{/* {data.link ? ( */}
										<Button
											className="btn-icon"
											color="success"
											// href={data.link}
											target="_blank"
										>
											<span className="btn-inner--icon">
												<i className="fa fa-arrow-right mr-2" />
											</span>
											<span className="nav-link-inner--text ml-1">
												Demo
											</span>
										</Button>
									{/* ) : null} */}
								</div>
							</div>
						</CardBody>
					</Card>
				</Fade>
			</Col>
		);
	};
	
	export default CardComponent;