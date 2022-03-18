import React from "react";
	
	import { Card , Button } from 'react-bootstrap';
	import "./style.css"
	import { Fade } from "react-reveal";

    function Car(props) {
		return (
        //     <Card className="size">
        //     <CardImg
        //     alt="Card image cap"
        //     src="https://drive.google.com/uc?export=view&id=197NOUxG174_z9lJmVKMN_4xTE9HpqaJh"
        //     top
        //     width="100%"
        //     />
        //     <CardBody>
        //         <div className="">
        //             <div className="">
        //                 {/* <h3>{props.name}</h3> */}
        //                 <h3>Card</h3>
        //                 {/* <p className="">{props.desc}</p> */}
        //                 <p className="description mt-3">abc</p>
        //                 {/* {data.price ? ( */}
        //                     <Button
        //                         className=""
        //                         color=""
        //                         // href={data.price}
        //                         target="_blank"
        //                     >
        //                     <span className="">
        //                     Demo
        //                     </span>
        //                     </Button>
        //                  {/* ) : null}  */}
        //                  {/* {data.detail ? (  */}
        //                     <Button
        //                         className=""
        //                         color=""
        //                         // href={data.detail}
        //                         target="_blank"
        //                     >
        //                         <span className="">
        //                             <i className="" />
        //                         </span>
        //                         <span className="">
        //                             Demo
        //                         </span>
        //                     </Button>
        //                  {/* ) : null}  */}
        //             </div>
        //         </div>
        //     </CardBody>
        // </Card>

        <Card className="mar" style={{ width: '20rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.desc.length > 100
          ? props.desc
                .slice(0, 100)
                .concat('...')
          : props.desc}
    </Card.Text>
    <div className="but">
    <Button variant="primary">Go somewhere</Button>
    <Button variant="primary">Go somewhere</Button>
    </div>
  </Card.Body>
</Card>
            );
	};
	
	export default Car;