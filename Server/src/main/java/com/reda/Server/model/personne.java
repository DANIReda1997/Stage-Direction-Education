package com.reda.Server.model;

import javax.annotation.Generated;
import javax.persistence.*;
import java.util.Date;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "personne", catalog = "db")
@DiscriminatorColumn(name ="personnetype")
public abstract class personne {
    @Id
    @GeneratedValue
    @Column(name = "id")
    private  Long id;
    @Column(name = "nom")
    private String nom;
    @Column(name = "prenom")
    private String prenom;
    @Column(name = "datenaissance")
    private Date datenaissance;

    public personne() {
    }

    public personne(String nom, String prenom, Date datenaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.datenaissance = datenaissance;
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

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDatenaissance() {
        return datenaissance;
    }

    public void setDatenaissance(Date datenaissance) {
        this.datenaissance = datenaissance;
    }
}
