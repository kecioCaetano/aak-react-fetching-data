import { useState, useEffect } from "react";

const useImageURL = () => {

    const [imageUrl, setImageUrl] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://picsum.photos/v2/list", {
            headers: {
                "User-Agent": "KecioCaetano"
            }
        })
            .then((res) => {
                if (res.status >= 400) {
                    throw new Error('server error')
                }

                return res.json()
            })
            .then((res) => setImageUrl(res[0].download_url))
            .catch((err) => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { imageUrl, error, loading }
}

const Image = () => {

    const { imageUrl, error, loading } = useImageURL()

    if (loading) return <p>Loading...</p>
    if (error) return <p>A network error was encountered!</p>

    return (
        imageUrl && (
            <>
                <h1>An image</h1>
                <img src={imageUrl} alt={"Placeholder text"} />
            </>
        )
    )

}

export default Image;