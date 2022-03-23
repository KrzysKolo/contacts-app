import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import photo from '../../images/contact.png';

const Header = () => {
  return (
    <Flex p="4"  marginBottom="4" flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} justifyContent={{sm: 'center', md: 'center', lg: 'flex-start'}} alignItems={{sm: 'center', md: 'center'}}>
      <Box display="flex" flexDirection={{base: 'column',sm: 'column', md: 'column', lg: 'row'}} justifyContent={{base: 'center', sm: 'center', md: 'center', lg: 'flex-start'}} alignItems="center" >
        <Image src={photo} alt="Contact" w={{ sm: '50%', lg: '30%' }} m={{ base: 'auto', md: '0' }} />
        <Box display="flex" flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }} justifyContent={{ base: 'center', sm: ' center', md: 'center', lg: 'flex-start' }} alignItems={{ base: 'center' }}>
          <Heading as="h1" textTransform="uppercase" fontFamily="heading" marginLeft={{ sm: 'auto', md: '10', lg: '20'}} marginTop={{ base: '5', sm: '5', lg: '0'}}>
            Contact App
          </Heading>
        </Box>
      </Box>
  </Flex>
  )
}

export default Header