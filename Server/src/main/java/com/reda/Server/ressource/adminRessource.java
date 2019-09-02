package com.reda.Server.ressource;

import com.reda.Server.model.*;
import com.reda.Server.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
@RestController
public class adminRessource {
    @Autowired
    com.reda.Server.repository.adminRepository adminRepository;
    @Autowired
    com.reda.Server.repository.ecoleRepository ecoleRepository;
    @Autowired
    greveRepository greveRepository;
    @Autowired
    professeurRepository professeurRepository;

    @Autowired
    responsableRepository responsableRepository;

    @GetMapping("/{login}/{password}")
    admin testlogin(@PathVariable String login,@PathVariable String password){
        return adminRepository.findByLoginAndPassword(login,password);
        
    }


    //Admin page when button clicked to show manifestants by ecole
    @GetMapping("/getallgrevebyecole/{id_ecole}/{day}/{month}/{year}")
    profsetresps getallbygreve(@PathVariable long id_ecole,@PathVariable int day,@PathVariable int month,@PathVariable int year){
        //Get the school
        ecole e = ecoleRepository.findOne(id_ecole);
        //Les manifs
        Set<manifestant> reda = null;
        //A utiliser
        profsetresps finale = new profsetresps();
        List<professeur> lesProfs = new ArrayList<>();
        List<responsable> lesResps = new ArrayList<>();


        for(greve leStrick:greveRepository.findAll()){
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(leStrick.getDategreve());


            if(cal1.get(Calendar.YEAR) == year){
                if(cal1.get(Calendar.MONTH)+1 == month){
                    if(cal1.get(Calendar.DAY_OF_MONTH) == day){
                        reda = leStrick.getLesmanifestans();
                        for(manifestant man:reda){
                            if(man.getEcole() == e){
                                if(man.getWhat().equals("professeur")){
                                    lesProfs.add(professeurRepository.findOne(man.getId()));
                                }
                                else if (man.getWhat().equals("responsable")){
                                    lesResps.add(responsableRepository.findOne(man.getId()));
                                }
                            }
                        }
                        finale.setLesprofs(lesProfs);
                        finale.setLesresps(lesResps);
                    }
                }
            }
        }

        return finale;


    }

    @GetMapping("/getallecole")
    List<ecole> getallecole(){
        return ecoleRepository.findAll();
    }


    @GetMapping("/teste")
    Set<manifestant> reda() {

        greve g = greveRepository.findOne(Long.valueOf(5));
        Set<manifestant> m =  g.getLesmanifestans();
        return m;

    }

    @GetMapping("/isThereaStrickWithDate/{day}/{month}/{year}")
    Long isThereaStrickWithDate(@PathVariable int day,@PathVariable int month,@PathVariable int year) {
        for(greve lestrick:greveRepository.findAll()){
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(lestrick.getDategreve());


            if(cal1.get(Calendar.YEAR) == year){
                if(cal1.get(Calendar.MONTH) +1== month){
                    if(cal1.get(Calendar.DAY_OF_MONTH) == day){
                        return lestrick.getId();
                    }
                }
            }
        }
        return Long.valueOf(-1);
    }


}
