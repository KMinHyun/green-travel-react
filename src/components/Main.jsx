import { useNavigate } from 'react-router-dom';
import './Main.css';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-container">
        <div className="main-img-title-box">
          <img className='title-img' src="./base/main-img.png" alt="대문" onClick={() => { navigate('/festivals') }}/>
          <p className="main-title" onClick={() => { navigate('/festivals') }}>축제 리스트 </p>
        </div>
      </div>
    </>
  )
}

export default Main;