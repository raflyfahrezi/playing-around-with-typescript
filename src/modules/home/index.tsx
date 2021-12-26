import React from 'react'

import { Heading, Container } from '@/components'

import type { ContactModel } from '@/models'

type HomeModuleProps = {
    contactList: ContactModel[]
}

const HomeModule = ({ contactList }: HomeModuleProps) => {
    console.log(contactList)

    return (
        <Container>
            <div>
                <Heading text='Contacts' />
                <p>Hello World</p>
            </div>
        </Container>
    )
}

export default HomeModule
