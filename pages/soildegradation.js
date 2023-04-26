import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Nav current={'/soildegradation'}/>
      <div className="py-5 px-10">
        <h2 className="text-2xl">Soil Degradation</h2>
        <ul>
          <li>Causes of soil degradation in Punjab</li>
          <li>Impacts of excessive use of chemical fertilizers</li>
          <li>Effects of monoculture farming practices on soil health</li>
          <li>Erosion and loss of soil fertility</li>
        </ul>
      </div>
      <Footer current={'/soildegradation'} />
    </div>
  )
}














