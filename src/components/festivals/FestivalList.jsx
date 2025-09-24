import { useDispatch, useSelector } from 'react-redux';
import './FestivalList.css';
import { dateFormatter } from '../../utils/dateFormatter';

function FestivalList() {

  const FestivalList = useSelector(state => state.festival.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="festival-container">
        {
          FestivalList.length > 0 && FestivalList.map(item => {
            return (
              <div className="card" key={item.contentid}>
                <div className="card-img" style={{backgroundImage: `url('${item.firstimage}')`}}></div>
                <p className='card-title'>{item.title}</p>
                <p className="card-period">{dateFormatter.withHyphenYYMMDD(item.eventstartdate)} ~ {dateFormatter.withHyphenYYMMDD(item.eventenddate)}</p>
              </div>
            );
          })
        }
      </div>
    </>
  )
}

export default FestivalList;