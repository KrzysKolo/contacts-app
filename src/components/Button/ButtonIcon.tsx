import React from 'react'
import { Box} from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonProps } from '../../models/appModels';

const ButtonIcon:React.FC<ButtonProps> = ({color, icon, onClick}) => {
  return (
    <Box color={color} cursor="pointer" >
      <FontAwesomeIcon size="lg" icon={icon} onClick={onClick} />
    </Box>
  )
}

export default ButtonIcon;