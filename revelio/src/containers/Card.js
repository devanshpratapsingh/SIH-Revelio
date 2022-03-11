import React from 'react';
	
	import { cardata } from '../components/cards/cardcomp';
	import {
	    Container,
	    Row,
	} from "reactstrap";
	import CardComponent from '../components/DetailsCard/CardComponent';
	import { Fade } from 'react-reveal';
	
	const Card = () => {
	    return ( 
	        <section className="section section-lg">
	            <Container>
	              <Fade bottom duration={1000} distance="40px">
	              <div className="d-flex p-4">
	                    <div>
	                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
	                        <i className="ni ni-laptop text-info" />
	                        </div>
	                    </div>
	                    <div className="pl-4">
	                        <h4 className="display-3 text-info">Projects</h4>
	                    </div>
	                </div>
	                <Row className="row-grid align-items-center">
	                    {
	                        cardata.map((data, i) => {
	                            return <CardComponent key={i} data={data} />
	                        })
	                    }
	                </Row>
	              </Fade>
	            </Container>
	          </section>
	     );
	}
	 
	export default Card;