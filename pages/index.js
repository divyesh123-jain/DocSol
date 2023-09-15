import React from 'react';
import { ConnectionProvider, WalletProvider, WalletModalProvider } from '@solana/wallet-adapter-react';

import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Wallet from '@/Wallet/Wallet';
import SignIn from '@/auth/SignIn';

export default function Home() {
  return (
    // <ConnectionProvider endpoint="YourSolanaRpcEndpointHere">
    //   <WalletProvider wallets={[/* Your wallet adapters here */]} autoConnect>
    //     <WalletModalProvider>
    //       <div>
    //         <WalletMultiButton />
    //       </div>
    //       {/* Your other components */}
    //     </WalletModalProvider>
    //   </WalletProvider>
    // </ConnectionProvider>
    <>
      {/* <Wallet /> */}
  <SignIn />
    </>
  );
}
