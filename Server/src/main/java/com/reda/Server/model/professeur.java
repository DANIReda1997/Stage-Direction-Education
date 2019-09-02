package com.reda.Server.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
@DiscriminatorValue("professeur")
public class professeur extends manifestant{
    private String specialite;

    public professeur() {
        super();
        this.setWhat("professeur");
    }

    public professeur(String nom, String prenom, Date datenaissance, String specialite, com.reda.Server.model.ecole ecole) {
        super(nom, prenom, datenaissance,ecole);
        this.setWhat("professeur");
        this.specialite = specialite;
    }

    public String getSpecialite() {
        return specialite;
    }

    public void setSpecialite(String specialite) {
        this.specialite = specialite;
    }


}
