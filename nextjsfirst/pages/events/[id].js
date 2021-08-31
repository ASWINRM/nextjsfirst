import {useRouter} from 'next/router'
import {Fragment } from 'react'
import {getEventById} from '../../dummy-data'
import EventContent from '../../Components/event-content'
import LogisticsItem from '../../Components/logisticitem'
import EventSummary from '../../Components/event-summary';
import EventLogistics from '../../Components/event-logistic'
function eventdetailpage(){
    const router=useRouter();
    console.log(router.query);
    const id=router.query.id;
    const event=getEventById(id);

    if(!event){
     return <p>No Event Found !</p>
    }
    

    return(
      <Fragment>
        {
          event &&<div>
            <EventSummary title={event.title}></EventSummary>
          <EventLogistics 
          date={event.date} image={event.image} imageAlt={event.title} 
          address={event.location}
          ></EventLogistics>
          
          <EventContent><p>{event.description}</p></EventContent>
          </div> 
        }
        
      </Fragment>
    )
}

export default eventdetailpage;