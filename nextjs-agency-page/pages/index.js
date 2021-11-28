import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import Intro from"../components/Intro"
import Services from"../components/Services"
import { data } from '../data'

export default function Home({services}) {
  console.log(services);
  return (
    <div>
      <Head>
        <title>Portfolio Page</title>
        <meta name="description" content="A Portfolio page built with Next.JS" />
      </Head>

    <Intro/>
    <Services services={services}/>

    </div>
  );
}
export const getStaticProps = async () =>{
const services = data;
return{
  props:{services},
}

}
 