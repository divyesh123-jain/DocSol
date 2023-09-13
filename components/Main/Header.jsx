import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

// Import Wallet component
import Wallet from '@/Wallet/Wallet';

const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Get Your Certificates</h2>
        <div className='flex'>
  <Button className='mx-4'>Claim</Button>
  {isClient && <Wallet />}
</div>
      </div>
    </>
  );
};

export default Header;
