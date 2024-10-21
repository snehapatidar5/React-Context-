import {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile(){

     // this is how we get data
     const {user} = useContext(UserContext);
     console.log("profile render")
     if(!user) return <div className="text-center text-2xl text-black font-semibold mt-8 ">Please Login</div>


    return(
        <div className="text-center mt-8">
            <h2 className="text-2xl text-green-800 font-bold ">Welcome {user.username}</h2>
        </div>
    )

}
export default Profile;