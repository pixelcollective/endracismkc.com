import {Form, Footer, Nav, Header, Quote} from 'components/partials'
import {Letter} from 'content/Letter'

export const Home = () => (
  <div className="bg-white">
    <Nav />
    <Header />
    <Form />
    <Quote />
    <Letter />
    <Footer />
  </div>
)

export default Home
