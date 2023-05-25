package com.planner.trip.util.common.dto;

import java.util.List;

import org.springframework.data.domain.Slice;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Response<D> {

	private final D data;
	private final Integer status;
	private final String message;
	private final String type;

	private Response(D data, Integer status, String message, String type) {
		this.data = data;
		this.status = status;
		this.message = message;
		this.type = type;
	}

	public static <D> Response<D> of(D data, Integer status, String message) {
		String type = (data instanceof Slice) ? "slice" : (data instanceof List) ? "list" : "object";

		return new Response<>(data, status, message, type);
	}
}
