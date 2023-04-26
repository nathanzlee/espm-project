import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Nav current={'/climatechange'}/>
      <div className="py-5 px-10">
        <h2 className="text-2xl">Climate Change</h2>
        <ul>
          <li>Effects of climate change on agriculture in Punjab</li>
          <li>Changes in rainfall patterns and water availability</li>
          <li>Impact of extreme weather events on crops</li>
          <li>Heat stress and its impact on yield and quality of crops</li>
        </ul>
      </div>
      <Footer current={'/climatechange'} />
    </div>
  )
}


















