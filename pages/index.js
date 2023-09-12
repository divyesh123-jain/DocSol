import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from './Login'
import WalletConnect from '@/components/WalletConnet/WalletConnect'
import CertificateTable from '@/components/Table/CertificateTable'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  
   <div>
   <CertificateTable />
   </div>

    </>
  )
}
