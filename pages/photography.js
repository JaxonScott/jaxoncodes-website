import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/layout/section'
import { WorkGridItem } from '../components/grid-item'
import linkInBio from '../public/images/taycan_thumbnail.jpg'
import spyder from '../public/images/spyder_thumbnail.jpg'
import aircooled from '../public/images/aircooled/aircooled_thumbnail.jpg'
import Layout from '../components/layout/article'
const Photography = () => {
  return (
    <Layout>
      <Container>
        <Heading as='h3' fontSize={20} mb={4}>
          Photography
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id='taycan'
              title='Porsche Taycan'
              thumbnail={linkInBio}
            >
              Porsche Taycan Cross Turismo Shot at Porsche Of London
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id='spyder'
              title='Porsche 718 Spyder'
              thumbnail={spyder}
            >
              See this Porsche 718 Spyder rip through the back grounds
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id='aircooled'
              title='Porsche 964 c4'
              thumbnail={aircooled}
            >
              See this Porsche 718 Spyder rip through the back grounds
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Photography
