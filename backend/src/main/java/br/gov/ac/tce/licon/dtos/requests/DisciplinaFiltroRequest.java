package br.gov.ac.tce.licon.dtos.requests;

import lombok.Data;
import lombok.EqualsAndHashCode;


@Data
@EqualsAndHashCode(callSuper=false)
public class DisciplinaFiltroRequest extends AbstractFiltroRequest {

    private String nome;	
    private String ementa;	
    private String conteudoProgramatico;
    private String bibliografiaBasica;
    private String bibliografiaComplementar;

}
