package com.voiture.system.voiturelocation.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate dateDebut;
    private LocalDate dateFin;

    @ManyToOne
    @JoinColumn(name = "client_id") 
    private Client client;

    @ManyToOne
    @JoinColumn(name = "voiture_id") 
    private Voiture voiture;

    @OneToOne(mappedBy = "reservation", cascade = CascadeType.ALL)
    private Paiement paiement;
}
