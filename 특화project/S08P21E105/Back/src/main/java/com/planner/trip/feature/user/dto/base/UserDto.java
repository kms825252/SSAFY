package com.planner.trip.feature.user.dto.base;

import com.planner.trip.util.constants.Gender;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

	@NotNull(message = "UserDto nickName NULL ERROR")
	protected String nickName;

	protected Gender gender;

	@Pattern(regexp = "\\d{4}-\\d{2}-\\d{2}", message = "UserDto birth 형식 ERROR")
	protected String birth;
}
