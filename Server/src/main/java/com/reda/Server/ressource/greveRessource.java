package com.reda.Server.ressource;

import com.reda.Server.model.AddGreve;
import com.reda.Server.model.admin;
import com.reda.Server.model.greve;
import com.reda.Server.repository.greveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Calendar;
import java.util.Date;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/greve")
@RestController
public class greveRessource {


    @Autowired
    com.reda.Server.repository.greveRepository greveRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/addgrevetoday")
    public Long addgrevetoday(@RequestBody AddGreve adminadd){
        greve newGreve = new greve(new Date(),adminadd.getDescription());
        newGreve.setAdmin(adminadd.getAdminCo());
        greveRepository.save(newGreve);
        return newGreve.getId();
    }


    @GetMapping("/isthereastrick")
    public Long isthereonee(){

        for(greve lestrick:greveRepository.findAll()){
            Calendar cal1 = Calendar.getInstance();
            cal1.setTime(lestrick.getDategreve());

            Calendar cal2 = Calendar.getInstance();
            cal2.setTime(new Date());

            if(cal1.get(Calendar.YEAR) == cal2.get(Calendar.YEAR)){
                if(cal1.get(Calendar.MONTH) == cal2.get(Calendar.MONTH)){
                    if(cal1.get(Calendar.DAY_OF_MONTH) == cal2.get(Calendar.DAY_OF_MONTH)){
                        return lestrick.getId();
                    }
                }
            }
        }
        return Long.valueOf(-1);
    }


}
