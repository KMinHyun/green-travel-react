import { useSelector } from 'react-redux';
import './FestivalList.css';

function FestivalList() {

  const FestivalList = useSelector(state => state.festivalSlice.list);

  return (
    <>
      <div className="festival-container">
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className='card-title'>축제 이름</p>
          <p className="card-period">25-09-23 ~ 25-09-23</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className='card-title'>축제 이름</p>
          <p className="card-period">25-09-23 ~ 25-09-23</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className='card-title'>축제 이름</p>
          <p className="card-period">25-09-23 ~ 25-09-23</p>
        </div>
        <div className="card">
          <div className="card-img" style={{backgroundImage: `url('http://tong.visitkorea.or.kr/cms/resource/91/3484791_image2_1.jpg')`}}></div>
          <p className='card-title'>축제 이름</p>
          <p className="card-period">25-09-23 ~ 25-09-23</p>
        </div>
      </div>
    </>
  )
}

export default FestivalList;