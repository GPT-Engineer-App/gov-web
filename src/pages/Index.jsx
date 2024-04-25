import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaUserAlt, FaEnvelope, FaInfoCircle, FaPhone, FaBuilding } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={2}>
            E-Government Services
          </Heading>
          <Text fontSize="xl">One-stop portal for all your government needs.</Text>
        </Box>

        <HStack spacing={10} justifyContent="center">
          <ServiceCard icon={FaUserAlt} title="Personal Services" description="Manage personal documents like IDs, passports, and more." link="#" />
          <ServiceCard icon={FaBuilding} title="Business Services" description="Access business registrations, renewals, and filings." link="#" />
          <ServiceCard icon={FaInfoCircle} title="Information" description="Get the latest updates and information directly from government sources." link="#" />
        </HStack>

        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={2}>
            Contact Us
          </Heading>
          <Text fontSize="md">Reach out for support or inquiries.</Text>
          <HStack spacing={4} justifyContent="center" mt={4}>
            <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid">
              Call Us
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="solid">
              Email Us
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <VStack p={5} boxShadow="md" border="1px" borderColor="gray.200" borderRadius="lg" width="sm" _hover={{ boxShadow: "lg" }}>
    <Icon size="3em" />
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text textAlign="center">{description}</Text>
    <Link href={link} style={{ textDecoration: "none" }}>
      <Button colorScheme="blue" variant="outline">
        Learn More
      </Button>
    </Link>
  </VStack>
);

export default Index;
