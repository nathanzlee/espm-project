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
      <Nav current={'/politics'}/>
      <div className="py-5 px-10 overflow-y-auto">
        <h2 className="text-2xl mb-10">Politics and Interest Groups</h2>
        <div className='float-left mr-5 mb-1'>
          <Image src={'/politics.jpg'} height={300} width={300}/>
        </div>
        <p>A multitude of debates and clashes between interest groups and governmental players characterized the Owens Valley Water Conflict. The city of Los Angeles, which launched the water diversion project to address its expanding water demands, was one of the primary interest groups involved in the debate. To obtain control of water resources in the Owens Valley, the city of Los Angeles used a variety of strategies, including the acquisition of property and water rights from local landowners.</p>
        <p>The Owens Valley Committee, which was created in 1926 to fight for the rights of Owens Valley people and to oppose the water diversion project, was another significant interest organization involved in the debate. In 1924 and 1976, the Owens Valley Committee participated in acts of resistance against the aqueduct, including dynamiting parts of the aqueduct.</p>
        <div className='float-right ml-5 mt-1'>
          <Image src={'/politics2.png'} height={200} width={200}/>
        </div>
        <p>A multitude of political variables, notably the involvement of the state and federal governments in water management decisions, created the confrontation between various interest groups. California had an important part in the Owens Valley Water Conflict, with Governor Hiram Johnson favoring the water diversion project and the state government funding it. The federal government was also involved in the controversy, with the Bureau of Reclamation undertaking feasibility studies on the construction of an Owens Valley dam.</p>
        <p>The clash between these interest groups and political actors emphasizes the role of ideology, the state, and cultural traditions in determining resource management histories and practices.</p>
      </div>
      <Footer current={'/politics'} />
    </div>
  )
}


















