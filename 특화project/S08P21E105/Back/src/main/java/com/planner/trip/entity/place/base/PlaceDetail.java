package com.planner.trip.entity.place.base;

import java.sql.Clob;

import com.planner.trip.entity.global.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;

@Getter
@MappedSuperclass
public class PlaceDetail extends BaseEntity {

	// Tour Api 에서 제공하는 컨텐츠 ID 값을 그대로 ID로 장소들에 사용
	@NotNull
	@Id
	protected Long contentId;

	// 애완동물 동반 가능 정보
	@Size(max = 200)
	@Column(length = 200)
	protected String checkPet;

	// 문의 및 안내
	@Size(max = 1000)
	@Column(length = 1000)
	protected String infoCenter;

	// 쉬는 날
	@Size(max = 1000)
	@Column(length = 1000)
	protected String restDate;

	// 주차 시설
	@Lob
	protected Clob parking;

	// 주차 요금
	@Lob
	protected Clob parkingFee;

	// 이용 시간
	@Lob
	protected Clob useTime;

	// 수용인원
	@Size(max = 1000)
	@Column(length = 1000)
	protected String capacity;

	// 규모
	@Size(max = 1000)
	@Column(length = 1000)
	protected String scale;

	// 개요
	@Lob
	protected Clob overview;

	// 홈페이지 주소, html 형태
	@Size(max = 2000)
	@Column(length = 2000)
	protected String homepage;
}
