import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/layout/section'
import { WorkGridItem } from '../components/grid-item'
import linkInBio from '../public/images/inkdrop_eyecatch.png'
import spyder from '../public/images/spyder_thumbnail.jpg'
import aircooled from '../public/images/aircooled/aircooled_thumbnail.jpg'
import Layout from '../components/layout/article'
const Code = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Development Work
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id='taycan'
              title='Linked in bio'
              thumbnail={linkInBio}
            >
              A simple app that allows you to link all of your socails in one
              place.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Code
