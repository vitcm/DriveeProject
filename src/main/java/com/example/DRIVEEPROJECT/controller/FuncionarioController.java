package com.example.DRIVEEPROJECT.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.DRIVEEPROJECT.model.ContratoFuncionario;
import com.example.DRIVEEPROJECT.model.Departamento;
import com.example.DRIVEEPROJECT.model.Filial;
import com.example.DRIVEEPROJECT.model.Funcionario;
import com.example.DRIVEEPROJECT.model.StatusFuncionario;
import com.example.DRIVEEPROJECT.service.ContratoFuncionarioService;
import com.example.DRIVEEPROJECT.service.DepartamentoService;
import com.example.DRIVEEPROJECT.service.FilialService;
import com.example.DRIVEEPROJECT.service.FuncionarioService;
import com.example.DRIVEEPROJECT.service.StatusFuncionarioService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class FuncionarioController {
    @Autowired
    private FilialService filialService;
    
    @GetMapping ("/funcionario/filial")
    public ResponseEntity<List <Filial>> getFilial(){
        List <Filial> filiais = filialService.getAllFiliais();
        return new ResponseEntity<>(filiais, HttpStatus.OK);
    }

    @Autowired
    private DepartamentoService departamentoService;

    @GetMapping ("/funcionario/departamento")
    public ResponseEntity<List <Departamento> > getDepartamento(){
        List <Departamento> departamentos = departamentoService.getAllDepartamentos();
        return new ResponseEntity<>(departamentos, HttpStatus.OK);
    }

    @Autowired
    private FuncionarioService funcionarioService;

    @PutMapping ("/funcionario/cadastro")
    public ResponseEntity<String> cadastrarFuncionario (@RequestBody Funcionario funcionario){
        funcionarioService.saveFuncionario(funcionario);
        return new ResponseEntity<>("Funcionario cadastrado com sucesso", HttpStatus.OK);
    }

    @Autowired
    private ContratoFuncionarioService contratoFuncionarioService;

    @PutMapping("/funcionario/cadastroContrato")
    public ResponseEntity<String> cadastrarContratoFuncionario (@RequestBody ContratoFuncionario contratoFuncionario){
        contratoFuncionarioService.saveContratoFuncionario(contratoFuncionario);
        return new ResponseEntity<>("Contrato do funcionario cadastrado com sucesso", HttpStatus.OK);
    }

    @Autowired
    private StatusFuncionarioService statusFuncionarioService;

    @PutMapping("/funcionario/cadastroStatus")
    public ResponseEntity<String> cadastrarStatusFuncionario (@RequestBody StatusFuncionario statusFuncionario){
        statusFuncionarioService.saveStatusFuncionario(statusFuncionario);
        return new ResponseEntity<>("Status do funcionario cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/funcionario/deletarFuncionario")
    public ResponseEntity<String> deletarFuncionario() {
        funcionarioService.deleteFuncionario(funcionarioService.getLastInsertedFuncionarioId());
        return new ResponseEntity<>("Funcionario deletado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/funcionario/deletarStatus")
    public ResponseEntity<String> deletarStatus() {
        statusFuncionarioService.deleteStatusFuncionario(statusFuncionarioService.getLastInsertedStatusFuncionarioId());
        return new ResponseEntity<>("Status deletado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/funcionario/deletarContrato")
    public ResponseEntity<String> deletarContrato() {
        contratoFuncionarioService.deleteContratoFuncionario(contratoFuncionarioService.getLastInsertedContratoFuncionarioId());
        return new ResponseEntity<>("Contrato deletado com sucesso", HttpStatus.OK);
    }
    
    @RequestMapping(value = "/funcionario/cadastro", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> options() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Allow", "OPTIONS, PUT"); // Especifica os métodos permitidos neste endpoint
        headers.add("Access-Control-Allow-Methods", "OPTIONS, PUT"); // Configura os métodos permitidos para CORS
        headers.add("Access-Control-Allow-Headers", "Content-Type"); // Configura os cabeçalhos permitidos para CORS
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }
}
