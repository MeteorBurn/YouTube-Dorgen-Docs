import React from 'react';
import styles from './styles.module.css';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  width?: number;
  height?: number;
}

export default function YouTubeEmbed({
  videoId,
  title = 'YouTube video player',
  width = 560,
  height = 315,
}: YouTubeEmbedProps): React.ReactElement {
  return (
    <div className={styles.videoContainer}>
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
