package com.planner.trip.entity.plan;

import java.time.LocalDateTime;

import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.util.constants.Transport;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class Plan extends BaseEntity {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 제목 (최소 2자, 최대 30자)
	@NotNull
	@Size(min = 2, max = 30)
	@Column(length = 30)
	private String title;

	// 지역 코드 값
	@NotNull
	@Size(max = 2)
	@Column(length = 2)
	private String areaCode;

	// 일정 시작 날짜 및 시간
	@NotNull
	private LocalDateTime start;

	// 일정 끝 날짜 및 시간
	@NotNull
	private LocalDateTime end;

	// 일정 교통수단 종류
	@NotNull
	@Enumerated(EnumType.STRING)
	private Transport transport;
}
