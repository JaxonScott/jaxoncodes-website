import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layout/article";

const Work = () => {
  return (
    <Layout title="Mocha">
      <Container>
        <Title>
          Mocha, Premium Caffiene Demo <Badge>2023</Badge>
        </Title>
        <P>
          Mocha, Premium Caffiene is a demo e-commerce website built using
          TypeScript, Next.JS, Tailwind CSS, Framer Motion and Headless UI.{" "}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Demo</Meta>
            <Link href="https://mocha-coffee.vercel.app/" target="_blank">
              https://mocha-coffee.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              href="https://github.com/JaxonScott/mocha-coffee"
              target="_blank"
            >
              https://github.com/JaxonScott/mocha-coffee{" "}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <WorkImage src="/images/mocha/MochaLayout.jpg" alt="Mocha Image 1" />
        <WorkImage src="/images/mocha/MochaLayout2.jpg" alt="Mocha Image 2" />
        <WorkImage src="/images/mocha/MochaLayout3.jpg" alt="Mocha Image 3" />
        <WorkImage src="/images/mocha/MochaLayout4.jpg" alt="Mocha Image 4" />
      </Container>
    </Layout>
  );
};

export default Work;
