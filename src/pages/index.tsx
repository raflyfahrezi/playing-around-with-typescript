import React from 'react'
import axios from 'axios'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import type { NextPage } from 'next'

import { HomeModule } from '@/modules'
import { PageWrapper } from '@/layout'

const index: NextPage = ({
    contactList,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
