import React from 'react'
import axios from 'axios'
import { GetStaticProps } from 'next'

import { HomeModule } from '@/modules'
import { PageWrapper } from '@/layout'

import type { ContactModel } from '@/models'

type indexProps = {
    contactList: ContactModel[]
}

const index = ({ contactList }: indexProps) => {
    return (
        <PageWrapper>
            <HomeModule contactList={contactList} />
        </PageWrapper>
    )
}

const getStaticProps: GetStaticProps = async () => {
    const contactListResponse = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
    )

    const contactList = await contactListResponse.data

    return {
        props: {
            contactList,
        },
    }
}

export default index
export { getStaticProps }
