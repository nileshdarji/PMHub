package com.pmhub.repositories;

import com.pmhub.dao.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, Integer>{

}
