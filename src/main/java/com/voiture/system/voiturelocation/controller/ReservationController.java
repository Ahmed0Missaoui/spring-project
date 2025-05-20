package com.voiture.system.voiturelocation.controller;

import com.voiture.system.voiturelocation.model.Reservation;
import com.voiture.system.voiturelocation.service.ReservationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {
    private final ReservationService reservationService;

    public ReservationController(ReservationService reservationService) {
        this.reservationService = reservationService;
    }

    @GetMapping
    public List<Reservation> getAll() {
        return reservationService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Reservation> getById(@PathVariable Long id) {
        return reservationService.getById(id);
    }

    @PostMapping
    public Reservation create(@RequestBody Reservation reservation) {
        return reservationService.create(reservation);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        reservationService.delete(id);
    }
}
