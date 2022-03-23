import React from 'react';
import {Flex, Box, Stack, Text, VStack, HStack, Heading, Image} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faUser} from "@fortawesome/free-solid-svg-icons";
import { faTiktok, faInstagram, faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import customTheme from '../../theme';
import { ButtonIcon } from './../';
import { HeaderBox, TextContact, TextIconContact, TextIconLink } from './contactComponents';
import photoUsers from '../../images/users.png'
import { ContactCardProps } from '../../models/appModels';

const ContactCard: React.FC<ContactCardProps> = ({ contact, getContactId, updateContactOnServer, deleteContactOnServer, onOpen }) => {

  const updateContactHandler = (id: string) => {
    getContactId(id);
    onOpen();
  };

  const deleteContactHandler = (id: string) => {
    deleteContactOnServer(id);
  };

  return (
    <Box minW={{base: 'auto', lg: '400px'}}>
      <Stack color="white" alignContent="flex-end" justify="space-between" bg={contact.typeContact === "1" ? "cardColor" : "primary.100"} p="4" borderRadius="xl" boxShadow="xl" mb="4">
        <HStack justifyContent="flex-end">
          <ButtonIcon icon={faEdit} onClick={()=> updateContactHandler(contact.id)} color="secondary.100" />
          <ButtonIcon icon={faTrash} onClick={()=> deleteContactHandler(contact.id)} color="darkColor" />
        </HStack>

        <Flex align="flex-start" >
          <Box mr="4" border="1px solid #21243D" w='50px' h='50px' borderRadius="50%" boxShadow="1px 1px 5px #21243D">
            <Image borderRadius='full' boxSize='98%' objectFit='cover' src={(contact.image.name !== "") ? contact.image.url : photoUsers } />
          </Box>
          <Stack>
            <HeaderBox contactName={contact.name} contactDescription={contact.description} color="backgroundColor" />
            <Box borderBottom="2px solid rgba(255, 255, 255, 0.2)" pb="2">
              {contact.email && <TextIconContact icon={faEnvelope} contact={contact.email} />}
              {contact.phone && <TextIconContact icon={faPhone} contact={contact.phone} />}
            </Box>
            <Box pb="2">
              <TextContact contact={contact.street} />
              <Box display="flex">
                <TextContact contact={contact.code} />
                <TextContact contact={contact.city} />

              </Box>
            </Box>
           </Stack>
        </Flex>
        <HStack justifyContent="flex-end">
          <TextIconLink icon={faFacebook} contact="https://www.wp.pl" />
          <TextIconLink icon={faInstagram} contact="https://www.wp.pl" />
          <TextIconLink icon={faGithub} contact="https://www.wp.pl" />
          <TextIconLink icon={faLinkedin} contact="https://www.wp.pl" />
          <TextIconLink icon={faTiktok} contact="https://www.wp.pl" />
        </HStack>
        </Stack>
    </Box>
  )
}

export default ContactCard;


