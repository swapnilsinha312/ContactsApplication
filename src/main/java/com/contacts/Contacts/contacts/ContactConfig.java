package com.contacts.Contacts.contacts;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class ContactConfig {
    @Bean
    CommandLineRunner commandLineRunner(ContactRepository contactRepository)
    {
        return args->{
            Contact name1= new Contact(1L,"Name1","1234","Name1@email.com");
            Contact name2= new Contact(2L,"Name2","1234","Name2@email.com");

            contactRepository.saveAll(
                List.of(name1,name2)
            );
        };
    }
}
