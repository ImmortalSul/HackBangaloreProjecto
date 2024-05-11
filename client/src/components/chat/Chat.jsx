
import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person1</span>
          <p>Hey does this place have a braile menu</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person2</span>
          <p>Good food big man</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person3</span>
          <p>It would be really helpful if you would add few more ammenities for people who cant speak loud</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person4</span>
          <p>Lorem ipsum </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person5</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>Person6</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              Dummy
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>GO make backend lol</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>noo T-T it too late me tired</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>NUhuh fck u</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>NO FUCK U I AM THE CREATOR WHO THE FUCK ARE U TALKIN TO HUH</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Calm down cunt its you only</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Oh u mean the schizo meltdown, the bot wasnt lying then?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Technically it wasnt but are u sure u are an entity worth existing</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Good question, next</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p> i am bored u can go sleep</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Thanks Uwu</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;