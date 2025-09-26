import { useDispatch, useSelector } from 'react-redux';
import './FestivalList.css';
import { dateFormatter } from '../../utils/dateFormatter';
import { festivalIndex } from '../../store/thunks/festivalThunk';
import { useEffect } from 'react';
import { setScrollEventFlg, setShowTopButton } from '../../store/slices/festivalSlice';
import { useNavigate } from 'react-router-dom';

function FestivalList() {

  const FestivalList = useSelector(state => state.festival.list);
  const scrollEventFlg = useSelector(state => state.festival.scrollEventFlg);
  const showTopButton = useSelector(state => state.festival.showTopButton);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 200) {
        dispatch(setShowTopButton(true));
      } else {
        dispatch(setShowTopButton(false));
      }
    }

    window.addEventListener('scroll', addNextPage);
    window.addEventListener('scroll', handleScroll);

    if(FestivalList.length === 0) {
      dispatch(festivalIndex());
    }

    return () => {
      window.removeEventListener('scroll', addNextPage);
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  function addNextPage() {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const nowHeight = window.scrollY;
    const winEndHeight = documentHeight - windowHeight;

    if(nowHeight === winEndHeight && scrollEventFlg) {
      dispatch(setScrollEventFlg(false));
      dispatch(festivalIndex());
    }
  }

  function moveDetail(item) {
    navigate(`/festivals/${item.contentid}`);
  }

  return (
    <>
      <div className="festival-container">
        {
          FestivalList.length > 0 && FestivalList.map(item => {
            return (
              <div className="card" onClick={() => {moveDetail(item)}} key={item.contentid}>
                <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className='card-title'>{item.title}</p>
                <p className="card-period">{dateFormatter.withHyphenYYMMDD(item.eventstartdate)} ~ {dateFormatter.withHyphenYYMMDD(item.eventenddate)}</p>
              </div>
            );
          })
        }
      </div>
      {showTopButton &&
        <a href="#"><button type="button" className='button-move-top'>TOP</button></a>
      }
    </>
  )
}

export default FestivalList;