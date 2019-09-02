package com.reda.Server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
public abstract class manifestant extends personne {
    @JsonIgnore
    @ManyToMany
    private Set<greve> lesgreves;


    @JsonIgnore
    @ManyToOne
    @JoinColumn
    private ecole ecole;

    private String what;

    public manifestant() {
        super();
    }

    public manifestant(String nom, String prenom, Date datenaissance,ecole ecole) {
        super(nom, prenom, datenaissance);
        this.ecole = ecole;
    }

    public com.reda.Server.model.ecole getEcole() {
        return ecole;
    }

    public void setEcole(com.reda.Server.model.ecole ecole) {
        this.ecole = ecole;
    }

    public Set<greve> getLesgreves() {
        return lesgreves;
    }

    public void setLesgreves(Set<greve> lesgreves) {
        this.lesgreves = lesgreves;
    }

    public String getWhat() {
        return what;
    }

    public void setWhat(String what) {
        this.what = what;
    }
}
