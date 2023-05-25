package com.planner.trip.entity.place;

import java.sql.Clob;

import org.hibernate.validator.constraints.Range;

import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.util.constants.Area;
import com.planner.trip.util.constants.ContentType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Place extends BaseEntity {

	/*
		Tour Api 에서 제공하는 컨텐츠 ID 값을 그대로 ID로 장소들에 사용
		이후 API 호출이 편리함
	 */
	@NotNull
	@Id
	private Long contentId;

	// 해당 장소의 타입을 나타내는 값
	@NotNull
	@Enumerated(EnumType.STRING)
	private ContentType contentType;

	// 제목
	@NotNull
	@Size(min = 1, max = 200)
	@Column(length = 200)
	private String title;

	// 주소 + 상세주소
	@Size(max = 300)
	@Column(length = 300)
	private String address;

	// 지역 코드 값
	@Enumerated(EnumType.STRING)
	private Area area;

	/*
		관광지 분류 코드
		0~3 : 대분류 코드
		0~5 : 중분류 코드
		0~8 : 소분류 코드
	 */
	@Size(max = 12)
	@Column(length = 12)
	private String category;

	// 위도 좌표 mapY
	@NotNull
	@Range(min = 32, max = 44)
	private Double lat;

	// 경도 좌표 mapX
	@NotNull
	@Range(min = 123, max = 133)
	private Double lng;

	// 전화번호
	@Pattern(regexp = "^\\d{3}-\\d{3,4}-\\d{4}$")
	private String tel;

	// 우편번호
	@Size(max = 12)
	@Column(length = 12)
	private String zipCode;

	// 대표 이미지 원본 (500*333 size), URL 형태
	@Size(max = 100)
	@Column(length = 100)
	private String representativePicture;

	// 대표 이미지 썸네일 (150*100 size), URL 형태
	@Size(max = 100)
	@Column(length = 100)
	private String representativeThumbnail;
}
