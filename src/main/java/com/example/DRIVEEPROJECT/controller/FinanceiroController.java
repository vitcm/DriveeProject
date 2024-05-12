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

import com.example.DRIVEEPROJECT.model.ComprovantePagamento;
import com.example.DRIVEEPROJECT.model.SolicitacaoVerba;
import com.example.DRIVEEPROJECT.service.ComprovantePagamentoService;
import com.example.DRIVEEPROJECT.service.SolicitacaoVerbaService;

@Controller
@CrossOrigin (origins = "http://localhost:3000")
public class FinanceiroController {
    @Autowired
    private ComprovantePagamentoService comprovantePagamentoService;

    @PutMapping ("/financeiro/cadastroComprovante")
    public ResponseEntity<String> cadastrarComprovante (@RequestBody ComprovantePagamento comprovantePagamento){
        comprovantePagamentoService.saveComprovantePagamento(comprovantePagamento);
        return new ResponseEntity<>("Comprovante pagamento cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/financeiro/deletarComprovante")
    public ResponseEntity<String> deletarComprovante(){
        comprovantePagamentoService.deleteComprovantePagamento(comprovantePagamentoService.getLastInsertedComprovantePagamentoId());
        return new ResponseEntity<>("Comprovante pagamento deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/financeiro/listarComprovante")
    public ResponseEntity< List <ComprovantePagamento> > listarComprovante(){
        List <ComprovantePagamento> comprovantePagamentos = comprovantePagamentoService.getAllComprovantePagamentos();
        return new ResponseEntity<>(comprovantePagamentos, HttpStatus.OK);
    }

    @Autowired
    private SolicitacaoVerbaService solicitacaoVerbaService;

    @PutMapping ("/financeiro/cadastroSolicitacao")
    public ResponseEntity<String> cadastrarSolicitacao (@RequestBody SolicitacaoVerba solicitacaoVerba){
        solicitacaoVerbaService.saveSolicitacaoVerba(solicitacaoVerba);
        return new ResponseEntity<>("Solicitação de verba cadastrada com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/financeiro/deletarSolicitacao")
    public ResponseEntity<String> deletarSolicitacao(){
        solicitacaoVerbaService.deleteSolicitacaoVerba(solicitacaoVerbaService.getLastInsertedSolicitacaoVerbaId());
        return new ResponseEntity<>("Solicitação de verba deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/financeiro/listarSolicitacao")
    public ResponseEntity< List <SolicitacaoVerba> > listarSolicitacao(){
        List <SolicitacaoVerba> solicitacaoVerbas = solicitacaoVerbaService.getAllSolicitacaoVerbas();
        return new ResponseEntity<>(solicitacaoVerbas, HttpStatus.OK);
    }

    @RequestMapping(value = "/financeiro", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> options() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Allow", "OPTIONS, PUT"); // Especifica os métodos permitidos neste endpoint
        headers.add("Access-Control-Allow-Methods", "OPTIONS, PUT"); // Configura os métodos permitidos para CORS
        headers.add("Access-Control-Allow-Headers", "Content-Type"); // Configura os cabeçalhos permitidos para CORS
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }

}
