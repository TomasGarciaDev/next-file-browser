import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import FileItem from '../components/FileItem'

export default function Home({pictures}) {
  
  return (
    <Layout>
      {pictures.map(picture => (
        <FileItem picture={picture} key={picture.id}/>
      )
      )}
    </Layout>
  )
}


export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/pictures')

  const pictures = await res.json()

  return {
    props: {
      pictures
    }
  }
}
