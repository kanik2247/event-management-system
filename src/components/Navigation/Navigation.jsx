import "./Navigation.css"
const Navigation=()=>{
    return(
        <nav className="navbar">
      <ul className="navbar-links">
        <li className="navbar-item"><a href="/">Home</a></li>
        <li className="navbar-item"><a href="/find-events">Find Events</a></li>
      </ul>
    </nav>
    )
}
export default Navigation;