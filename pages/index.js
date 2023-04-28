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
      <Nav current={'/'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Introduction</h2>
        <div className='float-left mr-5 mb-1'>
          <Image src={'/intro.jpg'} height={400} width={400}/>
        </div>
        <p>The Owens Valley Water Conflict was a watershed moment in California's natural resource management history. Early in the 20th century, water from the Owens River was diverted to supply the expanding city of Los Angeles, which led to the conflict. The water diversion had a significant negative influence on the Owens Valley area, resulting in ecological harm, the eviction of native communities, and modifications to land use patterns.</p>
        <p>This website examines the Owens Valley Water Conflict as a case study in power dynamics and resource management. We begin with a review of the conflict's history, focusing on the role of property rights, land use, and water diversion rules. We then look at how power dynamics affected the conflict, such as the strategies utilized by the Los Angeles Department of Water and Power to gain water rights and control resources.</p>
        <p>In addition, we discuss the significance of cultural identity and resistance in the Owens Valley Water Conflict. We specifically explore the Paiute people's reaction to the water diversion project, as well as how cultural identity and resistance affected the conflict.</p>
        <p>The conflict's influence in politics and interest groups is also investigated. We study the locations and dynamics of various conflict interest groups, as well as the techniques utilized by these organizations to influence resource management choices.</p>
        <p>Finally, we look at the economic causes that are fueling the Owens Valley Water Conflict. The economic consequences of the water diversion project on the region are discussed, as well as how these considerations informed resource management decisions.</p>
        <p>We believe that this website will give useful insights on the intricate interactions between power, identity, politics, and economics in California's natural resource management choices and disputes.</p>
      </div>
      <Footer current={'/'} />
    </div>
  )
}






