import {useRouter} from 'next/router'
import { useEffect } from 'react';
import {getFilteredEvents} from '../../dummy-data'
import Eventlist from '../../Components/eventlist';
import styles from '../../styles/Home.module.css'
import ResultFile from '../../Components/ResultFile';
import ErrorAlert from '../../Components/UI/error-alert';
import classes from '../../Components/UI/error-alert.module.css';
function filteredEvent ()  {
    const router=useRouter();
    
    const event=router.query;
    const filtereddata=event.slug;
    
    const nummonth=parseInt(filtereddata?filtereddata[1]:"0");
    const numyear=parseInt(filtereddata?filtereddata[0]:"0");
    const events=getFilteredEvents({year : numyear,month :nummonth});
    
    if(!events && events.length===0){
       return <ErrorAlert>No Events are found in this Month</ErrorAlert>
    }
    const date=new Date(numyear,nummonth-1);
    return (
        <div >
         {events.length>0 ? <div className={styles.container}>
            <ResultFile date={date}></ResultFile>
            <Eventlist items={events}></Eventlist>
         </div>:<ErrorAlert>No Events are found in this Month</ErrorAlert> }
                      
        </div>
    )
}

export default filteredEvent;
