import { useContext, useEffect, useState } from "react";
import img from "../../assets/others/authentication2.png";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
// import ReCAPTCHA from "react-google-recaptcha";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const SignUp = () => {
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const {
        signUpUser,
        googleSignIn,
        updateUser } = useContext(AuthContext);

    const onChange = (value) => {
        console.log("Captcha value:", value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const value = Object.fromEntries(data.entries());
        console.log(value);
        signUpUser(value.email, value.password).then((userCredential) => {
            toast.success("User created successfully");
            const user = userCredential.user;
            console.log(user);
            form.reset();
            // updateUser(value.name, img).then(() => {
            //     console.log("User updated");
            // }).catch((error) => {
            //     console.log(error);
            // })
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            const errorMessage = error.message;
            toast.error(errorMessage)
        });
    }

    const handleCaptcha = (e) => {
        const captcha = e.target.value;
        const result = validateCaptcha(captcha, false);
        if (result === true) {
            toast.success("Captcha validated");
            setBtnDisabled(false);
        } else {
            toast.error("Captcha invalid");
            setBtnDisabled(true);
        }
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <img className="hidden md:block" src={img} alt="" />


            <div className="w-full max-w-sm my-20 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    {/* <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div> */}

                    {/* <ReCAPTCHA
                        sitekey={import.meta.env.VITE_SITEKEY}
                        onChange={onChange}
                    /> */}
                    <LoadCanvasTemplate />
                    <div>
                        <label htmlFor="captcha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Captcha</label>
                        <input onBlur={handleCaptcha} type="text" name="captcha" id="captcha" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Captcha" required />
                    </div>

                    <button type="submit" className="btn btn-warning btn-block" disabled={btnDisabled}>Create your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already registered? <a href="/auth" className="text-blue-700 hover:underline dark:text-blue-500">Login</a>
                    </div>
                </form>
            </div>


        </div>
    );
};

export default SignUp;