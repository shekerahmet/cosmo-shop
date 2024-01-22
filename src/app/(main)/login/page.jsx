import PageHeader from '@/components/common/page-header'
import Spacer from '@/components/common/spacer'
import LoginForm from '@/components/login/login-form'
import { wait } from '@/utils/misc'
import React from 'react'

export const metadata = {
  title: 'Login',
  description: 'You can get luxury electronic devices',
}

const LoginPage = async () => {
  await wait (2000)
  return (
    <div>
      <PageHeader title="Login" />
      <Spacer height={50}/>
      <LoginForm/>
      <Spacer/>
      
      </div>
  )
}

export default LoginPage