import type { NextPage } from 'next'
import dynamic from 'next/dynamic';
import Head from 'next/head'

const Card = dynamic(import('../components/Card'), { ssr: true });
const Navigation = dynamic(import('../components/Navigation'), { ssr: true });
const Hero = dynamic(import('../components/Hero'), { ssr: true });

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const articleData = await res.json()
  if (!articleData) {
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
    props: { articleData: articleData }
  }
}

interface HomeProps {
  articleData: {
    "userId": number,
    "id": number,
    "title": string,
    "body": string,
  }[]
}
const Home: NextPage<HomeProps> = (props) => {
  return (
    <div className="hidden lg:block">
      <div className="cover-image font-sans">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="max-w-[1440px] px-[13rem]">
          <Navigation />
          <Hero />
        </header>
      </div>
      <div className="max-w-[1440px] px-[13rem] py-[7.875rem]">
        <h2 className="text-[#333456] font-semibold text-4xl leading-none">Popular Destination</h2>
        <div className="bg-[#7E8EE3] h-1 w-1/12 mt-2" />
        <div className="mt-12 grid grid-cols-3 gap-6">
          {props.articleData.map((article, index) => {
            if (index > 2) {
              return null;
            }
            return <Card key={index} articleData={article}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
