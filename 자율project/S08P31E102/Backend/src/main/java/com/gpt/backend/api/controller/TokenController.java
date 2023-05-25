package com.gpt.backend.api.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gpt.backend.config.jwt.JwtTokenProvider;
import com.gpt.backend.api.domain.dto.TokenDto;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@RestController(value = "/api/oauth")
@AllArgsConstructor
public class TokenController {

    private final JwtTokenProvider jwtTokenProvider;
    private final ObjectMapper objectMapper;

    @GetMapping("/refresh")
    public void refreshAuth(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String token = jwtTokenProvider.resolveToken(request, "Refresh");

        // 유효한 토큰인지 확인
        if (token != null && token.startsWith("Bearer ")) {
            String jwtToken = token.substring(7);
            if (jwtTokenProvider.validateToken(jwtToken)) {
                String email = jwtTokenProvider.getUserEmail(jwtToken);
                TokenDto tokenDto = jwtTokenProvider.generateAllToken(email, "USER");

                response.addHeader("access_token", tokenDto.getAccessToken());
                response.addHeader("refresh_token", tokenDto.getRefreshToken());
                response.setContentType("application/json;charset=UTF-8");

                PrintWriter writer = response.getWriter();
                writer.println(objectMapper.writeValueAsString(tokenDto));
                writer.flush();
            }
        }
    }
}
