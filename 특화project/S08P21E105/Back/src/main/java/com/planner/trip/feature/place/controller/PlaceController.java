package com.planner.trip.feature.place.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.planner.trip.feature.place.dto.request.PlaceListRequest;
import com.planner.trip.feature.place.dto.request.PlaceRatingRequest;
import com.planner.trip.util.loader.place.PlaceLoader;
import com.planner.trip.util.common.dto.Response;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/places")
@RequiredArgsConstructor
@Tag(name = "Places", description = "장소 관련 API")
public class PlaceController {

	private final PlaceLoader placeLoader;

	@GetMapping
	@Operation(summary = "장소 목록 불러오기")
	public ResponseEntity<Response<?>> placeList(@RequestHeader(name = "Authorization", required = false) String token,
		PlaceListRequest placeListRequest) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@GetMapping("/{contentId}")
	@Operation(summary = "장소 상세정보 불러오기")
	public ResponseEntity<Response<?>> placeDetails(
		@RequestHeader(name = "Authorization", required = false) String token, @PathVariable Integer contentId) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@PostMapping("/{contentId}/rating")
	@Operation(summary = "장소 평점 추가")
	public ResponseEntity<Response<?>> ratingAdd(@RequestHeader(name = "Authorization", required = false) String token,
		@PathVariable Integer contentId, @RequestBody PlaceRatingRequest placeRatingRequest) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@PutMapping("/{contentId}/bookmark")
	@Operation(summary = "장소 즐겨찾기 추가/삭제")
	public ResponseEntity<Response<?>> bookmarkModify(
		@RequestHeader(name = "Authorization", required = false) String token, @PathVariable Integer contentId) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@GetMapping("/{contentId}/reviews")
	@Operation(summary = "장소 리뷰 조회")
	public ResponseEntity<Response<?>> reviewList(@RequestHeader(name = "Authorization", required = false) String token,
		@PathVariable Integer contentId) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@PostMapping("/{contentId}/reviews")
	@Operation(summary = "장소 리뷰 작성")
	public ResponseEntity<Response<?>> reviewAdd(@RequestHeader(name = "Authorization", required = false) String token,
		@PathVariable Integer contentId) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@PutMapping("/{contentId}/reviews/{reviewId}")
	@Operation(summary = "장소 리뷰 수정")
	public ResponseEntity<Response<?>> reviewModify(
		@RequestHeader(name = "Authorization", required = false) String token, @PathVariable Long contentId,
		@PathVariable Long reviewId) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@DeleteMapping("/{contentId}/reviews/{reviewId}")
	@Operation(summary = "장소 리뷰 삭제")
	public ResponseEntity<Response<?>> reviewDelete(
		@RequestHeader(name = "Authorization", required = false) String token, @PathVariable Long contentId,
		@PathVariable Long reviewId) {

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}

	@PostMapping("/load")
	@Operation(hidden = true)
	public ResponseEntity<Response<?>> placeLoad(@RequestHeader(name = "Authorization") String authorization) {

		placeLoader.test();

		return ResponseEntity.ok(Response.of("", 200, "Success"));
	}
}
