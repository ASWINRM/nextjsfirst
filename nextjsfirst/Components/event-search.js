import Button from "./UI/button"
import {getFilteredEvents} from '../dummy-data'
import { useRef } from "react";
import classes from './event-search.module.css';
function EventSearch (props) {
    const selectedmonth=useRef();
    const selectedyear=useRef();

    const submithandler=(e)=>{
        e.preventDefault();
        const year=selectedyear.current.value;
        const month=selectedmonth.current.value;
        props.OnSearch(year,month);
    }
    return (
        <form className={classes.form} onSubmit={submithandler} >
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">YEAR</label>
                    <select id="year" ref={selectedyear}>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>

                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">MONTH</label>
                    <select id="month" ref={selectedmonth}>
                        <option value="1">January</option>
                        <option value="2">Febuary</option>
                        <option value="3">March</option>
                        <option value="4">Apirl</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
                <div>
                  <Button type="submit" >Search</Button>
                </div>
            </div>
        </form>
    )
}

export default EventSearch
