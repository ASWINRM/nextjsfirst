import classes from './event-item.module.css';
import Eventitem from './eventitem';
function Eventlist({items}){
    return (
        <div className={classes.list}>
            
                {items.map((item)=><Eventitem
                 id={item.id}
                 key={item.id}
                 title={item.title}
                 location={item.location}
                 description={item.description}
                 date={item.date}
                 image={item.image}
                ></Eventitem>)}
            
        </div>
    )
}

export default Eventlist;
