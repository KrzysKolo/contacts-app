import React, {useEffect, useState} from 'react';
import { ContactCard } from '..';
import { Grid, useDisclosure, VStack } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllContacts, removeContact, setSuccess, isSuccess } from '../../redux/contactSlice';
import { getSearchContact, searchContactType } from '../../redux/searchContactSlice';
import contactApi from '../../api/contactApi';
import KModal from '../KModal/KModal';
import ContactFormEdit from './ContactFormEdit';
import { addToast } from '../../redux/toastSlice';
import { Contacts } from '../../models/appModels';

const ContactsList: React.FC = () => {

  const [contactId, setContactId] = useState<string>();
  const [filteredContacts, setFilteredContacts] = useState<Contacts[]>([]);
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();

 /*  Pobieranie danych z reduxa */
  const contacts = useSelector(getAllContacts);
  const searchValue: searchContactType | any | string = useSelector(getSearchContact);
  const dispatch = useDispatch();

  const _isSuccess = useSelector(isSuccess);

/* pobranie id contactu */
  const getContactId = (id : string) => {
    setContactId(id);
  };

  useEffect(() => {
    if (searchValue.trim() === "") {
		  setFilteredContacts(contacts);
		  return;
		}
		else {
		  if (searchValue.trim() !== "") {
        setFilteredContacts(
			  contacts.filter((contact: { name: string | any; }) => {
				const filteredContact = `${contact.name}`;
				return filteredContact
			.toLowerCase()
			.split(" ")
			.join("")
			.includes(searchValue.toLowerCase().split(" ").join(""));
			}
			  )
			);
		  }
		}
  }, [searchValue, contacts])
//EDYTOWANIE KONTAKTU
  const updateContactOnServer = async (name: string, email: string, phone: string,  street: string, code: string, city: string, description: string, image: {name: string, url: string}, typeContact: string, id: string) => {
    try {
      const data = await contactApi.patch(`/contacts/${id}.json`,
        { name, email, phone, street, code, city, description, image, typeContact,  }
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  let selectContact = contacts.find((contact) => contact.id === contactId);

  const updateContact = async (name: string, email: string, phone: string,  street: string, code: string, city: string, description: string, image: {name: string, url:string}, typeContact: string, id: string, ) => {
    await updateContactOnServer(name, email, phone, street, code, city, description, image, typeContact, id);
    dispatch(setSuccess(true));
    dispatch(addToast({ title: "Zaktualizowano dane w bazie", status: "success" }));
    }
 //USUWANIE KONTAKTU
  const deleteContactOnServer = async (id: string) => {
    try {
       await contactApi.delete(`/contacts/${id}.json`);
      dispatch(removeContact([contacts.filter(contact => contact.id !== id)]));
      dispatch(setSuccess(true));
      dispatch(addToast({ title: "Usunięto dane z bazy", status: "success" }));
     } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
        <KModal
        isOpen={isOpenEdit}
        title={"Update New Contact"}
        onOpen={onOpenEdit}
        onClose={onCloseEdit}>
        <ContactFormEdit
          updateContact={updateContact}
          contact={selectContact}
          onClose={onCloseEdit}
        />
      </KModal>
      <VStack alignContent='center' alignItems='center' justify='center'>
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={{ base: '2', lg: '12' }}>
          {filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              getContactId={getContactId}
              deleteContactOnServer={deleteContactOnServer}
              onOpen={onOpenEdit}
            />
          ))}
        </Grid>
      </VStack>
    </>
  )
}

export default ContactsList;

