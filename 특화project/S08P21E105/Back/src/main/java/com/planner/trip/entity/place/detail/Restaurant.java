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
public class Restaurant extends BaseEntity {

	// Tour Api 에서 제공하는 컨텐츠 ID 값을 그대로 ID로 장소들에 사용
	@NotNull
	@Id
	private Long contentId;

	// 좌석 수 정보
	@Size(max = 200)
	@Column(length = 200)
	private String seat;

	// 주차 정보
	@Lob
	private Clob parking;

	// 영업 시간
	@Size(max = 300)
	@Column(length = 300)
	private String openTime;

	// 쉬는 날
	@Size(max = 300)
	@Column(length = 300)
	private String restDate;

	// 대표 메뉴
	@Lob
	private Clob firstMenu;

	// 취급 메뉴
	@Lob
	private Clob treatMenu;

	// 금연/흡연 여부
	@Size(max = 200)
	@Column(length = 200)
	private String smoking;

	// 포장가능
	@Size(max = 1000)
	@Column(length = 1000)
	private String packaging;

	// 예약안내
	@Size(max = 1000)
	@Column(length = 1000)
	private String reservation;

	// 문의 및 안내
	@Size(max = 1000)
	@Column(length = 1000)
	private String infoCenter;

	// 개요
	@Lob
	private Clob overview;

	// 홈페이지 주소, html 형태
	@Size(max = 2000)
	@Column(length = 2000)
	private String homepage;
}
