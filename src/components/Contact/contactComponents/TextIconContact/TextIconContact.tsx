import React from 'react';
import { Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextIconContactProps } from '../../../../models/appModels';

const TextIconContact: React.FC<TextIconContactProps> = ({ icon, contact }) => {
  console.log(contact)
  return (
    <Text><FontAwesomeIcon fontSize="x-small" icon={icon}/> {contact}</Text>
  )
}

export default TextIconContact