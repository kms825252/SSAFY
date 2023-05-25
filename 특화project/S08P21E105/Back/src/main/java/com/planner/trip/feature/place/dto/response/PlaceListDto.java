package com.planner.trip.feature.place.dto.response;

import com.planner.trip.entity.place.Place;
import com.planner.trip.util.constants.Area;
import com.planner.trip.util.constants.ContentType;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class PlaceListDto {

	@NotNull(message = "PlaceListDto contentId NULL ERROR")
	private Long contentId;

	@NotNull(message = "PlaceListDto contentType NULL ERROR")
	private ContentType contentType;

	@NotNull(message = "PlaceListDto title NULL ERROR")
	private String title;

	private String address;

	private Area area;

	private String category;

	private Double lat;

	private Double lng;

	private String representativePicture;

	private String representativeThumbnail;

	public PlaceListDto(Place place) {
		this.contentId = place.getContentId();
		this.contentType = place.getContentType();
		this.title = place.getTitle();
		this.address = place.getAddress();
		this.area = place.getArea();
		this.category = place.getCategory();
		this.lat = place.getLat();
		this.lng = place.getLng();
		this.representativePicture = place.getRepresentativePicture();
		this.representativeThumbnail = place.getRepresentativeThumbnail();
	}
}
