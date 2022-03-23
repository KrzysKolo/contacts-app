import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { HeaderBoxProps } from '../../../../models/appModels'

const HeaderBox: React.FC<HeaderBoxProps> = ({ contactName, color, contactDescription }) => {

  return (
    <Box borderBottom="2px solid rgba(255, 255, 255, 0.2)">
      <Heading as='h2'letterSpacing="1.5px"size='md'>{contactName}</Heading>
      <Text color={color} textTransform="uppercase" fontSize="x-small" pb="2" fontWeight="bold">{contactDescription}</Text>
    </Box>
  )
}

export default HeaderBox