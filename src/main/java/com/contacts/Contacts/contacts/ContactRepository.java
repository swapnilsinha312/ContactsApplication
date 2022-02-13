package com.contacts.Contacts.contacts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContactRepository extends JpaRepository<Contact,Long> {

    @Query("Select c from Contact c Where c.email=?1")
    Optional<Contact> findStudenByEmail(String email);

//    @Query("Select c from Contact c Where c.id=?1")
//    Optional<Contact> findStudenById(Long id);
}
