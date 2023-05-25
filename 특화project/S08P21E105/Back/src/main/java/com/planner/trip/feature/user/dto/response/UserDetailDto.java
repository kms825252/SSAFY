package com.planner.trip.feature.user.dto.response;

import com.planner.trip.feature.user.dto.base.UserDto;
import com.planner.trip.util.constants.Gender;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class UserDetailDto extends UserDto {

	private Long id;

	@Builder
	public UserDetailDto(String nickName, Gender gender, String birth, Long id) {
		this.nickName = nickName;
		this.gender = gender;
		this.birth = birth;
		this.id = id;
	}
}
