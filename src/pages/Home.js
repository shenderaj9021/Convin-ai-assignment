import React from 'react'
import { connect } from 'react-redux';
import { setData } from '../reducers/actions';



function Home({appState,addData}) {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let username = e.target.elements.username?.value;
        let telephone = e.target.elements.telephone?.value;
        const ob = {username:username,telephone:telephone}
        localStorage.setItem("username",username);
        localStorage.setItem("telephone",telephone);
        addData(ob);
    };
  return (
    <div>
      <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                  Hello world
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label >Username</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='username'
                            placeholder='Your Username'
                            onChange={(e)=> localStorage.setItem("username",e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Telephone</label>
                        <input
                            type='number'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='telephone'
                            placeholder='Your TelePhone'
                            onChange={(e)=> localStorage.setItem("telephone",e.target.value)}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                           submit
                        </button>
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

const mapDispatchToProps = (dispatch)=>({
 addData:(userData) => dispatch(setData(userData))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);

