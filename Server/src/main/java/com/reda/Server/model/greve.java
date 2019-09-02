package com.reda.Server.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "greve", catalog = "db")
public class greve {
    @Id
    @GeneratedValue
    private Long id;
    private Date dategreve;
    private String description;
    @ManyToMany(mappedBy = "lesgreves")
    private Set<manifestant> lesmanifestans;

    @JsonIgnore
    @ManyToOne
    @JoinColumn
    private admin admin;

    public greve() {
    }

    public greve(Date dategreve, String description) {
        this.dategreve = dategreve;
        this.description = description;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDategreve() {
        return dategreve;
    }

    public void setDategreve(Date dategreve) {
        this.dategreve = dategreve;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Set<manifestant> getLesmanifestans() {
        return lesmanifestans;
    }

    public void setLesmanifestans(Set<manifestant> lesmanifestans) {
        this.lesmanifestans = lesmanifestans;
    }

    public com.reda.Server.model.admin getAdmin() {
        return admin;
    }

    public void setAdmin(com.reda.Server.model.admin admin) {
        this.admin = admin;
    }
}
