package com.planner.trip.entity.place.base;



import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.entity.place.Place;
import com.planner.trip.entity.user.User;

import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MappedSuperclass;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;

@Getter
@MappedSuperclass
public class PlaceUserAction extends BaseEntity {

	// 장소
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "content_id")
	protected Place place;

	// 사용자
	@NotNull
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	protected User user;
}
