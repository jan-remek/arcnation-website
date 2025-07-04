import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhatWeDoSection = (): JSX.Element => {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState<number | null>(null);

  // Video data for the slider - using existing images
  const videos = [
    {
      id: 1,
      title: "Testimonials für social Ads",
      description: "So gewinnt Groupera neue Nutzer mit Testimonials auf Instagram",
      thumbnail: "/Thumbnail_Groupera_Depression.png",
      youtubeId: "KjrS49HFW74", // Groupera video
      hasVideo: true,
    },
    {
      id: 2,
      title: "Customer Success Stories",
      description: "So nutzt Afilio emotionales Storytelling um Ihre Mitgliedschaft zu erklären",
      thumbnail: "/Thumbnail_Afilio_Walter_Wide.png",
      youtubeId: "oz1--zh87zU", // Afilio video
      hasVideo: true,
    },
    {
      id: 3,
      title: "Brand Building",
      description: "So nutzt STACEY echte Kundenerfahrungen um ihre \"Community-First\" Brand zu etablieren.",
      thumbnail: "/Thumbnail_Groupera_Panik.png",
      youtubeId: "",
      hasVideo: false,
    },
  ];

  const handlePrevious = () => {
    setSelectedVideoIndex((prev) => 
      prev === 0 ? videos.length - 1 : prev - 1
    );
    setShowVideoModal(null);
  };

  const handleNext = () => {
    setSelectedVideoIndex((prev) => 
      prev === videos.length - 1 ? 0 : prev + 1
    );
    setShowVideoModal(null);
  };

  const handlePlayVideo = (videoIndex: number) => {
    const actualVideoIndex = (selectedVideoIndex + videoIndex) % videos.length;
    const video = videos[actualVideoIndex];
    
    if (video.hasVideo && video.youtubeId) {
      setShowVideoModal(actualVideoIndex);
    }
  };

  // NEW: Handle thumbnail click to switch to that video
  const handleThumbnailClick = (videoIndex: number) => {
    const actualVideoIndex = (selectedVideoIndex + videoIndex) % videos.length;
    
    // If clicking on the main video (index 0), try to play it
    if (videoIndex === 0) {
      handlePlayVideo(videoIndex);
    } else {
      // If clicking on a side thumbnail, switch to that video
      setSelectedVideoIndex(actualVideoIndex);
      setShowVideoModal(null);
    }
  };

  const handleCloseModal = () => {
    setShowVideoModal(null);
  };

  const getVisibleVideos = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (selectedVideoIndex + i) % videos.length;
      result.push({ ...videos[index], originalIndex: index });
    }
    return result;
  };

  const visibleVideos = getVisibleVideos();

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and description */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold text-black [font-family:'Open_Sans',Helvetica] mb-4 sm:mb-6">
            Testimonials die begeistern
          </h2>
          <p className="font-normal text-base sm:text-lg lg:text-xl text-black leading-relaxed [font-family:'Open_Sans',Helvetica] max-w-2xl">
            Deine Kunden sind deine besten Verkäufer - wir machen ihre
            Erfahrungen sichtbar mit hochwertigen Testimonial-Videos die
            überzeugen!
          </p>
        </div>

        {/* Video Slider */}
        <div className="relative mb-8 sm:mb-12">
          <div className="flex gap-4 md:gap-6 overflow-hidden">
            {visibleVideos.map((video, index) => {
              const isSelected = index === 0;
              
              return (
                <Card
                  key={`${video.id}-${video.originalIndex}`}
                  className={`
                    relative rounded-lg overflow-hidden border-0 shadow-lg transition-all duration-500 ease-in-out cursor-pointer
                    ${isSelected 
                      ? 'flex-shrink-0 w-full md:w-[580px] aspect-video' 
                      : 'flex-shrink-0 w-[280px] md:w-[320px] aspect-[3/4]'
                    }
                  `}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <CardContent className="p-0 h-full relative">
                    {/* Video Thumbnail */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    />
                    
                    {/* Overlay for non-selected videos */}
                    {!isSelected && (
                      <div className="absolute inset-0 bg-white/40 transition-opacity duration-500" />
                    )}
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Text content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <h3 className="font-bold text-white text-sm md:text-base [font-family:'Open_Sans',Helvetica] mb-1 md:mb-2">
                        {video.title}
                      </h3>
                      <p className="font-normal text-white text-xs md:text-sm leading-tight [font-family:'Open_Sans',Helvetica]">
                        {video.description}
                      </p>
                    </div>
                    
                    {/* Play button for selected video */}
                    {isSelected && (
                      <div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] md:w-[75px] md:h-[75px] rounded-full flex items-center justify-center transition-all duration-300 ${
                          video.hasVideo 
                            ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30 hover:scale-110 cursor-pointer' 
                            : 'bg-gray-500/50 cursor-not-allowed'
                        }`}
                      >
                        <PlayIcon className={`w-[24px] h-[24px] md:w-[30px] md:h-[30px] ml-1 transition-transform duration-200 ${
                          video.hasVideo 
                            ? 'text-white' 
                            : 'text-gray-300'
                        }`} />
                      </div>
                    )}

                    {/* Video status indicator */}
                    {isSelected && (
                      <div className={`absolute top-4 left-4 backdrop-blur-sm rounded-full px-3 py-1 ${
                        video.hasVideo 
                          ? 'bg-green-500/90' 
                          : 'bg-orange-500/90'
                      }`}>
                        <span className="text-white text-xs font-medium">
                          {video.hasVideo ? '▶ Video verfügbar' : '📹 Video folgt'}
                        </span>
                      </div>
                    )}

                    {/* Click indicator for side thumbnails */}
                    {!isSelected && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-start gap-2 mb-6 sm:mb-0">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="icon"
            className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full bg-[#c3c3c3] border-0 p-0 hover:bg-[#b0b0b0] transition-colors duration-200"
          >
            <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full bg-[#c3c3c3] border-0 p-0 hover:bg-[#b0b0b0] transition-colors duration-200"
          >
            <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-white" />
          </Button>
        </div>

        {/* Dots indicator for mobile */}
        <div className="flex justify-center gap-2 sm:hidden">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedVideoIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === selectedVideoIndex ? 'bg-[#e99c30]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal !== null && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="relative w-full max-w-6xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            {/* YouTube Video Player */}
            <div className="relative aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[showVideoModal].youtubeId}?autoplay=1&rel=0&modestbranding=1&fs=1`}
                title={videos[showVideoModal].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            
            {/* Video Info */}
            <div className="p-6 bg-black">
              <h3 className="text-xl font-bold text-white mb-2 [font-family:'Open_Sans',Helvetica]">
                {videos[showVideoModal].title}
              </h3>
              <p className="text-gray-300 [font-family:'Open_Sans',Helvetica]">
                {videos[showVideoModal].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};