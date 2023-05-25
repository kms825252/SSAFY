package com.planner.trip.entity.place.user;

import com.planner.trip.entity.place.Place;
import com.planner.trip.entity.place.base.PlaceUserAction;
import com.planner.trip.entity.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class PlaceBookmark extends PlaceUserAction {

	// 자동 생성 일련 번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// 북마크 여부
	@NotNull
	private Boolean bookmark;

	@Builder
	public PlaceBookmark(@NotNull Place place, @NotNull User user, Long id, Boolean bookmark) {
		this.place = place;
		this.user = user;
		this.id = id;
		this.bookmark = bookmark;
	}
}
