import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/layout/section";
import { WorkGridItem } from "../components/grid-item";
import linkInBio from "../public/images/inkdrop_eyecatch.png";
import MochaLayout from "../public/images/mocha/MochaLayout.jpg";
import spyder from "../public/images/spyder_thumbnail.jpg";
import aircooled from "../public/images/aircooled/aircooled_thumbnail.jpg";
import Layout from "../components/layout/article";
const Code = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Development Work
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <section>
            <WorkGridItem
              id="mocha"
              title="Mocha E-Commerce Demo"
              thumbnail={MochaLayout}
            >
            e-commerce demo website built with Next.JS & Tailwind CSS
            </WorkGridItem>
          </section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Code;
