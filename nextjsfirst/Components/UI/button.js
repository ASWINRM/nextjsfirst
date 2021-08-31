import Link from 'next/link';
import classes from './button.module.css';
function Button (props) {
   
      if(props.link){
          return(
         <Link href={props.link}>
            <a className={classes.btn}>{props.children}</a> 
        </Link>
          );
      }  
      return <button className={classes.bttn} width="100%"
      onClick={props.onClick}
      >{props.children}</button>
        
    
}

export default Button
