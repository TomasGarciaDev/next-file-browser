import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Files from '../components/Files'

export default function Home({folders}) {
  
  return (
    <Layout>
      {folders.map(folder => (
        <Files file={folder} />
      )
      )}
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api')

  const folders = await res.json()

  return {
    props: {
      folders
    }
  }
}
