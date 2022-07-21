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
          Porsche 718 Spyder <Badge>2022</Badge>
        </Title>
        <P>See this beautiful Porsche 718 Spyder rip through the backroads.</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Instagram</Meta>
            <Link href='https://www.instagram.com/jaxoncodes/' target='_blank'>
              https://www.instagram.com/jaxoncodes/{' '}
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/images/spyder_thumbnail.jpg' alt='spyder' />
        <WorkImage src='/images/spyder/spyder_2.jpg' alt='taycan' />
        <WorkImage src='/images/spyder/spyder_3.jpg' alt='taycan' />
        <WorkImage src='/images/spyder/spyder_4.jpg' alt='taycan' />
        <WorkImage src='/images/spyder/spyder_5.jpg' alt='taycan' />
      </Container>
    </Layout>
  )
}

export default Work
