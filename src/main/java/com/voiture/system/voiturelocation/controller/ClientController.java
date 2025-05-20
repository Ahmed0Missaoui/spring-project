package com.voiture.system.voiturelocation.controller;


import com.voiture.system.voiturelocation.model.Client;
import com.voiture.system.voiturelocation.repository.ClientRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/api/clients")
public class ClientController {
    private static final Logger logger = LoggerFactory.getLogger(ClientController.class);
    private final ClientRepository clientRepository;

    public ClientController(ClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @PostMapping("/register")
    public Client register(@RequestBody Client client) {
        logger.info("Registering client: {}", client);
        try {
            Client saved = clientRepository.save(client);
            logger.info("Client registered successfully: {}", saved);
            return saved;
        } catch (Exception e) {
            logger.error("Error registering client: {}", client, e);
            throw e;
        }
    }

    @PostMapping("/login")
    public Optional<Client> login(@RequestBody Client loginRequest) {
        logger.info("Login attempt for email: {}", loginRequest.getEmail());
        Optional<Client> client = clientRepository.findByEmailAndMotDePasse(loginRequest.getEmail(), loginRequest.getMotDePasse());
        if (client.isPresent()) {
            logger.info("Login successful for email: {}", loginRequest.getEmail());
        } else {
            logger.warn("Login failed for email: {}", loginRequest.getEmail());
        }
        return client;
    }
}
