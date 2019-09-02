package com.reda.Server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@DiscriminatorValue("responsable")
public class responsable extends manifestant{
    private String fonction;



    public responsable() {
        super();
        this.setWhat("responsable");
    }

    public responsable(String nom, String prenom, Date datenaissance, String fonction, ecole ecole) {
        super(nom, prenom, datenaissance,ecole);
        this.setWhat("responsable");
        this.fonction = fonction;
    }

    public String getFonction() {
        return fonction;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }


}
