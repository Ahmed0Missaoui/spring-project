package com.voiture.system.voiturelocation.repository;

import com.voiture.system.voiturelocation.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
