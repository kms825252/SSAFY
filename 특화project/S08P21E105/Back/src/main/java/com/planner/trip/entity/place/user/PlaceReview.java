package com.planner.trip.entity.place.user;

import com.planner.trip.entity.place.Place;
import com.planner.trip.entity.place.base.PlaceUserAction;
import com.planner.trip.entity.plan.PlanPlace;
import com.planner.trip.entity.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class PlaceReview extends PlaceUserAction {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 리뷰 내용
	@NotNull
	@Size(min = 1, max = 1000)
	@Column(length = 1000)
	private String review;

	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn
	private PlanPlace planPlace;

	@NotNull
	private Boolean isPublic;

	@Builder
	public PlaceReview(Place place, User user, Long id, String review, PlanPlace planPlace, Boolean isPublic) {
		this.place = place;
		this.user = user;
		this.id = id;
		this.review = review;
		this.planPlace = planPlace;
		this.isPublic = isPublic;
	}
}
