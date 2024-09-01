import profilePic from './assets/channels4_profile.jpg'

export default function Card() {
  return (
    <div className="card">
        <img className="card-image" src={profilePic} alt="image not found"></img>
        <h2 className="card-title">Brototype</h2>
        <p className="card-text">Self learning</p>
      
    </div>
  )
}
