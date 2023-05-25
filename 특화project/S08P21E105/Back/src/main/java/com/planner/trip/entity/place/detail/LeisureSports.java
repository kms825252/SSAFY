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
public class LeisureSports extends PlaceDetail {

	// 체험 가능 연령
	@Size(max = 500)
	@Column(length = 500)
	private String expAgeRange;

	// 개장 기간
	@Size(max = 300)
	@Column(length = 300)
	private String openPeriod;

	// 예약 안내
	@Size(max = 1000)
	@Column(length = 1000)
	private String reservation;

	// 입장료
	@Lob
	private Clob useFee;

	@Builder
	public LeisureSports(Long contentId, String checkPet, String infoCenter, String restDate, Clob parking,
		Clob parkingFee, Clob useTime, String capacity, String scale, String expAgeRange, String openPeriod,
		String reservation, Clob useFee) {
		this.contentId = contentId;
		this.checkPet = checkPet;
		this.infoCenter = infoCenter;
		this.restDate = restDate;
		this.parking = parking;
		this.parkingFee = parkingFee;
		this.useTime = useTime;
		this.capacity = capacity;
		this.scale = scale;
		this.expAgeRange = expAgeRange;
		this.openPeriod = openPeriod;
		this.reservation = reservation;
		this.useFee = useFee;
	}
}
