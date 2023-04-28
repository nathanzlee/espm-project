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
      <Nav current={'/conclusion'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Conclusion</h2>
        <div className='float-left mr-5 mb-1 max-w-[400px]'>
          <Image src={'/conclusion.jpg'} height={400} width={400}/>
          <label className='text-xs'>L.A. getting no Owens Valley runoff for first time since 1913 (taken by LA times)</label>
        </div>
        <p>The Owens Valley Water Conflict is a varied and complex narrative about resource management, economic interests, cultural legacy, and environmental sustainability. At its core, the conflict is a narrative about conflicting interests and ideals, and how they overlap and clash with one another. The struggle over water supplies between Los Angeles and the Owens Valley is a stark illustration of how economic interests may drive resource management choices, and how these decisions can have far-reaching consequences for the environment and local populations. Water diversion from the Owens River to Los Angeles reduced agricultural output in the region and had substantial economic consequences for local farmers and landowners. The dispute also had cultural and environmental consequences, with many people in the Owens Valley believing that the water diversion project harmed their cultural history and relationship to the land.</p>
        <p>Despite the numerous problems and disputes that have resulted from the Owens Valley Water Conflict, possibilities for collaboration and cooperation have developed. In recent years, efforts have been undertaken to restore the region's natural and cultural legacy, as well as to discover more sustainable and fair methods to manage water resources. These initiatives provide optimism that, even in the face of complicated and difficult resource management concerns, solutions that benefit all parties concerned are achievable.</p>
        <p>Ultimately, the Owens Valley Water Conflict serves as a warning about the significance of cautious and mindful resource management, as well as the need to balance competing economic, cultural, and environmental interests. We may work towards a more sustainable and equitable future for resource management in the Owens Valley and beyond by recognizing the nuances of this struggle and the lessons it has to offer.</p>
      </div>
      <Footer current={'/conclusion'} />
    </div>
  )
}



























