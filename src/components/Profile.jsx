import { useState, useEffect } from "react"
import Bio from "./Bio"

const Profile = ({ delay }) => {

    const [imageURL, setImageURL] = useState(null)
    const [bioText, setBioText] = useState(null)

    useEffect(() => {

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/photos', { mode: "cors" })
                .then((res) => res.json())
                .then((res) => setImageURL(res[0].url))
                .catch((err) => console.error(err))
        }, delay)

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/photos', { mode: "cors" })
                .then((res) => res.json())
                .then((res) => setBioText('I like long walks on the beach and JavaScript'))
                .catch((err) => console.error(err))
        }, delay + 2000)

    }, [delay])

    return (

        (imageURL && (
            <div>
                <h3>Username</h3>
                <img src={imageURL} alt={"profile"} />
                <Bio bioText={bioText} />
            </div>
        )) || <h1>Loading...</h1>
    )
}

export default Profile