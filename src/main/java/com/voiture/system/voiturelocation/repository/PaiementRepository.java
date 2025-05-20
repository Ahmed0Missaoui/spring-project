package com.voiture.system.voiturelocation.repository;

import com.voiture.system.voiturelocation.model.Paiement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaiementRepository extends JpaRepository<Paiement, Long> {
}
