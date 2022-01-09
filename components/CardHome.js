import React from 'react'

export default function CardHome(props) {

    const ConnectorNames = {
        Injected: 'injected',
        WalletConnect: 'walletconnect',
    }

    const W3Operations = {
        Connect: "connect",
        Disconnect: "disconnect",
    }

    return (
        <div className="drop-shadow-2xl rounded-2xl p-4 bg-white dark:bg-gray-900 w-[400px] h-[300px] m-auto relative">
            <div className="flex flex-col w-full h-full space-y-4 text-center">
                
                <h1 className="sm:text-xl text-base font-bold text-gray-900">Welcome to Web 3</h1>

                <div className="flex flex-col content-start justify-center w-auto h-auto">

                    <p className="font-bold leading-relaxed text-[#afafaf] text-base">Network</p>

                    <h1 className="sm:text-xl text-base font-bold text-gray-900">{props.Net}</h1>

                </div>

                <div className="flex flex-col content-start justify-center w-auto h-auto">

                    <p className="font-bold leading-relaxed text-[#afafaf] text-base">Address</p>

                    <h1 className="sm:text-xl text-base font-bold text-gray-900">{props.Adr}</h1>
                
                </div>
                
                <button onClick={() => {
                    props.setLatestOp(W3Operations.Disconnect);
                    props.web3ReactDesactivate;
                }} className="flex items-center justify-center mx-auto pt-3 pb-3 w-[300px] h-[60px] cursor-pointer transition ease-in duration-200 normal-case rounded-[10px] text-[#f96666] text-xl font-black focus:outline-none">
                    
                    Disconnect

                </button>

            </div>
        </div>
    )
}
