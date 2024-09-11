
import Avatar from 'react-avatar';
import './Navigation.css'


const Navigation = () => {
    return (
      <div>
        <nav className='container'>
          <div className='navbar'>
            <span style={{color:"white"}}>
              Welcome Aayushi
            </span>
            <Avatar googleId="118096717852922241760" size="80" round={true} />
          </div>
        </nav>
      </div>
    )
  }
  
  export default Navigation
  