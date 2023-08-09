import "../styles.css"
import "./Headers"
import Projects from "./Projects"

export default function Home() {
  return (<>
    <div className="home-container">
      <div>
      <Projects /> 
      </div>
      <br />
      <div>MIDDLE</div>
    <div>LEFT </div></div>

  </>)
}