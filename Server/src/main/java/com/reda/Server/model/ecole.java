package com.reda.Server.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class ecole {
    @Id
    @GeneratedValue
    private Long id;
    private String nom;
    private String adresse;

    @OneToMany(mappedBy = "ecole",cascade = CascadeType.ALL)
    private List<directeur> lesdirecteurs;
    @OneToMany(mappedBy = "ecole",cascade = CascadeType.ALL)
    private List<manifestant> lesmanifestants;

    public ecole() {
    }

    public ecole(String nom, String adresse) {
        this.nom = nom;
        this.adresse = adresse;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public List<manifestant> getLesmanifestants() {
        return lesmanifestants;
    }

    public void setLesmanifestants(List<manifestant> lesmanifestants) {
        this.lesmanifestants = lesmanifestants;
    }

    public List<directeur> getLesdirecteurs() {
        return lesdirecteurs;
    }

    public void setLesdirecteurs(List<directeur> lesdirecteurs) {
        this.lesdirecteurs = lesdirecteurs;
    }

}
