package com.voiture.system.voiturelocation.service;


import com.voiture.system.voiturelocation.model.Reservation;
import com.voiture.system.voiturelocation.repository.ReservationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    private static final Logger logger = LoggerFactory.getLogger(ReservationService.class);
    private final ReservationRepository reservationRepository;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    public List<Reservation> getAll() {
        logger.info("Fetching all reservations");
        return reservationRepository.findAll();
    }

    public Optional<Reservation> getById(Long id) {
        logger.info("Fetching reservation with id: {}", id);
        return reservationRepository.findById(id);
    }

    public Reservation create(Reservation reservation) {
        try {
            logger.info("Creating reservation: {}", reservation);
            return reservationRepository.save(reservation);
        } catch (Exception e) {
            logger.error("Error creating reservation: {}", reservation, e);
            throw e;
        }
    }

    public void delete(Long id) {
        try {
            logger.info("Deleting reservation with id: {}", id);
            reservationRepository.deleteById(id);
        } catch (Exception e) {
            logger.error("Error deleting reservation with id: {}", id, e);
            throw e;
        }
    }
}
