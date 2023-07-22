// import { Link } from "react-router-dom"
import NavBar from '../NavBar';
import Banner from '../Banner';
import MovieRow from '../MovieRow';
import Footer from '../Footer';

function MainPage() {
  return (
    <div>
      <NavBar />
      <Banner />
      <MovieRow />
      <Footer />
      {/* <Link to="/login">Pagina de Login</Link> */}
    </div>
  )
}

export default MainPage