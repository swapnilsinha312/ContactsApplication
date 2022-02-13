package com.contacts.Contacts.contacts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ContactService
{
    @Autowired
    private final ContactRepository contactRepo;

    public ContactService(ContactRepository contactRepo) {
        this.contactRepo = contactRepo;
    }

    public List<Contact> getContacts()
    {
        return contactRepo.findAll();
//        return List.of(new Contact(1l,"a","a","a"));
    }

    public Contact addContact(Contact contact)
    {
        Optional<Contact> cont= contactRepo.findStudenByEmail(contact.getEmail());
        if(cont.isPresent())
        {
            throw new IllegalStateException("Contact with same email already exists "+contact.getEmail());
        }

        // Todo data validation either here or front-end

        contactRepo.save(contact);
//        System.out.println(contact+" saved");
        return contact;
    }

    @Transactional
    public Contact updateContact(Contact contact)
    {
        Long id=contact.getId();
        String name=contact.getName();
        String number=contact.getNumber();
        String email= contact.getEmail();
        Contact cont=contactRepo.findById(id).orElseThrow(()->
        new IllegalStateException("Contact with id does not exist "+id));

//        System.out.println("L"+cont+" "+contact);

        if(name!=null && name.length()>0 && !Objects.equals(cont.getName(),name))
        cont.setName(name);

        if(number!=null && number.length()>0 && !Objects.equals(cont.getNumber(),number))
            cont.setNumber(number);

        if(email!=null && email.length()>0 && !Objects.equals(cont.getEmail(),email))
        {
            if(contactRepo.findStudenByEmail(email).isPresent())
                throw new IllegalStateException("Contact with email already exists "+email);

            else cont.setEmail(email);
        }

            return cont;
    }

    public void deleteContact(Long id)
    {
        if(contactRepo.existsById(id))
        {
            contactRepo.deleteById(id);
        }
        else
            throw new IllegalStateException("No such contact exists (Check ID) "+id);

        return;
    }
}
