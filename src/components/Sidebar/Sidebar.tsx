import React, { useState, useEffect } from 'react'
import { Flex, Box, Heading, Image, Button, Icon, InputGroup, InputLeftElement, Input, useDisclosure } from '@chakra-ui/react';
import { AddIcon, SearchIcon } from "@chakra-ui/icons";

import KModal from './../KModal/KModal';
import ContactForm from '../Contact/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, setSuccess } from './../../redux/contactSlice'
import contactApi from './../../api/contactApi';
import { contactStateType, isSuccess } from './../../redux/contactSlice';
import { searchContacts } from '../../redux/searchContactSlice';
import { searchContactType } from './../../redux/searchContactSlice';
import { addToast, getStateToast } from '../../redux/toastSlice';
import { useToastHook } from '../../utils/hooks/useToastHook';

const Sidebar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchData, setSearchData] = useState<searchContactType | any>("");
  const dispatch = useDispatch();
  const [state, newToast] = useToastHook();

  const _toast = useSelector(getStateToast);
  const _isSuccess = useSelector(isSuccess);

const someThingHappens = (title: string, status: string) => {
  newToast({ title: title, status: status });
};

  useEffect(() => {
    dispatch(searchContacts(searchData))
  }, [searchData]);

  useEffect(() => {
    if (_toast.status !== "") {
      someThingHappens(`${_toast.title}`, `${_toast.status}`);
     }
  }, [_toast]);


  const addContactOnServer = async (
    name: string,
    email: string,
    phone: string,
    street: string,
    code: string,
    city: string,
    description: string,
    image: {
      name: string | any,
      url: string | any,
    },
    typeContact: string) => {
      try {
        const res: contactStateType = await contactApi.post(`/contacts.json`,
          {
            name,
            email,
            phone,
            street,
            code,
            city,
            description,
            image: {
              name: image.name,
              url: image.url,
            },
            typeContact
          }
        );
        dispatch(addContact(res));
        dispatch(setSuccess(true));
        dispatch(addToast({ title: "Dodano dane do bazy", status: "success" }));
       } catch (error) {
        console.log(error);
      }

  };

  const addNewContactHandle = async (
    name: string,
    email: string,
    phone: string,
    street: string,
    code: string,
    city: string,
    description: string,
    image: { name: string | any, url: string | any },
    typeContact: string) => {
    addContactOnServer(name, email, phone, street, code, city, description, image, typeContact);
    }
 return (
   <>
      <KModal
        isOpen={isOpen}
        title={"Add New Contact"}
        onOpen={onOpen}
        onClose={onClose}
      >
        <ContactForm addNewContact={addNewContactHandle} onClose={onClose} />
      </KModal>
    <Box>
      <Box>
        <Button
            bg="secondary.100"
            color="white"
            colorScheme="secondary"
            fontFamily="button"
            w="full"
            fontSize="xl"
            fontWeight="bold"
            onClick={onOpen}
        >
          <AddIcon
            w="20px"
            h="20px"
            borderRadius="50%"
            mr="4"
            border="2px solid white"
            p="1"
          />
            Add Contact
          </Button>
        </Box>
        <Box p="4">
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon color='gray.300' />}
            />
            <Input
              onChange={(e) => setSearchData(e.target.value)}
              focusBorderColor="primary.100"
              type='text'
              placeholder='Search contact...' />
          </InputGroup>
        </Box>
      </Box>
    </>
  )
}

export default Sidebar;


