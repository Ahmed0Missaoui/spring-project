package com.voiture.system.voiturelocation.repository;

import com.voiture.system.voiturelocation.model.Profil;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfilRepository extends JpaRepository<Profil, Long> {
}
