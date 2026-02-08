package com.ufape.estagios.dto;

import com.ufape.estagios.model.UserRole;

public record RegisterDTO(String login, String password, UserRole role) {
}