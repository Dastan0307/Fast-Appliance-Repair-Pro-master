import React from "react";

interface YouTubePlayerProps {
  url: string | null;
  title?: string;
  width?: string | number;
  height?: string | number;
  controls?: "0" | "1";
  className?: string;
  style?: React.CSSProperties;
}

export const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  url,
  title = "YouTube Video",
  width = "560",
  height = "350",
  controls = "0",
  className = "",
  style = {},
}) => {
  const extractVideoId = (url: string | null | undefined): string | null => {
    if (!url) return null;
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const videoId = extractVideoId(url);

  if (!videoId) return null;

  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}?controls=${controls}`}
      title={title}
      allowFullScreen
      className={className}
      style={{ maxWidth: "100%", borderRadius: "8px", ...style }}
    />
  );
};
