package com.reda.Server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.CascadeType;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Date;
import java.util.List;

@Entity
@DiscriminatorValue("admin")
public class admin extends personne {
    private String login;
    private String password;

    @JsonIgnore
    @OneToMany(mappedBy = "admin",cascade = CascadeType.ALL)
    private List<greve> lesgreves;

    public admin() {
        super();
    }

    public admin(String nom, String prenom, Date datenaissance, String login, String passsword) {
        super(nom, prenom, datenaissance);
        this.login = login;
        this.password = passsword;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPasssword() {
        return password;
    }

    public void setPasssword(String passsword) {
        this.password = passsword;
    }

    public List<greve> getLesgreves() {
        return lesgreves;
    }

    public void setLesgreves(List<greve> lesgreves) {
        this.lesgreves = lesgreves;
    }
}
