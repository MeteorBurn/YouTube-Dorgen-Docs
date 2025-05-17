import React from 'react';
import styles from './styles.module.css';

interface YouTubeEmbedProps {
  videoId: string;
}

export default function YouTubeEmbed({ videoId }: YouTubeEmbedProps): React.ReactNode {
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className={styles.videoContainer}>
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube video"
      />
    </div>
  );
}
