package com.voiture.system.voiturelocation.controller;
import com.voiture.system.voiturelocation.model.Voiture;
import com.voiture.system.voiturelocation.service.VoitureService;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/api/voitures")
public class VoitureController {
    private final VoitureService voitureService;

    public VoitureController(VoitureService voitureService) {
        this.voitureService = voitureService;
    }

    @GetMapping
    public List<Voiture> getAll() {
        return voitureService.getAll();
    }

    @GetMapping("/{id}")
    public Voiture getById(@PathVariable Long id) {
        return voitureService.getById(id);
    }

    @PostMapping
    public Voiture create(@RequestBody Voiture voiture) {
        return voitureService.create(voiture);
    }

    @PutMapping("/{id}")
    public Voiture update(@PathVariable Long id, @RequestBody Voiture voiture) {
        return voitureService.update(id, voiture);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        voitureService.delete(id);
    }
}
