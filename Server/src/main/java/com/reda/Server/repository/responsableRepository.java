package com.reda.Server.repository;

import com.reda.Server.model.ecole;
import com.reda.Server.model.responsable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface responsableRepository extends JpaRepository<responsable,Long>{

    List<responsable> findAllByEcole(ecole ecole);
}