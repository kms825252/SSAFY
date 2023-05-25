package com.planner.trip.entity.place.detail;

import java.sql.Clob;

import com.planner.trip.entity.place.base.PlaceDetail;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@Entity
public class TripDestination extends PlaceDetail {

	// 체험 안내
	@Lob
	private Clob expGuide;

	// 체험 가능 연령
	@Size(max = 500)
	@Column(length = 500)
	private String expAgeRange;

	// 이용 시기
	@Size(max = 500)
	@Column(length = 500)
	private String useSeason;

	@Builder
	public TripDestination(Long contentId, String checkPet, String infoCenter, String restDate, Clob parking,
		Clob parkingFee, Clob useTime, String capacity, String scale, Clob expGuide, String expAgeRange,
		String useSeason) {
		this.contentId = contentId;
		this.checkPet = checkPet;
		this.infoCenter = infoCenter;
		this.restDate = restDate;
		this.parking = parking;
		this.parkingFee = parkingFee;
		this.useTime = useTime;
		this.capacity = capacity;
		this.scale = scale;
		this.expGuide = expGuide;
		this.expAgeRange = expAgeRange;
		this.useSeason = useSeason;
	}
}
