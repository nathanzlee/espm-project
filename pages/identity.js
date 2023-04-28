import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { useEffect } from 'react'
import Image from 'next/image'

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
      <Nav current={'/identity'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Identity and Resistance</h2>
        <div className='float-left mr-5 mb-1 max-w-[300px]'>
          <Image src={'/identity.jpg'} height={300} width={300}/>
        </div>
        <p>The Owens Valley Water Conflict had a significant influence on the Paiute people's cultural identity and legacy, who had resided in the region for thousands of years. The water diversion project reduced fish populations, which were a key food supply for the Paiute people, as well as agricultural output, which had previously relied on irrigation from the Owens River.</p>
        <p>The Paiute people participated in acts of resistance and cultural revival in reaction to the water diversion project and its consequences. The founding of the Owens Valley Indian Water Commission in 1975, for example, pushed for the rights of indigenous peoples in the region to have a vote in water management choices.</p>
        <div className='float-right ml-5 max-w-[300px]'>
          <Image src={'/identity2.jpg'} height={300} width={300}/>
          <label className="text-xs">Paiute woman living in Utah photographed last year</label>
        </div>
        <p>Another example of resistance was the utilization of traditional ecological knowledge in the Owens Valley region to rehabilitate damaged ecosystems. Using traditional ecological techniques such as prescribed burning, the Paiute people collaborated with the US Forest Service to restore native flora and enhance water quality in the region.</p>
        <p>The Paiutes' opposition in the Owens Valley Water Conflict highlights the significance of cultural identity and legacy in affecting resource management choices and disputes. The Paiute people influenced the resolution of the dispute by pushing for their rights and employing traditional ecological knowledge to rehabilitate devastated habitats.</p>
        
      </div>
      <Footer current={'/identity'} />
    </div>

    
  )
}














