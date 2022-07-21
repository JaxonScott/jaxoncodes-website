import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import Taycan1 from '../../public/images/taycan/taycan_1.jpg'
import taycanThumbnail from '../../public/images/taycan_thumbnail.jpg'

const Work = () => {
  return (
    <Layout title='Taycan'>
      <Container>
        <Title>
          Porsche Taycan <Badge>2022</Badge>
        </Title>
        <P>
          A beautiful Porsche Taycan cross turismo, shot at Porsche Of London.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Instagram</Meta>
            <Link href='https://www.instagram.com/jaxoncodes/' target='_blank'>
              https://www.instagram.com/jaxoncodes/
              <ExternalLinkIcon mx='2px' />
            </Link>
          </ListItem>
        </List>
        <WorkImage src='/images/taycan_thumbnail.jpg' alt='taycan' />
        <WorkImage src='/images/taycan/taycan_1.jpg' alt='taycan' />
        <WorkImage src='/images/taycan/taycan_2.jpg' alt='taycan' />
        <WorkImage src='/images/taycan/taycan_3.jpg' alt='taycan' />
        <WorkImage src='/images/taycan/taycan_4.jpg' alt='taycan' />
      </Container>
    </Layout>
  )
}

export default Work
