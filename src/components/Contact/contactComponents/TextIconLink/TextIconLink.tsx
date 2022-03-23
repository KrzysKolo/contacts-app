import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextIconLinkProps } from '../../../../models/appModels';
import customTheme from '../../../../theme';

const TextIconLink: React.FC<TextIconLinkProps> = ({icon, contact}) => {
  return (
    <Text><Link href={contact} target="_blank"><FontAwesomeIcon fontSize="1x" icon={icon} /></Link></Text>
  )
}

export default TextIconLink