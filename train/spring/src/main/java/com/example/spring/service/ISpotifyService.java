package com.example.spring.service;

import com.example.spring.model.Spotify;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ISpotifyService {
    Page<Spotify> getAll(Pageable pageable);

    void addNewSong(Spotify spotify);
    void editSong(Long id);
    Spotify getById(Long id);
    List<Spotify> findByName(String name);
}
