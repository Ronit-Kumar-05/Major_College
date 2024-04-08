import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left */}
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl ">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Ronit's
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            You Can Sign-Up Using Email And Password or with Google
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="YOUR USERNAME" />
              <TextInput type="text" placeholder="USERNAME" id="username" />
            </div>
            <div>
              <Label value="YOUR EMAIL" />
              <TextInput type="text" placeholder="EMAIl" id="email" />
            </div>
            <div>
              <Label value="YOUR PASSWORD" />
              <TextInput type="text" placeholder="PASSWORD" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className="">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
