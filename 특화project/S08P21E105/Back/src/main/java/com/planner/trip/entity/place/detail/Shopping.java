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
public class Shopping extends PlaceDetail {

	// 문화센터 바로가기
	@Size(max = 1000)
	@Column(length = 1000)
	private String cultureCenter;

	// 장 서는날
	@Size(max = 100)
	@Column(length = 100)
	private String fairDay;

	// 화장실 설명
	@Size(max = 1000)
	@Column(length = 1000)
	private String restroom;

	// 판매 품목
	@Size(max = 1000)
	@Column(length = 1000)
	private String saleItem;

	// 판매 품목 별 가격
	@Lob
	private Clob saleItemCost;

	// 매장 안내
	@Lob
	private Clob shopGuide;

	@Builder
	public Shopping(Long contentId, String checkPet, String infoCenter, String restDate, Clob parking, Clob parkingFee,
		Clob useTime, String capacity, String scale, String cultureCenter, String fairDay, String restroom,
		String saleItem, Clob saleItemCost, Clob shopGuide) {
		this.contentId = contentId;
		this.checkPet = checkPet;
		this.infoCenter = infoCenter;
		this.restDate = restDate;
		this.parking = parking;
		this.parkingFee = parkingFee;
		this.useTime = useTime;
		this.capacity = capacity;
		this.scale = scale;
		this.cultureCenter = cultureCenter;
		this.fairDay = fairDay;
		this.restroom = restroom;
		this.saleItem = saleItem;
		this.saleItemCost = saleItemCost;
		this.shopGuide = shopGuide;
	}
}
