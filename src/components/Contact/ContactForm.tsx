import React, {useEffect, useState} from 'react';
import {Checkbox, FormControl, FormLabel, VStack  } from '@chakra-ui/react';
import {Box, Text, Select, Stack, HStack, InputGroup, Input, InputLeftElement, Button, Container, Flex, Heading, Image} from '@chakra-ui/react'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { storageImage } from '../../firebase/config';
import { ContactFormProps } from '../../models/appModels';

interface  Event <T = EventTarget >  {
  target : T ;
}
const ContactForm = ({addNewContact, onClose, onOpen}: ContactFormProps) => {

  //IMAGES
  const [file, setFile] = useState<File | any>([]);
  const [errorFile, setErrorFile] = useState("");
  const types = ['image/png', 'image/jpeg', 'image/jpg'];
  const [url, setUrl] = useState<string>("")
  const [imageName, setImageName] = useState<string>("")

  const onFileChange = (e: any) => {
     const image = e.target.files[0];
     if (image )  {
      setFile(image);
      setErrorFile('')
    } else {
      setFile([]);
      setErrorFile('Wybierz plik .jpg lub .png');
    }
  }
  useEffect(() => {
    onHandleAdd();
  }, [file]);

  const onHandleAdd = async () => {
    const storageRef = storageImage.ref('images');
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file)
    setImageName(file.name)
    setUrl(await fileRef.getDownloadURL())
  };

  let image: { name: string | any, url: string | any } = {
    name: imageName,
    url: url,
  }
// DANE KONTAKTU
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [code, setCode] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [typeContact, setTypeContact] = useState("");

  const onSubmit = () => {
    addNewContact(
        name,
        email,
        phone,
        street,
        code,
        city,
        description,
        image,
        typeContact,  );
      onClose();
  }

  return (
    <>
    <Stack>
      <FormControl id="name">
        <FormLabel>Nazwisko</FormLabel>
        <Input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="description">
        <FormLabel>Stanowisko</FormLabel>
        <Input
          value={description}
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          />
      </FormControl>
      <FormControl id="email">
        <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<EmailIcon color='gray.300' />}
                />
            <Input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl id="phone">
          <FormLabel>Telefon</FormLabel>
            <InputGroup>
              <InputLeftElement
                 pointerEvents='none'
                 children={<PhoneIcon color='gray.300' />}
                />
              <Input
                value={phone}
                type="phone"
                onChange={(e) => setPhone(e.target.value)} />
            </InputGroup>
          </FormControl>
          <FormControl id="street">
            <FormLabel>Ulica</FormLabel>
              <Input
                value={street}
                type="text"
                onChange={(e) => setStreet(e.target.value)}
              />
          </FormControl>
        <HStack>
          <FormControl id="code">
            <FormLabel>Kod</FormLabel>
            <Input
              value={code}
              type="text"
              onChange={(e) => setCode(e.target.value)}
            />
          </FormControl>
          <FormControl id="city">
            <FormLabel>Poczta</FormLabel>
            <Input
              value={city}
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />
          </FormControl>
        </HStack>
        <FormControl id="typeOfContact">
          <FormLabel>Typ kontaktu</FormLabel>
          <Select onChange={(e) => setTypeContact(e.target.value)} name="typeContact" placeholder='Wybierz...'>
            <option value='0'>Kontakt prywatny</option>
            <option value='1'>Kontakt służbowy</option>
          </Select>
        </FormControl>
        <FormControl id="file">
          <FormLabel>Zdjęcie</FormLabel>
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={onFileChange}
            />
        </FormControl>
  {/*       <FormControl id="sm">
          <FormLabel>Social Media</FormLabel>
          <Checkbox>Dodaj SM</Checkbox>
        </FormControl> */}

        <Button onClick={onSubmit} bg="secondary.100" colorScheme="secondary" alignSelf="flex-end">
          Add Contact
        </Button>)

      </Stack>
      </>
  );
}

export default ContactForm;

