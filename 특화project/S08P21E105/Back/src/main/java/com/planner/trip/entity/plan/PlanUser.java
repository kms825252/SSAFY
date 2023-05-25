package com.planner.trip.entity.plan;

import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.entity.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class PlanUser extends BaseEntity {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 일정
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn
	private Plan plan;

	// 사용자
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn
	private User user;

	// 권한 정보
	// @Enumerated(EnumType.ORDINAL)
	// private PlanAuthorization planAuthorization;
}
