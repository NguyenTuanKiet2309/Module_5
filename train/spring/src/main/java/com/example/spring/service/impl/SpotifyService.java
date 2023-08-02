package com.example.spring.service.impl;

import com.example.spring.model.Spotify;
import com.example.spring.repository.ISpotifyRepository;
import com.example.spring.service.ISpotifyService;
import com.example.spring.service.ISpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpotifyService implements ISpotifyService {
    @Autowired
    private ISpotifyRepository spotifyRepository;


    @Override
    public Page<Spotify> getAll(Pageable pageable) {
        return spotifyRepository.getAllSong(pageable);
    }

    @Override
    public void addNewSong(Spotify spotify) {
        spotifyRepository.addNewSong(spotify);
    }

    @Override
    public void editSong(Long id) {
        spotifyRepository.editSong(id);
    }

    @Override
    public Spotify getById(Long id) {
        return spotifyRepository.getSongById(id);
    }

    @Override
    public List<Spotify> findByName(String name) {
        return spotifyRepository.findSongByName(name);
    }
}
