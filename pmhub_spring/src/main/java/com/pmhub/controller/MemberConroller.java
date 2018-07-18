package com.pmhub.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pmhub.dao.Member;

@RestController
public class MemberConroller {

	@RequestMapping("/members")
	public List<Member> getAllMembers() {
		return Arrays.asList(
				new Member(1, "Nilesh Darji", "nilesh.darji@gmail.com"),
				new Member(2, "Kris G", "kris@homeunion.com"),
				new Member(2, "Karthik", "karthik@homeunion.com")
		);
	}
}