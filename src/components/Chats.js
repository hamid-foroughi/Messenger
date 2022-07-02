import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase'
import { useHistory } from 'react-router-dom'
import { ChatEngine } from 'react-chat-engine'
import axios from 'axios'

//styles 
import styles from '../components/Chats.module.css';

//components
import Navbar from '../components/Navbar'

//context
import { AuthContext } from '../context/AuthContextProvider'

const Chats = () => {

    const [loading , setLoading] = useState(true)
    const user = useContext(AuthContext)
    const history = useHistory()


    useEffect(() => {
        if(!user) {
            history.push('/')
            return
        }

        axios.get('https://api.chatengine.io/users/me',{
            headers: {
                "project-id": "5f930e3d-bcb2-48cc-8553-36215bcf606a",
                "user-name": user.name,
                "user-secret": user.uid
            }
        })
        
        .then(() => {
            setLoading(false)
        })
        .catch(() => {
            let formData = new FormData()
            formData.append("email" , user.email)
            formData.append("username" , user.email)
            formData.append("secret" , user.uid)
            getFile(user.photoURL)
                .then(avatar => {
                    formData.append("avatar",avatar,avatar.name)
                    axios.post("https://api.chatengine.io/users/" , formData , {
                        headers: {
                            "private-key": "d4394a39-105e-4702-ba8a-cc5be86a6ec3"
                        }
                    })
                    .then(() => setLoading(false))
                    .catch((error) => console.log(error))
                })
        })

    }, [user , history])

    const getFile = async (url) => {
        const response = await fetch(url)
        const data =  response.blob()
        return new File([data] , "usePhoto.jpg" , { type: "image/jpeg"})
    }

    const logoutHandler = async () => {
        await auth.signOut()
        history.push('/')
    }

    if(!user || loading) return 'Loading ...'

    return (
        <div className={styles.container}>
            <Navbar logoutHandler={logoutHandler}/>

            <ChatEngine
                heigth='calc(100vh - 50px)'
                projectID="5f930e3d-bcb2-48cc-8553-36215bcf606a"
                userName={user.name}
                userSecret={user.uid}
            />

        </div>
    );
};

export default Chats;