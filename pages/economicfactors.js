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
      <Nav current={'/economicfactors'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Economic Factors</h2>
        <div className='float-left mr-5 mb-1 min-w-[300px]'>
          <Image src={'/economicfactors.png'} height={400} width={400}/>
          <label className='text-xs'>Dying trees and vegation of a farm in Owens Valley</label>
        </div>
        <p>A complex network of economic factors interacted with political, cultural, and environmental concerns to produce the Owens Valley Water Conflict. The subject of water supplies, and how they were apportioned and handled by various economic entities, was at the center of the dispute.</p>
        <p>The fast expansion of Los Angeles in the early twentieth century was a major economic reason propelling the dispute. During this time, the city's population increased, as did the need for water. The city began to explore for additional water supplies outside of its municipal limits, which led to the decision to build the aqueduct that would transport water from the Owens Valley to Los Angeles. This choice was primarily motivated by economic concerns, since the city's continuous expansion and economic success were dependent on a dependable supply of water.</p>
        <p>The Owens Valley region's agricultural sector was also a crucial element in the dispute. The Owens Valley had long been a major agricultural region, with many farmers and landowners relying on Owens River irrigation to support their crops. When the aqueduct was built and water was diverted away from the valley, it had a terrible effect on agricultural output in the region. Crops shriveled and perished, forcing many farmers to quit their property. This drop in agricultural output had a severe economic impact on the region, causing financial difficulty for many individuals.</p>
        <p>The ownership of land and water rights was another economic aspect that played a part in the war. As the city of Los Angeles began to acquire property and water rights in the Owens Valley, many residents began to feel dispossessed of their own resources. This instilled bitterness and animosity, fueling opposition to the aqueduct in the years to come.</p>
        <p>The clash of these economic elements emphasizes the significance of economic interests and considerations in driving resource management choices and disputes. The Owens Valley Water Conflict is a dramatic illustration of how opposing economic interests may drive resource management choices, with far-reaching economic, cultural, and environmental consequences.</p>
        <p>The economic consequence of the battle is being felt in the Owens Valley today. Despite efforts to restore the region's agricultural productivity and cultural legacy, many valley residents are still struggling with the economic consequences of the water diversion project. The region's persistent battles over water rights and resource management illustrate that economic forces continue to shape resource management choices and conflicts.</p>
      </div>
      <Footer current={'/economicfactors'} />
    </div>
  )
}


















