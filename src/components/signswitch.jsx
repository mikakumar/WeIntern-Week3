import SignIn from "./signin";
import SignUp from "./signup";



const SignSwitch = ({ type }) =>{


    return(
        <>
        <div className={type=="signin"?"auth-signin-container":"auth-signup-container"}>
            <h1 className="auth-header">
                {type=="signin"? "Welcome back!":"Sign up today!"}
            </h1>
            {type==="signin" && 
            <div>
                <SignIn/>
                <hr className="mb-7 text-white mt-7" />
                    <p className="">Not a member?   
                        <a className="underline  relative" href="/signin "> Sign up here!</a>
                        </p>
            </div>
            }
            {type==="signup" && 
            <div>
                <SignUp/>
                <hr className="mb-5 text-white mt-5" />
                    <p className="">Already a member?   
                        <a className="underline  relative" href="/signin "> Sign in here!</a>
                        </p>
            </div>
            }
        </div>
        </>
    )
}

export default SignSwitch;