import { useState } from "react";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="hero bg-gray-400 min-h-screen">
            <div className="hero-content justify-between p-10 border border-white bg-blue-400 rounded-lg text-white flex-col lg:flex-row">
                <div className="text-center space-y-5 w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Welcome!</h1>
                    <h1 className="text-3xl font-semibold">Looks like you're new, Please register!</h1>
                    <p className="">
                        Best place to explore and fulfill your desires.We have a large collections of items.Any time, anywhere, we will deliver your item with pleasure.
                    </p>
                </div>
                <div className="card  w-full max-w-sm bg-blue-400 border  shadow-white shadow-xl">
                    <form className="card-body">
                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-800">
                            <h1 className="text-2xl font-bold text-center">Register</h1>
                            <form noValidate="" action="" className="space-y-6">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="name" className="block font-medium text-white ">Name</label>
                                    <input type="text" name="name" id="name" placeholder="Write your name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 text-gray-800 focus:dark:border-default-600" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="email" className="block font-medium text-white ">Email</label>
                                    <input type="email" name="email" id="email" placeholder="Write your email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-default-600" />
                                </div>
                                <div className="space-y-1 text-sm relative">
                                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-gray-800 focus:dark:border-default-600" />
                                    {showPassword ? (
                                        <svg
                                            onClick={() => setShowPassword(!showPassword)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute bottom-3 right-2 h-6 w-6 cursor-pointer  peer-disabled:cursor-not-allowed text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            aria-labelledby="title-8 description-8"
                                            role="graphics-symbol"
                                        >
                                            <title id="title-8">Check mark icon</title>
                                            <desc id="description-8">Icon description here</desc>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            onClick={() => setShowPassword(!showPassword)}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="absolute bottom-3 right-2 h-6 w-6 cursor-pointer peer-disabled:cursor-not-allowed text-black"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            aria-labelledby="title-8d description-8d"
                                            role="graphics-symbol"
                                        >
                                            <title id="title-8">Check mark icon</title>
                                            <desc id="description-8">Icon description here</desc>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                                            />
                                        </svg>
                                    )}
                                </div>
                                <button className="block btn bg-transparent rounded-xl w-full p-3 text-center text-white hover:text-black dark:bg-default-600">Register</button>
                            </form>
                            <div className="flex items-center pt-4 space-x-1">
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                                <p className="px-3 text-sm font-medium text-white">Register with social account</p>
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                            </div>
                            <div className="flex justify-center">
                                <button aria-label="Log in with Google" className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                </button>
                            </div>
                            <p className=" text-sm font-medium  text-center sm:px-6 text-white">Already have an account ?<span> </span>
                                <a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Login</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;