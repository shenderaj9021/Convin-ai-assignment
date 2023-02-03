import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux';

function StudentDetails({appState}) {
    const [username,setUsername] = useState("");
    const [telephone,setTelephone] =useState(" ");
    useEffect(() => {
      setUsername(localStorage.getItem("username"));
      setTelephone(localStorage.getItem("telephone"));
    }, [username ])
    
  return (
    <div>
         <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
               
                <form>
                    <label> UserName </label>
                    <div className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-">
                      {username}
                    </div>
                    <label> Phone no </label>
                    <div className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-">
                        {telephone}
                    </div>
                   
                </form>
            </div>
        </div>
    </div>
  )
}


const mapStateToProps = (state) =>({
    appState:state
  })
  

  export default connect(mapStateToProps)(StudentDetails);

