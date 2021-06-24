import { Box } from '@fower/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Box bgRed200 p4 m6>
          foo
        </Box>

        <Box bgRed200 p4 bgGreen100>
          foo
        </Box>

        <Box bgRed200 p4 gray300>
          bar
        </Box>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
