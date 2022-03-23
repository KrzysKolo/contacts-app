import React, { useEffect} from 'react';
import { Container, Grid, GridItem } from '@chakra-ui/react';
import { Sidebar, ContactsList, Header, Loading } from '../components';
import contactApi from '../api/contactApi';
import { useSelector } from 'react-redux';
import { getContacts, isSuccess, setSuccess, isLoading, setLoading  } from '../redux/contactSlice';
import { useAppDispatch } from '../redux/hooks';

const ContactsPage: React.FC = () => {

  const dispatch = useAppDispatch();
  const _isSuccess = useSelector(isSuccess);
  const _isLoading = useSelector(isLoading);

  const fetchContacts = async () => {
    try {
      const res = await contactApi.get(`/contacts.json`);
      const contactsTab = [];
      for (const key in res.data) {
        contactsTab.push({ ...res.data[key], id: key })
      }
      dispatch(getContacts(contactsTab));
      dispatch(setLoading(false));
      dispatch(setSuccess(false));
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    if (_isSuccess === true) {
      fetchContacts();
    }
  }, [_isSuccess]);

  return (
    <Container minW="100%"  >
      <Header />
      <Grid templateColumns={{ base: '1fr', lg: 'repeat(3, 1fr)' }} gap={{ base: '2', lg: '16' }} >
        <GridItem w={{base: '100%', sm: '90%', md: '60%', lg: '100%'}} marginLeft={{base: 'auto'}}  marginRight={{base: 'auto'}}>
          <Sidebar />
        </GridItem>
        <GridItem w={{ base: '100%'}} >
        { _isLoading && <Loading /> }
          <ContactsList />
        </GridItem>
      </Grid>
    </Container>


  )
}

export default ContactsPage
