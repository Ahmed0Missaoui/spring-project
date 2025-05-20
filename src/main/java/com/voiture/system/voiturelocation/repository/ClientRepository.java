package com.voiture.system.voiturelocation.repository;

import com.voiture.system.voiturelocation.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
    java.util.Optional<Client> findByEmailAndMotDePasse(String email, String motDePasse);
}
