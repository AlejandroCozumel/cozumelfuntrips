import Head from 'next/head'
// import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Featured from '../components/Featured'
import PropertyList from '../components/PropertyList'
import FeaturedProperties from '../components/FeaturedProperties'
import MailList from '../components/MailList'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <div className="mt-12 flex flex-col items-center gap-8 ">
          <Featured />
          <h1>Browse your property type</h1>
          <PropertyList />
          <h1 className="homeTitle">Home guests love</h1>
          <FeaturedProperties/>
          <MailList/>
        </div>
      </Layout>
    </div>
  )
}

export default Home
