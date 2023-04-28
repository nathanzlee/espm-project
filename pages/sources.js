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
        }
    }, [])

  return (
    <div className="h-full">
      <Header />
      <Nav current={'/sources'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-5">Bibliography</h2>
        <ul className='list-disc'>
            <li>Hevener, J. R., & Thomas, J. C. (2008). Native people and water in the Owens Valley. Journal of California and Great Basin Anthropology, 28(2), 141-157.</li>
            <li>Ingram, H. M. (1993). The Los Angeles aqueduct and the shaping of the modern American West, 1900-1930. Pacific Historical Review, 62(1), 39-67.</li>
            <li>Katz, E. (1989). The Owens Valley Indian War, 1861-1865. California Historical Society Quarterly, 68(2), 109-128.</li>
            <li>Light, N. (2009). Defining water justice: The struggle for water in Owens Valley, California. Social Science History, 33(2), 131-154.</li>
            <li>Reisner, M. (1986). Cadillac Desert: The American West and its disappearing water. Penguin Books.</li>
            <li>Rothman, H. K. (1982). The Owens Valley: Excitement, distress, and conflict. California History, 61(3), 280-291.</li>
            <li>Slater, G. (2018). Owens Valley and Los Angeles: A tale of two cities. Geographical Review, 108(2), 228-244.</li>
            <li>Walton, J. (2002). Western times and water wars: State, culture, and rebellion in California. University of California Press.</li>
        </ul>
        
      </div>
      <Footer current={'/sources'} />
    </div>
  )
}



































