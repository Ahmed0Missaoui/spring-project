package com.voiture.system.voiturelocation.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Voiture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marque;
    private String modele;
    private String immatriculation;
    private Double prixParJour;

    @OneToMany(mappedBy = "voiture")
    private List<Reservation> reservations;
}