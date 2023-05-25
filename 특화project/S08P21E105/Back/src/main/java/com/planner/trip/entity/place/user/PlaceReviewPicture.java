package com.planner.trip.entity.place.user;

import com.planner.trip.entity.global.BaseEntity;

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
public class PlaceReviewPicture extends BaseEntity {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 사진이 포함된 리뷰
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	private PlaceReview placeReview;

	// 사진 url
	@NotNull
	private String url;
}
