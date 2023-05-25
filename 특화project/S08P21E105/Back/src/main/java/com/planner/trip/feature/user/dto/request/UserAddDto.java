package com.planner.trip.feature.user.dto.request;

import com.planner.trip.feature.user.dto.base.UserDto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserAddDto extends UserDto {

	@NotNull(message = "UserAddDto 이메일 NULL ERROR")
	private String email;

	@NotNull(message = "UserAddDto 비밀번호 NULL ERROR")
	@Size(min = 8, max = 20, message = "사용자 비밀번호 Size ERROR")
	private String password;
}
