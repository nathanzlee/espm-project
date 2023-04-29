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
      <Nav current={'/timeline'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Timeline of Key Events and Publications</h2>
        <ul className='list-decimal ml-10'>
            <li>1905: Los Angeles Aqueduct construction begins.</li>
            <li>1913: Los Angeles Aqueduct officially opens, diverting water from the Owens River to Los Angeles.</li>
            <li>1924: First Owens Valley water protests occur.</li>
            <li>1927: Owens Valley water wars intensify, with farmers and ranchers sabotaging the aqueduct.</li>
            <li>1931: Los Angeles Department of Water and Power (LADWP) purchases more land in Owens Valley, effectively ending the water wars.</li>
            <li>1970: Mono Lake Committee is formed to address the environmental impacts of water diversions.</li>
            <li>1991: California State Water Resources Control Board (SWRCB) issues decision to protect Mono Lake and its tributary streams.</li>
            <li>1997: Lower Owens River Project (LORP) begins, aiming to restore a portion of the river.</li>
            <li>2006: LADWP begins re-watering the Lower Owens River.</li>
            <li>2014: LADWP releases the Owens Lake Master Project, a plan to reduce dust and restore habitat.</li>
        </ul>
      </div>
    </div>
  )
}








