import {getAllEvents} from '../../dummy-data'
import Eventlist from '../../Components/eventlist';
import  styles  from '../../styles/Home.module.css';
import EventSearch from '../../Components/event-search';
import {useRouter} from 'next/router';
function alleventspage () {
    const router=useRouter();
    const events=getAllEvents();
    const OnSearch=(year,month)=>{
      const searchlink=`/events/${year}/${month}`;
      router.push(searchlink);
    }
    return (
        <div className={styles.container}>
            <EventSearch OnSearch={OnSearch}></EventSearch>
            <Eventlist items={events} ></Eventlist>
        </div>
    )
}

export default alleventspage
