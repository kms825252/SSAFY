package com.planner.trip.util.loader.place.dto.response;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class PlaceItem {
	@JsonProperty("addr1")
	private String address1;

	@JsonProperty("addr2")
	private String address2;

	@JsonProperty("areacode")
	private String areaCode;

	@JsonProperty("booktour")
	private String bookTour;

	@JsonProperty("cat1")
	private String category1;

	@JsonProperty("cat2")
	private String category2;

	@JsonProperty("cat3")
	private String category3;

	@JsonProperty("contentid")
	private String contentId;

	@JsonProperty("contenttypeid")
	private String contentTypeId;

	@JsonProperty("createdtime")
	private String createdTime;

	@JsonProperty("firstimage")
	private String firstImage;

	@JsonProperty("firstimage2")
	private String firstImage2;

	@JsonProperty("cpyrhtDivCd")
	private String copyrightDivisionCode;

	@JsonProperty("mapx")
	private String mapX;

	@JsonProperty("mapy")
	private String mapY;

	@JsonProperty("mlevel")
	private String mapLevel;

	@JsonProperty("modifiedtime")
	private String modifiedTime;

	@JsonProperty("sigungucode")
	private String siGunGuCode;

	@JsonProperty("tel")
	private String telephoneNumber;

	@JsonProperty("title")
	private String title;

	@JsonProperty("zipcode")
	private String zipCode;
}
