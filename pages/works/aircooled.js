import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title='Spyder'>
      <Container>
        <Title>
          Porsche 964 C4 <Badge>2022</Badge>
        </Title>
        <P>An amazingly restored Porsche 964 C4</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Instagram</Meta>
            <Link href='https://www.instagram.com/jaxoncodes/' target='_blank'>
              https://www.instagram.com/jaxoncodes/{' '}
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage
          src='/images/aircooled/aircooled_thumbnail.jpg'
          alt='964 c4'
        />
        <WorkImage src='/images/aircooled/aircooled_1.jpg' alt='taycan' />
        <WorkImage src='/images/aircooled/aircooled_2.jpg' alt='taycan' />
        <WorkImage src='/images/aircooled/aircooled_3.jpg' alt='taycan' />
        <WorkImage src='/images/aircooled/aircooled_4.jpg' alt='taycan' />
      </Container>
    </Layout>
  )
}

export default Work
