import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {getFeaturedEvents} from '../dummy-data'
import Eventlist from '../Components/eventlist'
export default function Homepage() {
  const featuredevents=getFeaturedEvents();
  return (
    <div className={styles.container}>
      <ul>
         <Eventlist items={featuredevents}></Eventlist>
      </ul>
    </div>
  )
}
