import Image from "next/image";
import Link from "next/link";
import AuthDecoration from "../../public/images/login/auth-decoration.png";
import AuthImage from "../../public/images/login/auth-image.jpg";

const SignIn = () => {
  return (
    <main className="bg-white">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="flex flex-col h-full min-h-screen after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" href="/">
                  <a>
                    <svg width="32" height="32" viewBox="0 0 32 32">
                      <defs>
                        <linearGradient
                          x1="28.538%"
                          y1="20.229%"
                          x2="100%"
                          y2="108.156%"
                          id="logo-a">
                          <stop
                            stopColor="#A5B4FC"
                            stopOpacity="0"
                            offset="0%"
                          />
                          <stop stopColor="#A5B4FC" offset="100%" />
                        </linearGradient>
                        <linearGradient
                          x1="88.638%"
                          y1="29.267%"
                          x2="22.42%"
                          y2="100%"
                          id="logo-b">
                          <stop
                            stopColor="#38BDF8"
                            stopOpacity="0"
                            offset="0%"
                          />
                          <stop stopColor="#38BDF8" offset="100%" />
                        </linearGradient>
                      </defs>
                      <rect fill="#6366F1" width="32" height="32" rx="16" />
                      <path
                        d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                        fill="#4F46E5"
                      />
                      <path
                        d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                        fill="url(#logo-a)"
                      />
                      <path
                        d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                        fill="url(#logo-b)"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>

            <div className="max-w-sm px-4 py-8 mx-auto">
              <h1 className="mb-6 text-3xl font-bold text-slate-800">
                Welcome back! ✨
              </h1>
              {/* Form */}
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="email">
                      Email Address
                    </label>
                    <input
                      // value={email}
                      // onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      className="w-full form-input"
                      type="email"
                    />
                  </div>
                  <div>
                    <label
                      className="block mb-1 text-sm font-medium"
                      htmlFor="password">
                      Password
                    </label>
                    <input
                      // value={password}
                      // onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      className="w-full form-input"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <button className="text-sm underline hover:no-underline">
                      Forgot Password?
                    </button>
                  </div>
                  <button
                    type="submit"
                    //   onClick={loginHandler}
                    className="px-3 py-2 ml-3 text-white bg-indigo-500 rounded-md hover:bg-indigo-600">
                    Sign In
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-slate-200">
                {/* Warning */}
                <div className="">
                  <div className="px-3 py-2 text-yellow-600 bg-yellow-100 rounded">
                    <svg
                      className="inline w-3 h-3 mr-2 fill-current shrink-0"
                      viewBox="0 0 12 12">
                      <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                    </svg>
                    <span className="text-sm">
                      To support you during the pandemic super pro features are
                      free until March 31st.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="absolute top-0 bottom-0 right-0 hidden md:block md:w-1/2"
          aria-hidden="true">
          <Image
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width={1024}
            height={1050}
            alt="Authentication"
          />
          <div className="absolute left-0 hidden ml-8 transform -translate-x-1/2 top-1/4 lg:block">
            <Image
              className=""
              src={AuthDecoration}
              width={218}
              height={224}
              alt="Authentication decoration"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignIn;
