package com.ufape.estagios.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ufape.estagios.model.StatusDaVaga;
import com.ufape.estagios.model.Usuario;
import com.ufape.estagios.model.Vaga;

@Repository
public interface VagaRepository extends JpaRepository<Vaga, Long> {

    @Query("SELECT v FROM Vaga v WHERE v.empresa = :empresa AND v.status = :status")
    List<Vaga> findByEmpresaAndStatus(@Param("empresa") Usuario empresa,
            @Param("status") StatusDaVaga status);

    List<Vaga> findByStatus(StatusDaVaga statusDaVaga);

    List<Vaga> findByEmpresa(Usuario empresa);
}