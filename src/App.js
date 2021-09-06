// import "./App.css"
import React, { useState,Suspense } from 'react'
import LandingPage from "./Components/LandingPage/LandingPage";
// import LoginModal from "./Components/User/LoginModal/LoginModal";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Request from "./Components/User/Requests/Request";
import HomeVendor from "./Components/Vendor/Home/Home"
import Profile from "./Components/User/Profile/Profile";
import Estimate from "./Components/User/Estimate/Estimate";
import HomeUser from "./Components/User/HomeUser/HomeUser";
import Error from "./Components/Error/Error";
import Thanku from "./Components/thanku/thanku";
import Thanku1 from "./Components/thanku/thanku1";
import Thanku2 from "./Components/thanku/thanku2";
import Login from './Components/Login/Login'
import Loader from "react-spinners/CircleLoader";

function App() {
    const [isSignup,setIsSignup]=useState(false)
    const [isUser,setIsUser] = useState(true)
    
    const Home_Vendor = React.lazy(
        () =>
            new Promise((resolve, reject) =>
            setTimeout(() => resolve(import("./Components/Vendor/Home/Home")), 5000)
            )
        );
    const HomeUser = React.lazy(
            () =>
                new Promise((resolve, reject) =>
                setTimeout(() => resolve(import("./Components/User/HomeUser/HomeUser")), 5000)
                )
            );

    return (
        <>
        <Suspense fallback={<div style={{display:'flex',height:'100vh',width:'100%',fontSize:36,justifyContent:'center',alignItems:'center',color:'#FFB600',flexDirection:'column'}} >
            Construction in process...wait for a moment
                      <Loader 
            size={100}
            color={"#ffb600"}
            // loading={loading}
          />
            </div>}>
            <BrowserRouter>
                <div className='App'>
                    <Switch>
                        <Route path='/' exact component={LandingPage}>
                            <LandingPage setIsUser={setIsUser}/>
                        </Route>
                        <Route path='/auth-user' exact >
                            <Login isSignup={isSignup} setIsSignup={setIsSignup} isUser={isUser}/>
                        </Route>

                        <Route path='/home-user' exact >
                            <HomeUser setIsUser={setIsUser} isSignup={isSignup} setIsSignup={setIsSignup}/>
                        </Route>
                        <Route path='/request-user' exact component={Request}/>
                        <Route path='/profile' exact component={Profile}/>
                        <Route path='/estimate'exact component={Estimate}/>

                        {/* <Route  component={HomeVendor}/> */}
                        <Route path='/home-vendor' exact>
                            <Home_Vendor setIsUser={setIsUser}/>
                        </Route>
                        <Route path='/thanku' exact>
                            <Thanku mssg={" Thank you for Registration. Please! check your Email for verification"} />
                        </Route>
                        <Route path='/verify/:id/:token/:isUser' exact 
                        render={(props) => (<Thanku1 id={props.match.params.id} token={props.match.params.token} isUser={props.match.params.isUser} setIsUser={setIsUser}/>)} />
                        {/* <Route path='/resetpass/:id/:token' exact component={Thanku2}/> */}
                        <Route path='/resetpass/:id/:token/:isUser' exact 
                        render={(props) => (<Thanku2 id={props.match.params.id} token={props.match.params.token} isUser={props.match.params.isUser} setIsUser={setIsUser}/>)} />

                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>
        </Suspense>
        </>
    );
}

export default App;