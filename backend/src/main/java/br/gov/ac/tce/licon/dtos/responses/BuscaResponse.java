package br.gov.ac.tce.licon.dtos.responses;

import java.util.List;

import lombok.Data;

@Data
public class BuscaResponse<T> {
    
    private long total;

    private List<T> items;
}
