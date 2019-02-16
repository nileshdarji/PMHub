package com.pmhub.repositories;

import org.springframework.data.repository.CrudRepository;
import com.pmhub.dao.Project;

public interface ProjectRepository extends CrudRepository<Project, Integer> {

}
