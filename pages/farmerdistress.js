import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Nav current={'/farmerdistress'}/>
      <div className="py-5 px-10">
        <h2 className="text-2xl">Farmer Distress</h2>
        <ul>
            <li>Social and economic implications of the farmers' crisis in Punjab</li>
            <li>Impact on rural communities and livelihoods</li>
            <li>Farmer suicides and mental health issues</li>
            <li>Government policies and responses to the crisis</li>
        </ul>
      </div>
      <Footer current={'/farmerdistress'} />
    </div>
  )
}


















