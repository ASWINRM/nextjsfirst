import classes from './ResultFile.module.css'

function ResultFile(props) {

    const {date}=props;
    const readabledate= new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
      });
    
    return (
        <div>
            <h1 className={classes.title}>Events in {readabledate}  </h1>
        </div>
    )
}

export default ResultFile
