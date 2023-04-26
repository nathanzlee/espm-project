import Header from '../components/header'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <Nav current={'/conclusion'}/>
      <div className="py-5 px-10">
        <h2 className="text-2xl">Conclusion</h2>
        <ul>
            <li>Recap of key issues and themes</li>
            <li>Call to action for addressing the farmers' crisis in Punjab</li>
            <li>Resources and further reading.</li>
        </ul>
      </div>
      <Footer current={'/conclusion'} />
    </div>
  )
}



























