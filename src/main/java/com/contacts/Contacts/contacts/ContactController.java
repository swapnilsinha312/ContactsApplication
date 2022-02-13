package com.contacts.Contacts.contacts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="api/contact")
public class ContactController
{
    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @GetMapping
    public List<Contact> getContacts()
    {
       return this.contactService.getContacts();
    }

    @PostMapping
    public Contact addContact(@RequestBody Contact contact)
    {
        return contactService.addContact(contact);
    }

    @DeleteMapping(path="{contactId}")
    public void deleteContact(@PathVariable("contactId") Long id)
    {
        contactService.deleteContact(id);
    }

    @PutMapping(path="{contactId}")
    public Contact updateContact(@PathVariable("contactId") Long id,
                              @RequestBody Contact contact)
//                              @RequestParam(required = false) String name,
//                              @RequestParam(required = false) String email)
    {
//        System.out.println("NO");
        return contactService.updateContact(contact);
//        System.out.println("Sending "+cont);
//        return cont;
    }
}
