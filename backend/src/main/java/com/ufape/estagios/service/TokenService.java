package com.ufape.estagios.service;

import com.ufape.estagios.model.Usuario;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

@Service
public class TokenService {

    @Value("${api.security.token.secret}")
    private String secret;

    // 1. Gera o Token (Cria o "Crachá" para o usuário)
    public String generateToken(Usuario usuario) {
        return Jwts.builder()
                .setSubject(usuario.getLogin()) // Quem é o dono?
                .setIssuedAt(new Date(System.currentTimeMillis())) // Criado agora
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // Expira em 10 horas
                .signWith(getSigningKey(), SignatureAlgorithm.HS256) // Assina digitalmente
                .compact();
    }

    // 2. Valida o Token (Verifica se o "Crachá" é verdadeiro)
    public String validateToken(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    // Métodos auxiliares para ler informações de dentro do Token
    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }
}