package com.planner.trip.util.constants;

/*
	해당 장소의 타입을 나타내는 값
	12 : 관광지
	14 : 문화시설
	15 : 행사/공연/축제
	25 : 여행코스
	28 : 레포츠
	32 : 숙박
	38 : 쇼핑
	39 : 음식점
 */
public enum ContentType {

	TRIP_DESTINATION(12),
	CULTURAL_FACILITY(14),
	LEISURE_SPORTS(28),
	Accommodation(32),
	SHOPPING(38),
	RESTAURANT(39);

	private final int value;

	ContentType(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}
}
