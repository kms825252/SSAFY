package com.planner.trip.entity.plan;

import java.time.LocalDateTime;

import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.util.constants.ContentType;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
public class PlanPlace extends BaseEntity {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 해당 장소의 id 값을 통해 참조하기 위함
	@NotNull
	private Long contentId;

	// 장소 타입
	@NotNull
	@Enumerated(EnumType.STRING)
	private ContentType contentType;

	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	private Plan plan;

	// 일정에서 해당 장소의 시작 시간, NULL 인 경우 아직 일정에 포함을 시키지 않았다는 의미
	private LocalDateTime start;

	// 해당 장소에 머무는 시간 (분 단위), DEFAULT 평균 머무는 시간 데이터를 이용
	@NotNull
	private Integer stayTime;
}
