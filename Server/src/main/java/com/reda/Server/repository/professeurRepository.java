package com.reda.Server.repository;

import com.reda.Server.model.ecole;
import com.reda.Server.model.professeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface professeurRepository extends JpaRepository<professeur,Long>{

    List<professeur> findAllByEcole(ecole ecole);
}