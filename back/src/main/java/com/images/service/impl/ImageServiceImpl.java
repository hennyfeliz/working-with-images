package com.images.service.impl;

import com.images.entities.Image;
import com.images.repository.ImageRepository;
import com.images.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    private ImageRepository imageRepository;

    @Override
    public Image createImage(Image image) {
        return imageRepository.save(image);
    }

    @Override
    public Optional<Image> getImageById(Long id) {
        return imageRepository.findById(id);
    }

    @Override
    public Optional<Image> getImageByImagename(String image) {
        return Optional.empty();
    }

    @Override
    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    @Override
    public Optional<Image> updateImage(Long id, Image image) {
        return Optional.empty();
    }

    @Override
    public boolean deleteImage(Long id) {
        return false;
    }
}
