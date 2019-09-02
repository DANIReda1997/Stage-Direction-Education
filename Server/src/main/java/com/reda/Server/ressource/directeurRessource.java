package com.reda.Server.ressource;

import com.reda.Server.model.*;
import com.reda.Server.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/directeur")
@RestController
public class directeurRessource {
    @Autowired
    directeurRepository directeurRepository;

    @Autowired
    professeurRepository professeurRepository;

    @Autowired
    responsableRepository responsableRepository;

    @Autowired
    manifestantRepository manifestantRepository;

    @Autowired
    greveRepository greveRepository;

/*
    @GetMapping("/add")
    public void addtest(){
        responsable r = new responsable("leo","leo",new Date(),"securite",null);
        responsable rr = new responsable("leo1","leo1",new Date(),"securite",null);
        responsable rrr = new responsable("leo2","leo2",new Date(),"securite",null);

        responsableRepository.save(r);
        responsableRepository.save(rr);
        responsableRepository.save(rrr);
    }

        @GetMapping("/test")
        public directeur test(){
            return new directeur("reda","dani", new Date(),"rr","dd",null
            );
        }


         */

    //Login Check
    @GetMapping("/{login}/{password}")
    public directeur checkLogin(@PathVariable String login, @PathVariable String password){
        return  directeurRepository.findByLoginAndPassword(login,password);
    }

    //Get All Professeurs Par Ecole
    @GetMapping("/{id_directeur}/getProfesseurs")
    public List<professeur> getProfesseurs(@PathVariable Long id_directeur){
        directeur d = directeurRepository.findOne(id_directeur);

        return professeurRepository.findAllByEcole(d.getEcole());
    }

    //Get All Responsables Par Ecole
    @GetMapping("/{id_directeur}/getResponsables")
    public List<responsable> getResponsables(@PathVariable Long id_directeur){
        directeur d = directeurRepository.findOne(id_directeur);

        return responsableRepository.findAllByEcole(d.getEcole());
    }


    @GetMapping("/test")
    public greve test(){

        manifestant lesmanif =manifestantRepository.findOne((long) 21);

        greve greve1 = greveRepository.findOne((long) 2);
        Set<greve> redaa = lesmanif.getLesgreves();
        redaa.add(greve1);
        lesmanif.setLesgreves(redaa);
        manifestantRepository.save(lesmanif);
        return  greve1;
    }




    //Appliquer greve au manifestants
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/AppliquerManifestants")
    public void appliquerManifestantsGreve(@RequestBody List<Long> lesManifestants){
        greve greve1 = null;
        for(greve lestrick:greveRepository.findAll()){
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(lestrick.getDategreve());

            Calendar cal2 = Calendar.getInstance();
            cal2.setTime(new Date());

            if(cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR)){
                if(cal1.get(Calendar.MONTH) == cal2.get(Calendar.MONTH)){
                    if(cal1.get(Calendar.DAY_OF_MONTH) == cal2.get(Calendar.DAY_OF_MONTH)){
                        greve1 = lestrick;
                        break;
                    }
                }
            }

        }



        for(Long lesmanif:lesManifestants){
            manifestant lemanif =manifestantRepository.findOne(lesmanif);
            Set<greve> redaa = lemanif.getLesgreves();
            redaa.add(greve1);
            lemanif.setLesgreves(redaa);
            manifestantRepository.save(lemanif);
        }
    }


}
