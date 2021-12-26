import React from 'react'

import { Heading, Container, ContactCard } from '@/components'

import type { ContactModel } from '@/models'

type HomeModuleProps = {
    contactList: ContactModel[]
}

const HomeModule = ({ contactList }: HomeModuleProps) => {
    return (
        <Container>
            <div>
                <Heading text='Contacts' />
                <div
                    className='grid gap-6'
                    style={{
                        gridTemplateColumns:
                            'repeat(auto-fill, minmax(270px, 1fr))',
                    }}
                >
                    {contactList.map((item) => {
                        const { id, name, email, username } =
                            item as ContactModel

                        return (
                            <ContactCard
                                key={id}
                                name={name}
                                email={email}
                                username={username}
                                fullWidth
                            />
                        )
                    })}
                </div>
            </div>
        </Container>
    )
}

export default HomeModule
