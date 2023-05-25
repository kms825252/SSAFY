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
public class PlaceItemList {

	@JsonProperty("items")
	private PlaceItems items;

	@JsonProperty("totalCount")
	private int totalCount;

}
