import React from 'react';
import {
  Box, Text, Heading, Button, Image,
} from '@chakra-ui/core';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '@staticfuse/gatsby-theme-publisher/src/components/Layout';
import SEO from '@staticfuse/gatsby-theme-publisher/src/components/SEO';
import PostGrid from '@staticfuse/gatsby-theme-publisher/src/components/PostGrid';
import SiteLogo from './site-logo.png';
import BlogOptin from '@staticfuse/gatsby-theme-publisher/src/components/BlogOptin';
import useSiteMetadata from '@staticfuse/gatsby-theme-publisher/src/hooks/use-site-metadata';

const Home = ({ location }) => {
  const { title } = useSiteMetadata();

  const imageData = useStaticQuery(graphql`
    {
      file(name: { eq: "arkaplan" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout location={{ location }} fullWidth="true">
      <SEO title="Home" />

      <Box bg="gray.800" borderBottom="1px solid #ccc" mb={4}>
        <BackgroundImage
          fluid={imageData.file.childImageSharp.fluid}
          style={{ padding: '.5rem', backgroundPosition: 'right' }}
        >
          <Box
            m="auto"
            display={['block', 'block', 'flex']}
            maxW="4xl"
            justifyContent="space-between"
            alignItems="center"
          >
            

            <Box w={['100%', '100%', '65%']} color="#fff" mb={[6, 6, '0']}>
              <Heading
                as="h1"
                fontWeight="600"
                fontSize="3.2rem"
                color="white"
                lineHeight="1.1"
              >
               <br/> {title}
              </Heading>
              <Text color="white.500" fontSize="md" mb={8} fontWeight="500">
                Welcome to Kemer Antalya Guide <br/> 
              </Text>
            
          
            </Box>
          </Box>
        </BackgroundImage>
      </Box>

      <Box maxW="4xl" m="auto" px={2}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))"
          gridColumnGap="4%"
          gridRowGap="4%"
          my="4rem"
        >
          <Box>
            <Heading lineHeight="1.2" color="blue.500" fontSize="2xl">
              Here's something interesting...
            </Heading>
            <Text color="gray.500">
              Cap’n Crunch’s full name is Horatio Magellan Crunch. Sometimes I
              think about his journey to fame as I pour myself a bowl of his
              crunchtastic cereal. I mean, it must be hard being that famous.
              Cartoon celebrities have feelings too.
            </Text>
            <Button rounded="full" variant="outline" variantColor="blue">
              Crunch
            </Button>
          </Box>
          <Box
            as="iframe"
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/dS8S6eIODDMk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </Box>
      </Box>

      <Box className="row-wrapper" bg="#e4f5fe" py={8} px={2}>
        <Box maxW="4xl" m="auto">
          <Box
            display={['block', 'grid']}
            gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
            gridColumnGap="4%"
            my={8}
          >
            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                Thing One
              </Heading>
              <Text color="gray.500">
                We are always improving upon our stellar reputation. It isn't
                hard really, because our reputation is pretty bad. Hey, at least
                we're trying!
              </Text>
            </Box>

            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                Thing Two
              </Heading>
              <Text color="gray.500">
                You can always contact us if you need anything. We don't check
                emails on days ending in "Y" but we'll get back to you as soon
                as possible.
              </Text>
            </Box>

            <Box>
              <Heading
                as="h3"
                my={4}
                fontSize="xl"
                fontWeight="400"
                color="gray.600"
              >
                Thing Three
              </Heading>
              <Text color="gray.500">
                This box has a bell icon because I didn't try very hard to make
                this template realistic. You can ring my beeee-e-ell, ring my
                bell.
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box maxW="4xl" mx="auto" my={8} px={2}>
        <Heading as="h4" color="gray.400" fontSize="lg">
          Latest posts
        </Heading>
        <PostGrid limit="3" noPadding />
      </Box>

      <Box maxW="4xl" m="auto" textAlign="center" bg="gray.100" rounded="lg" p={6} mb={6}>
        <BlogOptin title="Get more great stuff like this" description="Enter your email to join my newsletter." />
      </Box>
    </Layout>
  );
};

export default Home;
