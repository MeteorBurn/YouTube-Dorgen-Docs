---
sidebar_position: 100
title: Демонстрация
---

# Демонстрация компонентов

## Встраивание видео с YouTube

Пример встраивания видео с YouTube:

<div className="video-container">
  <iframe 
    src="https://www.youtube.com/embed/-p_5vOJPzhI" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

Вы также можете настроить размер видео:

<div className="video-container" style={{maxWidth: '400px'}}>
  <iframe 
    src="https://www.youtube.com/embed/To7XvGZjkl4" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>
