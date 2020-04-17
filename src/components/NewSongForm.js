import React, { useState, useEffect } from 'react'

const NewSongForm = ({ addSong }) => {
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addSong(title)
        setTitle('')
    }

    // run everytime when components render or the data inside the components update
    useEffect(() => {
        console.log('useEffect hook ran')
    })

    return (
        <form onSubmit={handleSubmit}>
            <label>Song Name:</label>
            <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input type="submit" value="add song" />
        </form>
    )
}

export default NewSongForm