package com.pmhub.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pmhub.dao.Team;

@RestController
public class TeamController {

	@RequestMapping("/teams")
	public List<Team> getAllTeams() {
		return Arrays.asList(
				new Team("1", "Spring Framework", "Spring Framework Description"),
				new Team("2", "Core Java", "Core Java Description"),
				new Team("3", "Javascript", "Javascript Description")
		);
	}
}
