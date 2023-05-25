package com.planner.trip.util.constants;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/*
	성별
	MALE : 남성
	FEMALE : 여성
 */
public enum Gender {

	MALE("male"), FEMALE("female");

	private final String code;

	Gender(String value) {
		code = value;
	}

	@JsonValue
	public String getCode() {
		return code;
	}

	@JsonCreator
	public static Gender of(String val) {

		if (val == null) {
			throw new IllegalArgumentException();
		}

		for (Gender gender : Gender.values()) {
			if (gender.code.equals(val)) {
				return gender;
			}
		}

		throw new IllegalArgumentException("잘못된 성별 코드 입니다.");
	}
}
