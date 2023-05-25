package com.planner.trip.feature.place.dto.request;

import java.util.List;

import com.planner.trip.util.constants.Area;
import com.planner.trip.util.constants.ContentType;

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
public class PlaceListRequest {

	private Integer area;

	private String keyword;

	private String sort;
	private Integer size;
	private Integer page;

	private String contentTypes;
}
