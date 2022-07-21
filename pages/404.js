import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as='h1' mt={12}>
        Not Found
      </Heading>
      <Text>The page you&aposre; looking for could not be found.</Text>
      <Divider my={6} />
      <Box my={6} align='center'>
        <NextLink href='/'>
          <Button colorScheme='orange'>Return Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
