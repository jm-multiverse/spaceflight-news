import React from 'react'
import { facebook, twitter, instagram, linkedin, google } from '../assets/icons'
import Navbar from '../components/Navbar'

export default function Login() {
  return (
    <div class="flex-grow flex flex-col bg-mosaic bg-cover h-full">
      <div className='bg-slate-50'>
        <Navbar />
      </div>
      <div class="flex-grow flex flex-col items-center justify-center p-4 mx-auto">
        <div class="w-full bg-white rounded-lg shadow-lg md:p-6">
          <a href="#" class="flex items-center justify-center p-4 pb-4 text-2xl font-semibold">
            <div class="w-8 h-8 mr-2 bg-satellite bg-no-repeat bg-contain" alt="logo"></div>
            Spaceflight News
          </a>
          <hr />
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Sign in to your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" required="" />
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required="" />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 ">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm font-medium text-primary-600 hover:underline ">Forgot password?</a>
              </div>
              <button type="submit" class="w-full bg-gray-100 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
              <p class="text-sm font-light text-gray-500">
                Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline ">Sign up</a>
              </p>

              <div
                class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              </div>

              <p
                class="mx-4 mb-0 text-center ">
                Or sign in with another account
              </p>

              <div className='flex items-center justify-center space-x-4'>
                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-900 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 ">
                  <img src={google} alt="" />
                </a>

                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-900 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 ">
                  <img src={facebook} alt="" />
                </a>

                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-900 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 ">
                  <img src={twitter} alt="" />
                </a>

                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-900 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 ">
                  <img src={instagram} alt="" />
                </a>

                <a href="#" class="flex items-center justify-center w-10 h-10 rounded-full bg-black text-gray-900 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-300 ">
                  <img src={linkedin} alt="" />
                </a>
              </div>

              <a
                class="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                href="#!"
                role="button"
                data-te-ripple-init
                data-te-ripple-color="light">
                Continue with SSO
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}