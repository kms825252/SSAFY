package com.gpt.backend.api.exception;

import com.gpt.backend.api.domain.dto.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {

    /* Custom Exception */
    @ExceptionHandler(CustomException.class)
    protected ResponseEntity<ErrorResponse> handleCustomException(final CustomException e) {
        log.error("handleCustomException: {}", e.getErrorCode());
        return new ResponseEntity<>(new ErrorResponse(e.getErrorCode()), HttpStatus.valueOf(e.getErrorCode().getStatus()));
    }
}