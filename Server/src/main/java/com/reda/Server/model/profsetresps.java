package com.reda.Server.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class profsetresps {
    private List<professeur> lesprofs;
    private List<responsable> lesresps;

    public profsetresps() {

        lesprofs = new ArrayList<>();
        lesresps = new ArrayList<>();
    }

    public List<professeur> getLesprofs() {
        return lesprofs;
    }

    public void setLesprofs(List<professeur> lesprofs) {
        this.lesprofs = lesprofs;
    }

    public List<responsable> getLesresps() {
        return lesresps;
    }

    public void setLesresps(List<responsable> lesresps) {
        this.lesresps = lesresps;
    }
}
