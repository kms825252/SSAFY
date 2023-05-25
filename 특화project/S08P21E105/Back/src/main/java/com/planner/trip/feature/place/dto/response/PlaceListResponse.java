package com.planner.trip.feature.place.dto.response;

import java.util.List;

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
public class PlaceListResponse {
	private List<PlaceListDto> places;

	private Integer size;
	private Integer page;
	private Boolean last;
	private Boolean first;
	private Integer total;

}
