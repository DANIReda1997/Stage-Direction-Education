package com.reda.Server.ressource;


import com.reda.Server.model.directeur;
import com.reda.Server.model.personne;
import com.reda.Server.model.professeur;
import com.reda.Server.repository.personneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/personne")
@RestController
public class personneRessource {
    @Autowired
    com.reda.Server.repository.personneRepository personneRepository;






    @GetMapping("/all")
    public List<personne> getall(){
        return personneRepository.findAll();
    }
    /*
    @GetMapping("/add")
    public void add(){
        //professeur newpersonne = new professeur("reda","prenom", new Date(),"anglais");
        //personneRepository.save(newpersonne);
    }

    @GetMapping("/all")
    public List<Users> getAll() {
        return usersRepository.findAll();
    }

    @GetMapping("/{name}")
    public List<Users> getUser(@PathVariable("name") final String name) {
        return usersRepository.findByName(name);

    }

    @GetMapping("/id/{id}")
    public Users getId(@PathVariable("id") final Integer id) {
        return usersRepository.findOne(id);
    }

    @GetMapping("/update/{id}/{name}")
    public Users update(@PathVariable("id") final Integer id, @PathVariable("name")
    final String name) {


        Users users = getId(id);
        users.setName(name);
        return usersRepository.save(users);
    }

    @PostMapping("/add")
    public Users add(@RequestBody Users user) {
        Users newOne = new Users(user.getName(),user.getEmail(),user.getPhone());
        usersRepository.save(newOne);
        return  newOne;
    }

    @PutMapping("/edit")
    public Users edit(@RequestBody Users user) {
        Users userUpdate = getId(user.getId());
        userUpdate.setName(user.getName());
        userUpdate.setEmail(user.getEmail());
        userUpdate.setPhone(user.getPhone());
        usersRepository.save(userUpdate);
        return  userUpdate;
    }

    @GetMapping("/delete/{id}")
    public void DeleteById(@PathVariable("id") final Integer id) {
        usersRepository.delete(id);
    }
    */

}
