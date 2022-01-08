import React from 'react'

import { MetamaskIcon, WalletConnectIcon } from './icons'

export default function CardButtons() {
    return (
        <div className="drop-shadow-2xl rounded-2xl p-4 bg-white dark:bg-gray-900 w-[400px] h-[300px] m-auto relative">
            <div className="flex flex-col w-full h-full text-center">

                <h1 className="mt-[30px] mb-[50px] sm:text-xl text-base font-bold text-gray-900">Connect your wallet</h1>

                <button className="metac flex justify-between items-center mx-auto px-5 pt-4 pb-3 w-[300px] h-[60px] cursor-pointer transition ease-in duration-200 normal-case rounded-[10px] text-white text-base font-bold focus:outline-none">
                    
                    MetaMask

                    <MetamaskIcon className="w-8 h-8"/>
                    {/* <svg width="20" height="20" fill="currentColor" viewBox="0 0 2304 1792" className="mr-4" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z">
                        </path>
                    </svg>  */}
                </button>
               

                <hr className="my-2 border-0 bg-white text-gray-500 h-px" />
                
                <button className="walletc flex justify-between items-center mx-auto px-5 pt-4 pb-3 w-[300px] h-[60px] cursor-pointer transition ease-in duration-200 normal-case rounded-[10px] text-white text-base font-bold focus:outline-none">
                    
                    WalletConnect

                    <WalletConnectIcon className="w-8 h-8"/>
                    {/* <svg width="20" height="20" fill="currentColor" viewBox="0 0 2304 1792" className="mr-4" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1728 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z">
                        </path>
                    </svg>  */}
                </button>
                <style jsx>{`
                    .metac {
                        background-image: linear-gradient(267.54deg, rgb(255, 220, 36) 1.63%, rgb(255, 92, 0) 98.05%);
                    }
                    .walletc {
                        background-image: linear-gradient(267.56deg, rgb(5, 0, 255) 0%, rgb(143, 0, 255) 97.07%);
                    }
                `}</style>


                
                

            </div>
        </div>
    )
}
