import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const handleContextmenu = e => {
        e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    return function cleanup() {
        document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, [])

  useEffect(() => {
    document.onkeydown = (e) => {
      e.preventDefault()
  };
  }, [])

  return (
    <div className="h-full">
      <Header />
      <Nav current={'/maps'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Maps</h2>
        <div className='float-left mr-5 mb-1'>
          <Image src={'/intro.jpg'} height={400} width={400}/>
        </div>
      </div>
    </div>
  )
}






