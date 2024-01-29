import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import ParentSignUp from '../components/ParentSignUp'
import DashBoard from './DashBoard'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={inter.className}>
        <DashBoard></DashBoard>
          {/* <ParentSignUp></ParentSignUp> */}
        
      </div>
    </>
  );
}
