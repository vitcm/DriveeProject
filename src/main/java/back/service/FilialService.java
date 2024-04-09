package back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import back.DAO.FilialDAO;
import back.DTO.FilialRequestDTO;
import back.model.Filial;

@Service
public class FilialService {

    @Autowired
    private FilialDAO filialDAO;

    public void cadastrarFilial(FilialRequestDTO requestDTO) {
        Filial filial = convertDtoToEntity(requestDTO);
        filialDAO.inserirFilial(filial);
    }

    public static Filial convertDtoToEntity(FilialRequestDTO requestDTO) {
        Filial filial = new Filial();
        filial.setNome(requestDTO.getNome());
        filial.setEndereco(requestDTO.getEndereco());
        filial.setCep(requestDTO.getCep());
        filial.setUf(requestDTO.getUf());
        filial.setCidade(requestDTO.getCidade());
        filial.setValorAluguel(requestDTO.getValorAluguel());
        filial.setInicioContrato(requestDTO.getInicioContrato());
        filial.setFimContrato(requestDTO.getFimContrato());
        filial.setComplemento(requestDTO.getComplemento());
        return filial;
    }
}
