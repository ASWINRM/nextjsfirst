import Link from 'next/link';
import classes from './event-item.module.css';
import Button from './UI/button'
import DateIcon from './UI/DateIcon'
import ArrowRightIcon from './UI/ArrowRightIcon';
import AddressIcon from './UI/AddressIcon';
function Eventitem({image,location,title,date, description,id}){
    const readabletime=new Date(date).toLocaleDateString("en-US",{
        day:"numeric",
        month:"long",
        year:"numeric"
    })
    const explorelink=`/events/${id}`;
    const featuredlocation=location.replace(',','\n');
    return (
        <li className={classes.item}>
            <img  src={"/"+image} alt="eventimg" ></img>
           <div className={classes.content}>
                <div className={classes.content.h2}>
                    
                    <h2>{title}</h2>
                </div>
                <div className={classes.content.time}>
                   
                    <time>{readabletime}</time>
                </div>
                <div className={classes.content.address}>
                    <address>{featuredlocation}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={explorelink}><span>Explore Event</span>
                
                </Button>
            </div>
        </li>
            
        
    )
}

export default Eventitem
