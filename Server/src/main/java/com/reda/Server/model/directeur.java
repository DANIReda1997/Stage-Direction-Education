package com.reda.Server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.util.Date;

@Entity
@DiscriminatorValue("directeur")
public class directeur extends personne{

    private String login;
    private String password;

    @JsonIgnore
    @ManyToOne
    @JoinColumn
    private ecole ecole;

    public directeur() {

    }

    public directeur(String nom, String prenom, Date datenaissance, String login, String password, com.reda.Server.model.ecole ecole) {
        super(nom, prenom, datenaissance);
        this.login = login;
        this.password = password;
        this.ecole = ecole;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public com.reda.Server.model.ecole getEcole() {
        return ecole;
    }

    public void setEcole(com.reda.Server.model.ecole ecole) {
        this.ecole = ecole;
    }
}
