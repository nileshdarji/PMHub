package com.pmhub.repositories;

import org.springframework.data.repository.CrudRepository;
import com.pmhub.dao.Member;

public interface MemberRepository extends CrudRepository<Member, Integer> {

}
