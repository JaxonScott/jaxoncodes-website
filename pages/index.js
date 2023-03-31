import NextLink from "next/link";
import {
  Container,
  ListItem,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  List,
} from "@chakra-ui/react";
import Section from "../components/layout/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layout/article";
import { GridItem } from "../components/grid-item";
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
} from "react-icons/io5";
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Developer & Photographer from Canada
        </Box>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jaxon Scott
            </Heading>
            <p>Freelance Developer / Photographer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/jaxon.jpg"
              alt="Profile picture"
            />
          </Box>
        </Box>
        <Section delay={0}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Hey, I&apos;m Jaxon. I&apos;m a full-stack developer based out of
            Ontario, Canada. My passion has always been with all things
            technology, which naturally led me into the world of software and
            writing code. I enjoy building projects that solve real-world
            problems for myself and others, as well as helping businesses by
            building their dream sites and software. On top of my passion for
            code, I also love cars. Which got me into automotive photography. I
            thoroughly enjoy being able to capture the cars that we all dream of
            one day owning. You can see some of my projects and photo work here:
            <NextLink href="/development">
              <Link> My Portfolio</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/development">
              <Button righIcon={<ChevronRightIcon />} colorScheme="orange">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My Socails
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/JaxonScott" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoLogoGithub />}
                >
                  @JaxonScott
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/jaxoncodes/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoLogoInstagram />}
                >
                  @Jaxoncodes
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
