package com.voiture.system.voiturelocation.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Paiement {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private double montant;
    private LocalDate datePaiement;
    private String moyenPaiement;

    @OneToOne
    private Reservation reservation;
}
