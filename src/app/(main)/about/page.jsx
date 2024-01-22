import PageHeader from '@/components/common/page-header'
import { wait } from '@/utils/misc'
import Image from 'next/image'

import React from 'react'

export const metadata = {
  title: 'About',
  description: 'You can get luxury electronic devices',
}


const AboutDetail = async ({params}) => {
  await wait (3000)
  
  // throw new Error("test")
  return (
    <div>
      <PageHeader title="About"/>

      <Image src="https://loremflickr.com/800/400" width={800} height={400} alt='loremflicker' />
    </div>
  )
}

export default AboutDetail