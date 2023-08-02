package com.example.spring.controller;


import com.example.spring.dto.SpotifyDto;
import com.example.spring.model.Spotify;
import com.example.spring.service.ISpotifyService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/spotifys")
@CrossOrigin("*")
public class SpotifyController {

    @Autowired
    private ISpotifyService spotifyService;

    @GetMapping("/{page}/{limit}")
    public ResponseEntity<Page<Spotify>> getAll(@PathVariable Integer page,
                                                @PathVariable Integer limit
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        if (spotifyService.getAll(pageable).isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(spotifyService.getAll(pageable), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<?> createSong(@Valid @RequestBody SpotifyDto spotifyDto, BindingResult bindingResult) {
        if(bindingResult.hasErrors()) {
            List<String> errors = bindingResult.getFieldErrors()
                    .stream()
                    .map(DefaultMessageSourceResolvable::getDefaultMessage)
                    .collect(Collectors.toList());
            return new ResponseEntity<>(errors.toString(), HttpStatus.BAD_REQUEST);
        }
        Spotify spotify = new Spotify();
        BeanUtils.copyProperties(spotifyDto, spotify);
        spotifyService.addNewSong(spotify);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> editSong(@PathVariable Long id) {
        spotifyService.editSong(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<?> getSongById(@PathVariable Long id) {
        return new ResponseEntity<>(spotifyService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/search/{name}")
    @ResponseBody
    public ResponseEntity<?> findByName(@PathVariable String name) {
        return new ResponseEntity<>(spotifyService.findByName(name), HttpStatus.OK);
    }

}
