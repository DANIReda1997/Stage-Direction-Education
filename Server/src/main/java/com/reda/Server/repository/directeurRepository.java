package com.reda.Server.repository;

import com.reda.Server.model.directeur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface directeurRepository extends JpaRepository<directeur,Long> {
    directeur findByLoginAndPassword(String Login,String Password);
}
