
import IMG from '../../assets/header.jpg';
import './logo.css'

const Logo = () => {
  return (
    <a href='#Home' className='d-flex align-items-center '>
      <div className='container-image' >
        <img className='image-nav'  src={IMG} alt="image nav" />
      </div>
      <span className='title-logo'>Walid F</span>
    </a>
  )
}

export default Logo