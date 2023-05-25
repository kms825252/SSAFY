package com.planner.trip.feature.user.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.planner.trip.feature.user.dto.request.UserAddDto;
import com.planner.trip.feature.user.dto.request.UserSignInDto;
import com.planner.trip.feature.user.dto.response.UserDetailDto;
import com.planner.trip.util.common.dto.Response;
import com.planner.trip.util.constants.Gender;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Tag(name = "Users", description = "사용자 관련 API")
public class UserController {

	@PostMapping("/sign-up")
	@Operation(summary = "사용자 회원가입")
	public ResponseEntity<Response<?>> userAdd(@RequestBody @Valid UserAddDto userAddDto) {

		return ResponseEntity.ok(Response.of(1, 200, "Success"));
	}

	@PostMapping("/sign-in")
	@Operation(summary = "사용자 로그인")
	public ResponseEntity<Response<?>> userSignIn(@RequestBody @Valid UserSignInDto userSignInDto) {

		UserDetailDto userDetailDto = UserDetailDto.builder()
			.id(1L)
			.nickName("닉네임")
			.birth("1234-56-78")
			.gender(Gender.MALE)
			.build();

		return ResponseEntity.ok(Response.of(userDetailDto, 200, "Success"));
	}

	@PostMapping("/sign-out")
	@Operation(summary = "사용자 로그아웃")
	public ResponseEntity<Response<?>> userSignOut(@RequestHeader(name = "Authorization") String token) {

		return ResponseEntity.ok(Response.of(token, 200, "Success"));
	}

	@PostMapping("/password-checking")
	@Operation(summary = "사용자 비밀번호 확인")
	public ResponseEntity<Response<?>> passwordCheck(@RequestHeader(name = "Authorization") String token) {

		return ResponseEntity.ok(Response.of(token, 200, "Success"));
	}

	@PutMapping("/password")
	@Operation(summary = "사용자 비밀번호 변경")
	public ResponseEntity<Response<?>> passwordModify(@RequestHeader(name = "Authorization") String token) {

		return ResponseEntity.ok(Response.of(token, 200, "Success"));
	}
}