package com.voiture.system.voiturelocation.service;
import com.voiture.system.voiturelocation.model.Voiture;
import com.voiture.system.voiturelocation.repository.VoitureRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VoitureService {
    private final VoitureRepository voitureRepository;

    public VoitureService(VoitureRepository voitureRepository) {
        this.voitureRepository = voitureRepository;
    }

    public List<Voiture> getAll() {
        return voitureRepository.findAll();
    }

    public Voiture getById(Long id) {
        return voitureRepository.findById(id).orElse(null);
    }

    public Voiture create(Voiture voiture) {
        return voitureRepository.save(voiture);
    }

    public Voiture update(Long id, Voiture updated) {
        Optional<Voiture> existing = voitureRepository.findById(id);
        if (existing.isPresent()) {
            Voiture voiture = existing.get();
            voiture.setMarque(updated.getMarque());
            voiture.setModele(updated.getModele());
            voiture.setPrixParJour(updated.getPrixParJour());
            return voitureRepository.save(voiture);
        }
        return null;
    }

    public void delete(Long id) {
        voitureRepository.deleteById(id);
    }
}
