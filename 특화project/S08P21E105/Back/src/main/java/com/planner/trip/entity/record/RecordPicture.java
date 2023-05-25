package com.planner.trip.entity.record;

import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.entity.plan.Plan;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class RecordPicture extends BaseEntity {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 사진이 포함된 일정
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	private Plan plan;

	// 사진이 저장된 기록
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	private Record record;

	// URL
	@NotNull
	private String url;
}
