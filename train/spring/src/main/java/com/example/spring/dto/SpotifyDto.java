package com.example.spring.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class SpotifyDto {
    private Long id;
    @NotNull(message = "Không được để trống trường này!!!!")
    private String name;
    @NotNull(message = "Không được để trống trường này!!!!")
    @Size(max = 30, message = "Tối đa 30 kí tự")
    private String single;
    @NotNull(message = "Không được để trống trường này!!!!")
    @Size(max = 30, message = "Tối đa 30 kí tự")
    private String artist;
    @NotNull(message = "Không được để trống trường này!!!!")
    private String time;
    private Integer likes;
    private boolean songStatus;

    public SpotifyDto() {
    }

    public SpotifyDto(Long id, String name, String single, String artist, String time, Integer likes, boolean songStatus) {
        this.id = id;
        this.name = name;
        this.single = single;
        this.artist = artist;
        this.time = time;
        this.likes = likes;
        this.songStatus = songStatus;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSingle() {
        return single;
    }

    public void setSingle(String single) {
        this.single = single;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public boolean getSongStatus() {
        return songStatus;
    }

    public void setSongStatus(boolean songStatus) {
        this.songStatus = songStatus;
    }
}
