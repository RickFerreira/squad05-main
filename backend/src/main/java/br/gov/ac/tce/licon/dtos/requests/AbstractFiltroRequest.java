package br.gov.ac.tce.licon.dtos.requests;

import br.gov.ac.tce.licon.dtos.AbstractDTO;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=false)
public abstract class AbstractFiltroRequest extends AbstractDTO {

	private SortBy sort = new SortBy();

	private Page page;
}
