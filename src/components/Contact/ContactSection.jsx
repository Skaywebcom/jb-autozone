import { 
  Box, 
  FormControl, 
  FormLabel, 
  Input, 
  Textarea, 
  VStack, 
  Button, 
  Container,
  Text,
  useToast,
  InputGroup,
  InputLeftElement,
  Icon
} from '@chakra-ui/react';
import { useState } from 'react';

function ContactSection() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <Box
      bg="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
      w="100%"
      minH="100vh"
      py={16}
    >
      <Container maxW="2xl" centerContent>
        {/* Header Section */}
        <Box textAlign="center" mb={12}>
          <Text
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="bold"
            color="gray.800"
            mb={4}
          >
            Get In Touch
          </Text>
          <Text
            fontSize={["md", "lg"]}
            color="gray.600"
            maxW="md"
            mx="auto"
            lineHeight="1.6"
          >
            Have questions? We would love to hear from you. Send us a message and we will respond as soon as possible.
          </Text>
        </Box>

        {/* Form Container */}
        <Box
          bg="white"
          rounded="2xl"
          shadow="2xl"
          p={[6, 8, 10]}
          w="100%"
          maxW="lg"
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            background: 'linear-gradient(45deg, #DD3219, #FF6B47, #DD3219)',
            borderRadius: '2xl',
            zIndex: -1,
          }}
        >
          <form onSubmit={handleSubmit}>
            <VStack spacing={6}>
              
              {/* Name Field */}
              <FormControl isRequired>
                <FormLabel 
                  fontSize="lg" 
                  fontWeight="600" 
                  color="gray.700"
                  mb={3}
                >
                  Full Name
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" h="60px">
                    <Icon viewBox="0 0 24 24" color="gray.400">
                      <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </Icon>
                  </InputLeftElement>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your full name"
                    h="60px"
                    pl="50px"
                    border="2px"
                    borderColor="gray.200"
                    _hover={{ borderColor: "gray.300" }}
                    _focus={{ 
                      borderColor: "#DD3219", 
                      boxShadow: "0 0 0 1px #DD3219",
                      transform: "translateY(-2px)"
                    }}
                    transition="all 0.2s"
                    bg="gray.50"
                    _placeholder={{ color: "gray.500" }}
                  />
                </InputGroup>
              </FormControl>

              {/* Phone Field */}
              <FormControl isRequired>
                <FormLabel 
                  fontSize="lg" 
                  fontWeight="600" 
                  color="gray.700"
                  mb={3}
                >
                  Phone Number
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" h="60px">
                    <Icon viewBox="0 0 24 24" color="gray.400">
                      <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                    </Icon>
                  </InputLeftElement>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="tel"
                    placeholder="Enter your phone number"
                    h="60px"
                    pl="50px"
                    border="2px"
                    borderColor="gray.200"
                    _hover={{ borderColor: "gray.300" }}
                    _focus={{ 
                      borderColor: "#DD3219", 
                      boxShadow: "0 0 0 1px #DD3219",
                      transform: "translateY(-2px)"
                    }}
                    transition="all 0.2s"
                    bg="gray.50"
                    _placeholder={{ color: "gray.500" }}
                  />
                </InputGroup>
              </FormControl>

              {/* Email Field */}
              <FormControl isRequired>
                <FormLabel 
                  fontSize="lg" 
                  fontWeight="600" 
                  color="gray.700"
                  mb={3}
                >
                  Email Address
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none" h="60px">
                    <Icon viewBox="0 0 24 24" color="gray.400">
                      <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </Icon>
                  </InputLeftElement>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter your email address"
                    h="60px"
                    pl="50px"
                    border="2px"
                    borderColor="gray.200"
                    _hover={{ borderColor: "gray.300" }}
                    _focus={{ 
                      borderColor: "#DD3219", 
                      boxShadow: "0 0 0 1px #DD3219",
                      transform: "translateY(-2px)"
                    }}
                    transition="all 0.2s"
                    bg="gray.50"
                    _placeholder={{ color: "gray.500" }}
                  />
                </InputGroup>
              </FormControl>

              {/* Message Field */}
              <FormControl isRequired>
                <FormLabel 
                  fontSize="lg" 
                  fontWeight="600" 
                  color="gray.700"
                  mb={3}
                >
                  Your Message
                </FormLabel>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  h="120px"
                  p="15px"
                  border="2px"
                  borderColor="gray.200"
                  _hover={{ borderColor: "gray.300" }}
                  _focus={{ 
                    borderColor: "#DD3219", 
                    boxShadow: "0 0 0 1px #DD3219",
                    transform: "translateY(-2px)"
                  }}
                  transition="all 0.2s"
                  bg="gray.50"
                  _placeholder={{ color: "gray.500" }}
                  resize="none"
                />
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                bg="linear-gradient(135deg, #DD3219 0%, #FF6B47 100%)"
                color="white"
                size="lg"
                h="60px"
                w="100%"
                mt={6}
                fontSize="lg"
                fontWeight="600"
                isLoading={isSubmitting}
                loadingText="Sending..."
                _hover={{ 
                  transform: 'translateY(-3px)',
                  boxShadow: '0 10px 25px rgba(221, 50, 25, 0.4)'
                }}
                _active={{ transform: 'translateY(-1px)' }}
                transition="all 0.2s"
                borderRadius="xl"
                leftIcon={
                  <Icon viewBox="0 0 24 24">
                    <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                  </Icon>
                }
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>

        {/* Footer Note */}
        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.600"
          mt={8}
          px={4}
        >
          We respect your privacy and will never share your information with third parties.
        </Text>
      </Container>
    </Box>
  );
}

export default ContactSection;