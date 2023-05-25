package com.planner.trip.util.loader.place;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import com.planner.trip.util.constants.ContentType;
import com.planner.trip.util.loader.place.dto.response.PlaceItem;
import com.planner.trip.util.loader.place.dto.response.PlaceItemList;
import com.planner.trip.util.loader.place.dto.response.PlaceListResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlaceLoader {

	private final WebClient webClient;

	@Value("${tour.api.key}")
	private String serviceKey;

	@Value("${tour.api.scheme}")
	private String scheme;

	@Value("${tour.api.host}")
	private String host;

	@Value("${tour.api.list.path}")
	private String path;

	public void test() {

		int pageNo = 1;

		for (ContentType contentType : ContentType.values()) {

			UriComponents uriComponents = UriComponentsBuilder.newInstance()
				.scheme(scheme)
				.host(host)
				.path(path)
				.queryParam("numOfRows", 5)
				.queryParam("pageNo", pageNo)
				.queryParam("MobileOS", "ETC")
				.queryParam("MobileApp", "TriPlanner")
				.queryParam("serviceKey", serviceKey)
				.queryParam("_type", "json")
				.queryParam("contentTypeId", contentType.getValue())
				.build(true);

			PlaceListResponse placeListResponse = webClient.get()
				.uri(uriComponents.toUri())
				.retrieve()
				.bodyToMono(PlaceListResponse.class)
				.block();

			PlaceItemList placeItemList = placeListResponse.getResponse().getBody();

			assert placeItemList != null;
			for (PlaceItem placeItem : placeItemList.getItems().getItem()) {
				System.out.println(placeItem);
			}
		}
	}
}
