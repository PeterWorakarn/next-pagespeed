import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products/category/jewelery')
  const storeData = await res.json()
  if (!storeData) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }

  return {
    // Pass data to the page via props
    // Incremental   Static  Regeneration
    revalidate: 1,
    props: { storeData: storeData }
  }
}

interface HomeProps {
  storeData: {
    "id": number,
    "title": string,
    "price": number,
    "description": string,
    "category": string,
    "image": string,
  }[]
}

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Card storeData={props.storeData} />
      </main>
    </div>
  )
}

export default Home
