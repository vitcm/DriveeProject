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

import com.example.DRIVEEPROJECT.model.EnderecoTerceiro;
import com.example.DRIVEEPROJECT.model.ServicoTerceiros;
import com.example.DRIVEEPROJECT.model.TelefoneTerceiros;
import com.example.DRIVEEPROJECT.model.Terceiros;
import com.example.DRIVEEPROJECT.service.EnderecoTerceiroService;
import com.example.DRIVEEPROJECT.service.ServicoTerceiroService;
import com.example.DRIVEEPROJECT.service.TelefoneTerceiroService;
import com.example.DRIVEEPROJECT.service.TerceirosService;

@Controller
@CrossOrigin (origins = "http://localhost:3000")
public class CadTerceirizadosController {
    @Autowired
    private TerceirosService terceirosService;

    @PutMapping ("/terceiros/cadastro")
    public ResponseEntity<String> cadastrarTerceiro (@RequestBody Terceiros terceiros){
        terceirosService.saveTerceiro(terceiros);
        return new ResponseEntity<>("Terceiro cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/terceiros/deletarTerceiro")
    public ResponseEntity<String> deletarTerceiro(){
        terceirosService.deleteTerceiro(terceirosService.getLastInsertedTerceiroId());
        return new ResponseEntity<>("Terceiro deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/terceiro/listar")
    public ResponseEntity< List <Terceiros> > listarTerceiros(){
        List <Terceiros> terceiros = terceirosService.getAllTerceiros();
        return new ResponseEntity<>(terceiros, HttpStatus.OK);
    }

    @Autowired
    private TelefoneTerceiroService telefoneTerceiroService;

    @PutMapping ("/terceiros/cadastroTelefone")
    public ResponseEntity<String> cadastrarTelefoneTerceiro (@RequestBody TelefoneTerceiros telefoneTerceiros){
        telefoneTerceiroService.saveTelefoneTerceiro(telefoneTerceiros);
        return new ResponseEntity<>("Telefone terceiro cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/terceiros/deletarTelefoneTerceiro")
    public ResponseEntity<String> deletarTelefoneTerceiro(){
        telefoneTerceiroService.deleteTelefonesTerceiro(telefoneTerceiroService.getLastInsertedTelefoneTerceiroId());
        return new ResponseEntity<>("Telefone terceiro deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/terceiro/listarTelefones")
    public ResponseEntity< List <TelefoneTerceiros> > listarTelefonesTerceiro(){
        List <TelefoneTerceiros> telefoneTerceiros = telefoneTerceiroService.getAllTelefonesTerceiro();
        return new ResponseEntity<>(telefoneTerceiros, HttpStatus.OK);
    }

    @Autowired
    private EnderecoTerceiroService enderecoTerceiroService;

    @PutMapping ("/terceiros/cadastroEndereco")
    public ResponseEntity<String> cadastrarEnderecoTerceiro (@RequestBody EnderecoTerceiro enderecoTerceiro){
        enderecoTerceiroService.saveEnderecoTerceiros(enderecoTerceiro);
        return new ResponseEntity<>("Endereço terceiro cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/terceiros/deletarEnderecoTerceiro")
    public ResponseEntity<String> deletarEnderecoTerceiro(){
        enderecoTerceiroService.deleteEnderecoTerceiro(enderecoTerceiroService.getLastInsertedEnderecoTerceiroId());
        return new ResponseEntity<>("Endereço terceiro deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/terceiro/listarEndereco")
    public ResponseEntity< List <EnderecoTerceiro> > listarEnderecoTerceiro(){
        List <EnderecoTerceiro> enderecoTerceiros = enderecoTerceiroService.getAllEnderecoTerceiros();
        return new ResponseEntity<>(enderecoTerceiros, HttpStatus.OK);
    }

    @Autowired
    private ServicoTerceiroService servicoTerceiroService;

    @PutMapping ("/terceiros/cadastroServico")
    public ResponseEntity<String> cadastrarServicoTerceiro (@RequestBody ServicoTerceiros servicoTerceiros){
        servicoTerceiroService.saveServicoTerceiros(servicoTerceiros);
        return new ResponseEntity<>("Serviço terceiro cadastrado com sucesso", HttpStatus.OK);
    }

    @DeleteMapping ("/terceiros/deletarServicoTerceiro")
    public ResponseEntity<String> deletarServicoTerceiro(){
        servicoTerceiroService.deleteServicoTerceiro(servicoTerceiroService.getLastInsertedServicoTerceiroId());
        return new ResponseEntity<>("Serviço terceiro deletado com sucesso", HttpStatus.OK);
    }
    
    @GetMapping ("/terceiro/listarServico")
    public ResponseEntity< List <ServicoTerceiros> > listarServicoTerceiro(){
        List <ServicoTerceiros> servicoTerceiros = servicoTerceiroService.getAllServicoTerceiros();
        return new ResponseEntity<>(servicoTerceiros, HttpStatus.OK);
    }

    @RequestMapping(value = "/tereiro/cadastro", method = RequestMethod.OPTIONS)
    public ResponseEntity<?> options() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Allow", "OPTIONS, PUT"); // Especifica os métodos permitidos neste endpoint
        headers.add("Access-Control-Allow-Methods", "OPTIONS, PUT"); // Configura os métodos permitidos para CORS
        headers.add("Access-Control-Allow-Headers", "Content-Type"); // Configura os cabeçalhos permitidos para CORS
        return new ResponseEntity<>(headers, HttpStatus.OK);
    }
}
