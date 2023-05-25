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
public class CulturalFacility extends PlaceDetail {

	// 할인 정보
	@Size(max = 1000)
	@Column(length = 1000)
	private String discountInfo;

	// 이용 요금
	@Lob
	private Clob useFee;

	// 관람 소요 시간
	@Size(max = 1000)
	@Column(length = 1000)
	private String spendTime;

	@Builder
	public CulturalFacility(Long contentId, String checkPet, String infoCenter, String restDate, Clob parking,
		Clob parkingFee, Clob useTime, String capacity, String scale, String discountInfo, Clob useFee,
		String spendTime) {
		this.contentId = contentId;
		this.checkPet = checkPet;
		this.infoCenter = infoCenter;
		this.restDate = restDate;
		this.parking = parking;
		this.parkingFee = parkingFee;
		this.useTime = useTime;
		this.capacity = capacity;
		this.scale = scale;
		this.discountInfo = discountInfo;
		this.useFee = useFee;
		this.spendTime = spendTime;
	}
}
