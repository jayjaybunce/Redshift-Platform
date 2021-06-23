import React from 'react'
import { Container } from '@chakra-ui/react'

type PageWrapperProps = {
    maxWidth: string 
}

export const PageWrapper: React.FC<PageWrapperProps> = ({maxWidth, children}) => {
    return <Container>
        {children}
    </Container>
}