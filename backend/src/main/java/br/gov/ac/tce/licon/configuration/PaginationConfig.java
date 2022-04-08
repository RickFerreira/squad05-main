package br.gov.ac.tce.licon.configuration;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Component;

import br.gov.ac.tce.licon.dtos.requests.AbstractFiltroRequest;
import br.gov.ac.tce.licon.dtos.requests.SortBy;
import lombok.Getter;
import lombok.Setter;

@Component
@Getter
@Setter
public class PaginationConfig {

	@Value("${app.pagination.limit.default}")
    private int defaultPageSize;

    @Value("${app.pagination.limit.max}")
    private int maxPageSize;

    public PageRequest toPageRequest(AbstractFiltroRequest request) {
    	SortBy sort = request.getSort();
        int pageSize = Math.max(1, Math.min(Optional.ofNullable(request.getPage().getSize()).orElseGet(this::getDefaultPageSize),
                							getMaxPageSize()));
        return PageRequest.of(request.getPage().getIndex() - 1, pageSize, sort.getOrder().dir(), sort.getBy());
    }
}
