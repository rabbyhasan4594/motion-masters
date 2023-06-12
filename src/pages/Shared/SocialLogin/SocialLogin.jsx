import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email,role:"student" }
                fetch('https://motion-masters-dance-academy-server-rabbyhasan4594.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider">or</div>
            <div className="w-full text-center my-4">
                {/* <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button> */}
                <div className="form-control mt-6">
                    <button onClick={handleGoogleSignIn} className="btn bg-red-400" type="submit" ><FaGoogle></FaGoogle>   Login with Google </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;