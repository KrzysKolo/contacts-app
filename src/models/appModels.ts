import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { JsxElement } from "typescript"

export interface Contacts {
  id?: string | any,
  name: string,
  email: string,
  phone: string,
  street: string,
   code: string,
   city: string,
  description: string,
   image: {
     name: string,
     url: string,
   },
  typeContact: string,
}
export interface KModalProps {
  title: string;
  children: JsxElement | any;
  isOpen: boolean;
  contact?: Contacts;
  onClose: () => void;
  onOpen: () => void;
};


export type ContactCardProps = {
  contact: Contacts;
  getContactId: (id: string) => void;
  deleteContactOnServer: (id: string | any) => Promise<void | any>;
  updateContactOnServer?: (name: string, description: string, email: string, phone: string, id: string | any, typeContact: string) => Promise<void | any>;
  onOpen: () => void;
};

export type ContactFormProps = {
  addNewContact: (
    name: string,
    email: string,
    phone: string,
    street: string,
    code: string,
    city: string,
    description: string,
    image: {
      name: string,
      url: string,
    },
    typeContact: string,
  ) => void;
  onClose: () => void;
  onOpen?: () => void;
};

export type ContactFormEditProps = {
  contact: Contacts | any,
  updateContact: (
    name: string,
    email: string,
    phone: string,
    street: string,
    code: string,
    city: string,
    description: string,
    image: {
    name: string,
    url: string,
  }, typeContact: string, id: string, ) => Promise<void | any>;
  onClose: () => void;
  onOpen?: () => void;
};

export interface ButtonProps {
  onClick: () => void;
  icon: IconProp | IconDefinition | any | TextIconContactProps;
  color: string;
};

export type HeaderBoxProps = {
  contactName: string,
  contactDescription: string,
  color: string,
};

export type TextIconContactProps = {
  icon: IconProp | IconDefinition | any | TextIconContactProps;
  contact: string;
};

export type TextIconLinkProps = {
  icon: IconProp | IconDefinition | any | TextIconContactProps;
  contact: string;
};

export type TextContactProps = {
  contact: string;
};