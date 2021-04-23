import { useEffect, useState } from 'react'
import { axiosWithAuth } from '../helpers/AxiosWithAuth'

const FriendList = (props) => {
    const [friends, setFriends]= useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch(err => console.log({ err }))
    }, [])
    return (
        <div> 
            <h2>friends</h2>
            {friends.map(friend => (
                <p key={friend.id}>{friend.name}</p>
            ))}
        </div>
    )
}

export default FriendList;