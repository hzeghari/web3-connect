import React from 'react'
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { MetamaskIcon, WalletConnectIcon } from './icons'

export default function CardButtons(props) {

    const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42] });
    const wcConnector = new WalletConnectConnector({
        infuraId: "5cfa495fb4759daabe91247f9847f8b0",
    });

    const ConnectorNames = {
        Injected: 'injected',
        WalletConnect: 'walletconnect',
    }

    const W3Operations = {
        Connect: "connect",
        Disconnect: "disconnect",
    }
    // const { active, activate, error } = web3React;

    return (
        <div className="drop-shadow-2xl rounded-2xl p-4 bg-white dark:bg-gray-900 w-[400px] h-[300px] m-auto relative">
            <div className="flex flex-col w-full h-full text-center">

                <h1 className="mt-[30px] mb-[50px] sm:text-xl text-base font-bold text-gray-900">Connect your wallet</h1>

                <button onClick={() => {
                    props.setLatestConnector(ConnectorNames.Injected);
                    props.setLatestOp(W3Operations.Connect);
                    props.web3ReactActive;
                }} className="metac flex justify-between items-center mx-auto px-5 pt-4 pb-3 w-[300px] h-[60px] cursor-pointer transition ease-in duration-200 normal-case rounded-[10px] text-white text-base font-bold focus:outline-none">
                    
                    MetaMask

                    <MetamaskIcon className="w-8 h-8"/>
                    
                </button>
               

                <hr className="my-2 border-0 bg-white text-gray-500 h-px" />
                
                <button className="walletc flex justify-between items-center mx-auto px-5 pt-4 pb-3 w-[300px] h-[60px] cursor-pointer transition ease-in duration-200 normal-case rounded-[10px] text-white text-base font-bold focus:outline-none">
                    
                    WalletConnect

                    <WalletConnectIcon className="w-8 h-8"/>
                    
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
