package com.reda.Server.model;

public class AddGreve {
    private admin adminCo;
    private String description;

    public AddGreve() {
    }

    public AddGreve(admin adminCo, String description) {
        this.adminCo = adminCo;
        this.description = description;
    }

    public admin getAdminCo() {
        return adminCo;
    }

    public void setAdminCo(admin adminCo) {
        this.adminCo = adminCo;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
