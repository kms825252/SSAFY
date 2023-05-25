package com.planner.trip.entity.record;

import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.entity.plan.Plan;
import com.planner.trip.util.constants.RecordType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Null;
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
public class Record extends BaseEntity {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 기록을 쓴 일정
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	private Plan plan;

	// 기록의 종류
	@NotNull
	@Enumerated(EnumType.STRING)
	private RecordType type;

	// 기록 내용
	@Null
	@Size(max = 2000)
	@Column(length = 2000)
	private String contents;
}
