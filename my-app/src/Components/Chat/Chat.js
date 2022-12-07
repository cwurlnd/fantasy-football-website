import React, { useEffect, useState } from "react";
import { getAllUsers, getChats, addChat } from "../../Common/Services/Service";
import * as Env from "../../environments";
import Parse from "parse";
import ChatForm from "./ChatForm";


export default function Chat() {
    const [users, setUsers] = useState([]);
    const [chats, setChats] = useState([]);
    const [add, setAdd] = useState(false);
    const [text, setChat] = useState();

    useEffect(() => {
        getAllUsers().then((users) => {
            setUsers(users);
        });
      }, []);

    useEffect(() => {
        getChats().then((chats) => {
            setChats(chats);
        });
    }, []);

    // Handle clicking submit to send the chat
    const onClickHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    // Handle any changes in chat
    const onChangeHandler = (e) => {
        e.preventDefault();
        setChat(e.target.value);
    };

    // Actually add the league to the database
    useEffect(() => {
        if (text && add) {
            addChat(text).then((newChat) => {
                // alert("Sent a message!");
                setAdd(false);
                document.getElementById("chatInput").value = "";
            });
        }
    }, [text, add]);

    // live query
    var client = new Parse.LiveQueryClient({
        applicationId: Env.APPLICATION_ID,
        serverURL: 'wss://wwffb.b4a.io',
        javascriptKey: Env.JAVASCRIPT_KEY
    });
    client.open();
    
    var query = new Parse.Query('Message');
    query.ascending('createdAt').limit(5);
    var subscription = client.subscribe(query);
    
    subscription.on('open', () => {
        console.log('subscription opened');
    });
    
    subscription.on('create', (object) => {
        console.log('parse object created');
        // console.log(object.get("text"));
        // console.log(object.get("sentBy"));
        getChats().then((chats) => {
            setChats(chats);
        });
    });

    return (
      <section id="temp">
        <h1>Wade Wurl Fantasy Football Chat:</h1>

        {/* Chat */}

        <div>
            {chats.length > 0 && (
                <ul>
                    {chats.map((chat) => (
                    <div>
                        <span>
                        <li key={chat.id}>{chat.get("user").get("firstName")} {chat.get("user").get("lastName")} : <b>{chat.get("text")}</b></li>{" "}
                        </span>
                    </div>
                    ))}
                </ul>
            )}
        </div>
        <ChatForm onClick={onClickHandler} onChange={onChangeHandler} />
      </section>
    );
}