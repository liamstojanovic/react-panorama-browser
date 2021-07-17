import React, { useState } from 'react'

const RoomNavigation = () => {
    
    const [roomId, setRoomId] = useState(0)

    return (
        <div>
            <button onClick={() => setRoomId(roomId - 1)}>Previous room</button>
            <button onClick={() => setRoomId(roomId + 1)}>Next room</button>
            <p>Room id: {roomId}</p>
        </div>
    )
}

export default RoomNavigation
