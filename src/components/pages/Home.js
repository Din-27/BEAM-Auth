import React from 'react'
import '../content/style-right.css'


function Home({dataGo, dataFb, dataUser, logoutGo, logoutUser}) {

//  console.log(dataGo.status)
  return (
        <div className="row">
            <div className="col-md-6">
                <div className="row">
                    {dataGo ? (
                        <div className="col-10 mt-4 d-grid mx-auto">
                            <h1>Hallo {dataGo.name}</h1>
                            <img src={dataGo.image} alt="" />
                            <button onClick={logoutGo}>Logout</button>
                        </div>
                    ) : (null)}
                    {dataFb ? (
                        <div className="col-10 mt-4 d-grid mx-auto">
                            <h1>Hallo {dataGo.name}</h1>
                            <img src={dataGo.image} alt="" />
                            <button onClick={logoutGo}>Logout</button>
                        </div>
                    ) : (null)}
                    {dataUser ? (
                        <div className="col-10 mt-4 d-grid mx-auto">
                            <h1>Hallo {dataUser.name}</h1>
                            {/* <img src={dataGo.image} alt="" /> */}
                            <button onClick={logoutUser}>Logout</button>
                        </div>
                    ): (null)}
                    
                </div>
            </div>
        </div>
  )
}

export default Home