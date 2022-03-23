import React from 'react';
import { CircularProgress, Flex } from '@chakra-ui/react'

const Loading = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <CircularProgress isIndeterminate color='secondary.100' size="xs" />
    </Flex>
  )
}

export default Loading;