import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Login.module.scss'
import Head from 'next/head'

const LoginViews = () => {
  const { push, query } = useRouter();

  const handleLogin = () => {
    push('/product')
  }

  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      
      <div className={styles.login}>
        <h1 className='text-3xl font-bold'>LoginPage</h1>
        <button onClick={() => handleLogin()}>Login</button>
        <p style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}>
          Belum punya akun? registrasi <Link href={'/auth/register'}>disini</Link>
        </p>
      </div>
    </>
  )
}

export default LoginViews