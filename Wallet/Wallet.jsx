import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import WalletMultiButton from '@/components/WalletMultiButton';
// import { Button } from '@solana/wallet-adapter-react-ui/lib/types/Button';

import {
    GlowWalletAdapter,
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    // SlopeWalletAdapter,
    // SolflareWalletAdapter,
    // SolletExtensionWalletAdapter,
    // SolletWalletAdapter,
    // TorusWalletAdapter,

} from '@solana/wallet-adapter-wallets';
// import fs from "fs";

import { clusterApiUrl, Transaction, SystemProgram, Keypair, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback, useState } from 'react';

import { actions, utils, programs, NodeWallet, Connection} from '@metaplex/js'; 
import { Button } from '@nextui-org/react';

require('@solana/wallet-adapter-react-ui/styles.css');
let thelamports = 0;
let theWallet = "9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9"
function getWallet(){

    
}

const Wallet =  () => {
    return (
        <Context>
            <Content />
        </Context>
    );
}

export default Wallet;

const Context = ({children}) => {
    const network = WalletAdapterNetwork.Mainnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new LedgerWalletAdapter(),
            new PhantomWalletAdapter(),
            // new GlowWalletAdapter(),
            // new SlopeWalletAdapter(),
            // new SolletExtensionWalletAdapter(), 
            // new SolletWalletAdapter(),
            // new SolflareWalletAdapter({ network }),
            // new TorusWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content = () => {
    let [lamports, setLamports] = useState(.1);
    let [wallet, setWallet] = useState("9m5kFDqgpf7Ckzbox91RYcADqcmvxW4MmuNvroD5H2r9");

    const connection = new Connection(clusterApiUrl("devnet"))
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback( async () => {

        if (!publicKey) throw new WalletNotConnectedError();
        connection.getBalance(publicKey).then((bal) => {
            console.log(bal/LAMPORTS_PER_SOL);

        });

        let lamportsI = LAMPORTS_PER_SOL*lamports;
        console.log(publicKey.toBase58());
        console.log("lamports sending: {}", thelamports)
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(theWallet),
                lamports: lamportsI,
            })
        );

        const signature = await sendTransaction(transaction, connection);

        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection]);

    function setTheLamports(e)
{
    console.log(Number(e.target.value));
    setLamports(Number(e.target.value));
    lamports = e.target.value;
    thelamports = lamports;
}
function setTheWallet(e){
    setWallet(e.target.value)
    theWallet = e.target.value;
}

return (
       

    <div className="App">
            <div className="navbar">
    <div className="navbar-inner ">
      <a id="title" className="brand" href="#">Brand</a>
      <ul className="nav">


      </ul>
      <ul className="nav pull-right">
                  <li><a href="#">White Paper</a></li>
                  <li className="divider-vertical"></li>
                  <Button><WalletMultiButton /></Button>

                </ul>
    </div>
  </div>
<input value={lamports} type="number" onChange={(e) => setTheLamports(e)}></input>
    <br></br>
  <button className='btn' onClick={onClick}>Send Sol </button>


    </div>

);

}

