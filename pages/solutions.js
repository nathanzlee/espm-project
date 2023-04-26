import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Nav current={'/solutions'}/>
      <div className="py-5 px-10">
        <h2 className="text-2xl">Solutions</h2>
        <ul>
            <li>Innovative approaches to address the crisis</li>
            <li>Sustainable agriculture practices for water and soil conservation</li>
            <li>Government support for small-scale farmers</li>
            <li>Role of technology and research in promoting sustainable agriculture</li>
        </ul>
      </div>
      <Footer current={'/solutions'} />
    </div>
  )
}
























