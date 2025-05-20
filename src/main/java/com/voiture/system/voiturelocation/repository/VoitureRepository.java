package com.voiture.system.voiturelocation.repository;

import com.voiture.system.voiturelocation.model.Voiture;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VoitureRepository extends JpaRepository<Voiture, Long> {
}
