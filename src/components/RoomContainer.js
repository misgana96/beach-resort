import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import {withRoomConsumer} from '../context'
import Loading from '../components/Loading'

function RoomContainer({context}){
    const{loading, sortedRooms, rooms} = context;
    if(loading){
        return <Loading/>
    }
    return(
        <>
            <RoomFilter rooms ={rooms}/>
            <RoomList sortedRooms ={rooms}/>
        </>
    )

}

export default withRoomConsumer(RoomContainer)







// import React from 'react'
// import RoomFilter from './RoomFilter'
// import RoomList from './RoomList'
// import {RoomConsumer} from '../context'
// import loading from '../components/Loading'
// import Loading from '../components/Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {value =>{
//                const{loading, sortedRooms, rooms} =value
//                if(loading){
//                    return <Loading/>
//                }
//                return(
//                    <div>
//                        hello from RoomContainer
//                        <RoomFilter rooms ={rooms}/>
//                        <RoomList sortedRooms ={rooms}/>
//                    </div>
//                )
//             }}
//         </RoomConsumer>

//     )
// }
