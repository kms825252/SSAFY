package com.planner.trip.util.constants;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

import jakarta.validation.constraints.NotNull;

/*
	지역 코드 값
	1 : 서울
	2 : 인천
	3 : 대전
	4 : 대구
	5 : 광주
	6 : 부산
	7 : 울산
	8 : 세종특별자치시
	31 : 경기도
	32 : 강원도
	33 : 충청북도
	34 : 충청남도
	35 : 경상북도
	36 : 경상남도
	37 : 전라북도
	38 : 전라남도
	39 : 제주도
*/
public enum Area {

	SEOUL(1), INCHEON(2), DAEJEON(3), DAEGU(4), GWANGJU(5), BUSAN(6), ULSAN(7), SEJONG(8), GYEONGGI(31), GANGWON(
		32), CHUNGBUK(33), CHUNGNAM(34), GYEONGBUK(35), GYEONGNAM(36), JEONBUK(37), JEONNAM(38), JEJU(39);

	private final int code;

	Area(int value) {
		this.code = value;
	}

	@JsonValue
	public int getValue() {
		return code;
	}

	@JsonCreator
	public static Area of(@NotNull String val) {

		int numValue = Integer.parseInt(val);

		for (Area area : Area.values()) {
			if (area.code == numValue) {
				return area;
			}
		}

		throw new IllegalArgumentException("잘못된 지역 코드 입니다.");
	}
}
