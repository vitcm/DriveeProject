package back.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import back.DAO.FilialDAO;
import back.DTO.FilialRequestDTO;
import back.model.Filial;
import back.service.FilialService;


@RestController
@RequestMapping("/api/filiais")
public class FilialController {

    @Autowired
    private FilialService filialService;

    @PostMapping("/cadastro")
    public ResponseEntity<?> cadastrarFilial(@RequestBody FilialRequestDTO requestDTO) {
        filialService.cadastrarFilial(requestDTO);
        return ResponseEntity.ok().build();
    }
}


