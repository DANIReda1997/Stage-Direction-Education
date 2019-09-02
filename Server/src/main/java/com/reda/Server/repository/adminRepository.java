package com.reda.Server.repository;

import com.reda.Server.model.admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface adminRepository extends JpaRepository<admin,Long> {
    admin findByLoginAndPassword(String Login,String Password);
}

