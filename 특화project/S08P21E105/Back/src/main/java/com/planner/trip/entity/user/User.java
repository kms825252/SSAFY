package com.planner.trip.entity.user;

import java.time.LocalDate;

import com.planner.trip.entity.global.BaseEntity;
import com.planner.trip.util.constants.Gender;
import com.planner.trip.util.constants.Provider;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.validation.constraints.NotNull;
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
@Table(uniqueConstraints = {@UniqueConstraint(columnNames = {"account_id", "provider"})})
public class User extends BaseEntity {

	// 일련번호
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	/*
		사용자 계정 ID
		소셜 로그인 : 제공 받은 ID 값
		이메일 로그인 : 이메일
	 */
	@NotNull(message = "사용자 account id NULL ERROR")
	@Column(name = "account_id")
	private String accountId;

	@NotNull(message = "사용자 provider NULL ERROR")
	@Enumerated(EnumType.STRING)
	private Provider provider;

	@NotNull(message = "사용자 닉네임 NULL ERROR")
	@Size(min = 1, max = 16, message = "사용자 닉네임 Size ERROR")
	@Column(length = 16)
	private String nickName;

	@NotNull
	@Size(min = 8, max = 20, message = "사용자 비밀번호 Size ERROR")
	@Column(length = 20)
	private String password;

	private LocalDate birth;

	@Enumerated(EnumType.STRING)
	private Gender gender;
}
