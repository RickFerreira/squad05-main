package br.gov.ac.tce.licon.handlers;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import br.gov.ac.tce.licon.dtos.responses.FailureResponse;
import br.gov.ac.tce.licon.exceptions.AppException;

@ControllerAdvice
public class RestResponseEntityExceptionHandler {
	
	private String getStackTrace(Throwable ex) {
		StringWriter sw = new StringWriter();
		PrintWriter pw = new PrintWriter(sw);
		ex.printStackTrace(pw);
		return sw.toString();
	}
	
	private ResponseEntity<Object> createResponseEntityWith(List<String> messages, HttpStatus httpStatus) {
		FailureResponse response = FailureResponse.builder().code(httpStatus.value()).messages(messages).build();
		return ResponseEntity.status(httpStatus).body(response);
	}

	private ResponseEntity<Object> createResponseEntityWith(Throwable ex, HttpStatus httpStatus) {
		String msg = ex.getMessage();
		if (msg == null) msg = ex.toString();
		String stackTrace = getStackTrace(ex);
		FailureResponse response = FailureResponse.builder().code(httpStatus.value()).messages(Arrays.asList(msg)).stackTrace(stackTrace).build();
		return ResponseEntity.status(httpStatus).body(response);
	}

	@ExceptionHandler(value = Throwable.class)
	protected ResponseEntity<Object> handleAnyException(Throwable ex) {
		return createResponseEntityWith(ex, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(value = AppException.class)
	protected ResponseEntity<Object> handleEntityNotFoundException(AppException ex) {
		return createResponseEntityWith(ex, ex.getHttpStatus());
	}
	
	@ExceptionHandler(value = BindException.class)
	protected ResponseEntity<Object> handleBindException(BindException ex) {
		BindingResult bindingResult = ex.getBindingResult();
		
		if (bindingResult.hasErrors()) {
			List<FieldError> errors = bindingResult.getFieldErrors();
			List<String> errorMessages = new ArrayList<>();
			for (FieldError e : errors){
				errorMessages.add(String.format("%s: %s", e.getField(), e.getDefaultMessage()));
	        }
			
			return createResponseEntityWith(errorMessages, HttpStatus.BAD_REQUEST);
		} else {
			return createResponseEntityWith(ex, HttpStatus.BAD_REQUEST);
		}
	}
	
}
