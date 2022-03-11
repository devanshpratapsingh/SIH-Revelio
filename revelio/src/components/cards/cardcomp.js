import React from 'react';
import "./style.css"

function CardCom() {
    return (
      <div className="Cards">
        <div className='img'>
        <img className='img' src='https://drive.google.com/uc?export=view&id=197NOUxG174_z9lJmVKMN_4xTE9HpqaJh'
        alt="Ranthambore" />
        </div>
        <div>
            <h1>Hello</h1>
        </div>
      </div>
    );
  }
  
  export default CardCom;

  export const cardata = [
		{
			name: "Ranthambore",
			desc: "Desc",
			// link: "https://thestartupguide.herokuapp.com/",
			// github: "https://github.com/rabvik-innovations/Rabvik_Innovations-2",
		},
		{
			name: "Disease predictor",
			desc: "This a an ML project which can predict a disease on basis of symptoms provided with a accuracy of 98% only if all the symptoms and provided correctly",
			// link: "https://prediction-disease.herokuapp.com/",
			// github: "https://github.com/anupam1806/disease-predictor",
		},
		// {
		// 	name: "Todo List",
		// 	desc: "Todo list website in which user can add and delete items.",
		// 	link: "https://gentle-wildwood-86117.herokuapp.com/",
		// 	github: "https://github.com/anupam1806/Todo-List",
		// },
		// {
		// 	name: "Basic Banking Site",
		// 	desc: "It contains basic banking operations such as transfer money from one account to another account.",
		// 	link: "https://anupam1806.github.io/Sparks-Bank/",
		// 	github: "https://github.com/anupam1806/Sparks-Bank",
		// },
		// {
		// 	name: "Google keep",
		// 	desc: "It is a note storing web application here user can store, delete notes for future reference",
		// 	link: "https://keep-google.herokuapp.com/",
		// 	github: "https://github.com/anupam1806/keeper",
		// },
		// {
		// 	name: "Chatting App",
		// 	desc: "It is real time chat application in which one or more users can make a room and chat with each other, send images. It also has addtional features like when a new message arrives a notification sound come, it show online status on user icon, we can see all the images in room in photos section.",
		// 	link: "https://app-chatting.netlify.app/",
		// 	github: "https://github.com/anupam1806/chat-app",
		// },
		// {
		// 	name: "Zoom Clone",
		// 	desc: "It is a real time video call application in which upto 5 users can join a call and communicate which each other. It also has chat section in which users can send messages.",
		// 	link: "https://zoom-00clone.herokuapp.com/",
		// 	github: "https://github.com/anupam1806/zoomClone",
		// },
	];