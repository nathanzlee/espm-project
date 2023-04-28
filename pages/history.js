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
      <Nav current={'/history'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">History and Context</h2>
        <div className='float-left mr-5 mb-1 max-w-[300px]'>
          <Image src={'/history.jpg'} height={300} width={300}/>
          <label className='text-xs'>William mulholland, chief engineer of the Los Angeles Department of Water and Power</label>
        </div>
        <p>The Owens Valley Water Conflict began in the early twentieth century, when Los Angeles began transferring water from the Owens River to suit the city's expanding water requirements. William Mulholland, chief engineer of the Los Angeles Department of Water and Power, spearheaded the project and managed the building of the 233-mile aqueduct that carried water from the Owens Valley to Los Angeles.</p>
        <p>The Owens Valley region was greatly impacted by the water diversion project, which caused ecological devastation, relocation of indigenous tribes, and changes in land use patterns. The project had an especially negative impact on the Paiute people, who had lived in the area for thousands of years. The diversion of water from the Owens River reduced fish populations, which were a vital source of sustenance for the Paiutes. Furthermore, the project reduced agricultural output in the region, which had previously relied on irrigation from the Owens River.</p>
        <p>There were several issues and confrontations during the Owens Valley Water Conflict. The Owens Valley Indian War, which lasted from 1861 to 1865, was one of the earliest and most major confrontations. The conflict was fought between the Paiute people and the United States Army, and it was sparked by white settlers encroaching on Paiute territories.</p>
        <p>The water diversion project has sparked tensions between the city of Los Angeles and Owens Valley inhabitants. Many neighbors believed that the water diversion project was an unjust and illegal takeover of their resources. In 1924 and 1976, several citizens committed attempted to sabotage the aqueduct, including exploding parts of the aqueduct with dynamite.</p>
        <p>Despite the debates and tensions that surrounded the Owens Valley Water Conflict, the project was eventually successful in providing water to Los Angeles. The aqueduct is still in operation today, delivering water to the city and its environs.</p>
      </div>
      <Footer current={'/history'} />
    </div>
  )
}










