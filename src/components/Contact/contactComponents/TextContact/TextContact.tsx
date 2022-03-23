import React from 'react';
import { Text } from '@chakra-ui/react';
import { TextContactProps } from '../../../../models/appModels';

const TextContact: React.FC<TextContactProps> = ({contact}) => {
  return (
    <Text fontSize="1x" marginRight="4"> {contact} </Text>
  )
}

export default TextContact;