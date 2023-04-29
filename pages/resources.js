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
      <Nav current={'/resources'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Online Resources</h2>
        <h3>Websites</h3>
        <ul className='list-decimal ml-10'>
            <li>
                <a href='https://www.ladwp.com/'>Los Angeles Department of Water and Power (LADWP)</a>
            </li>
            <li>
                <a href='https://www.monolake.org/'>Mono Lake Committee</a>
            </li>
            <li>
                <a href='http://www.owensvalleyhistory.com/'>Owens Valley History</a>
            </li>
        </ul>
        <h3>Videos</h3>
        <ul className='list-decimal ml-10'>
            <li>
                <a href='https://www.youtube.com/watch?v=Q2JWCkTccm4'>The Water Wars of Owens Valley</a>
            </li>
            <li>
                <a href='https://www.youtube.com/watch?v=lJt1DkLJhO8'>The California Water Wars</a>
            </li>
        </ul>
        <h3>Archives</h3>
        <ul className='list-decimal ml-10'>
            <li>
                <a href='https://www.inyocounty.us/services/library/eastern-california-museum'>Eastern California Museum</a>
            </li>
            <li>
                <a href='https://www.lapl.org/collections-resources/databases/owens-valley-water-history'>Los Angeles Public Library - Owens Valley Water History</a>
            </li>
        </ul>
        <h3>Databases</h3>
        <ul className='list-decimal ml-10'>
            <li>
                <a href='https://cdnc.ucr.edu/'>California Digital Newspaper Collection</a>
            </li>
            <li>
                <a href='https://www.jstor.org/'>JSTOR - Owens Valley Water Conflict</a>
            </li>
        </ul>
        <h3>Other</h3>
        <ul className='list-decimal ml-10'>
            <li>
                <a href='https://www.ucpress.edu/book/9780520050689/the-owens-valley-water-wars'>The Owens Valley Water Wars: A History by William Kahr</a>
            </li>
            <li>
                <a href='https://www.penguinrandomhouse.com/books/321169/cadillac-desert-by-marc-reisner/'>Cadillac Desert: The American West and Its Disappearing Water by Marc Reisner</a>
            </li>
        </ul>
      </div>
    </div>
  )
}







