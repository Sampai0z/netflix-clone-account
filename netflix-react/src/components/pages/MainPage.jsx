import { Link } from "react-router-dom"
function MainPage() {
  return (
    <div>
      <h1>MainPage</h1>
      <Link to="/login">Pagina de Login</Link>
    </div>
  )
}

export default MainPage