package com.planner.trip.entity.place.detail;

import java.sql.Clob;

import com.planner.trip.entity.global.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Accommodation extends BaseEntity {

	// Tour Api 에서 제공하는 컨텐츠 ID 값을 그대로 ID로 장소들에 사용
	@NotNull
	@Id
	private Long contentId;

	// 규모
	@Size(max = 1000)
	@Column(length = 1000)
	private String scale;

	// 수용가능인원
	@Size(max = 1000)
	@Column(length = 1000)
	private String capacity;

	// 객실 수
	@Size(max = 1000)
	@Column(length = 1000)
	private String roomCount;

	// 객실 유형
	@Lob
	private Clob roomType;

	// 주차 시설
	@Lob
	private Clob parking;

	// 객실 내 취사 여부
	@Size(max = 1000)
	@Column(length = 1000)
	private String cooking;

	// 입실 시간
	@Size(max = 1000)
	@Column(length = 1000)
	private String checkIn;

	// 퇴실 시간
	@Size(max = 1000)
	@Column(length = 1000)
	private String checkOut;

	// 예약 안내
	@Size(max = 1000)
	@Column(length = 1000)
	private String reservation;

	// 예약 안내 홈페이지
	@Size(max = 1000)
	@Column(length = 1000)
	private String reservationUrl;

	// 식음료장
	@Lob
	private Clob foodPlace;

	// 환불규정
	@Size(max = 1000)
	@Column(length = 1000)
	private String refundRegulation;

	// 부대시설 (기타) 정보
	@Lob
	private Clob subFacility;

	// 개요
	@Lob
	private Clob overview;

	// 홈페이지 주소, html 형태
	@Size(max = 2000)
	@Column(length = 2000)
	private String homepage;
}
