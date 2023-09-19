package com.images.service;

import com.images.entities.Image;

import java.util.List;
import java.util.Optional;

public interface ImageService {
    Image createImage(Image image);
    Optional<Image> getImageById(Long id);
    Optional<Image> getImageByImagename(String image);
    List<Image> getAllImages();
    Optional<Image> updateImage(Long id, Image image);
    boolean deleteImage(Long id);
}
