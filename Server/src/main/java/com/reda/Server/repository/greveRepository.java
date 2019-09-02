package com.reda.Server.repository;

import com.reda.Server.model.greve;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface greveRepository extends JpaRepository<greve,Long> {
    greve findByDategreve(Date d);
}
