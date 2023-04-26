import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Nav current={'/'}/>
      <div className="py-5 px-10">
        <h2 className="text-2xl">Introduction</h2>
        <ul>
          <li>Overview of the farmers' crisis in Punjab</li>
          <li>Historical context and current status</li>
          <li>Connection between natural resources and farmer distress</li>
        </ul>
      </div>
      <Footer current={'/'} />
    </div>
  )
}





