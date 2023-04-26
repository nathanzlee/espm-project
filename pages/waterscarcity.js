import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Nav current={'/waterscarcity'}/>
      <div className="py-5 px-10">
        <h2 className="text-2xl">Water Scarcity</h2>
        <ul>
          <li>Causes of water scarcity in Punjab</li>
          <li>Consequences of over-extraction of groundwater</li>
          <li>Impact of water pollution on agriculture</li>
          <li>Lack of sustainable water management policies</li>
        </ul>
      </div>
      <Footer current={'/waterscarcity'} />
    </div>
  )
}










