import { useDispatch, useSelector } from 'react-redux';
import './FestivalDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { dateFormatter } from '../../utils/dateFormatter';
import { useEffect } from 'react';
import { setFestivalInfo } from '../../store/slices/festivalDetailSlice';

function FestivalDetail() {
  const festivalInfo = useSelector(state => state.festivalDetail.
  festivalInfo);
  const festivalList = useSelector(state => state.festival.list);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const item = festivalList.find(item => params.id === item.contentid);

    if(!item) {
      alert('잘못된 접근입니다.');
      navigate('/');
    }

    dispatch(setFestivalInfo(item));
  }, [])

  function moveBack() {
    navigate(-1);
  }

  return (
    <>
      { festivalInfo?.title &&
      <div className="festival-detail-container">
          <button type="button" onClick={moveBack}>되돌아가기</button>
          <img src={festivalInfo.firstimage} alt="" className="festival-detail-img" />
          <p className="festival-detail-title">{festivalInfo.title}</p>
          <p className="festival-detail-period">{dateFormatter.withHyphenYYMMDD(festivalInfo.eventstartdate)} ~ {dateFormatter.withHyphenYYMMDD(festivalInfo.eventenddate)}</p>
          <p className="festival-detail-addr">{`${festivalInfo.addr1}, ${festivalInfo.addr2}`}</p>
      </div>
      }
    </>
  )
}

export default FestivalDetail;