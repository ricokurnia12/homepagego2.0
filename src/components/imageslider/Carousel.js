import React, { useState, useEffect } from 'react';
import { config } from 'react-spring';
import dynamic from 'next/dynamic';

const Carousel = dynamic(() => import('react-spring-3d-carousel'), {
  ssr: false,
});

export default function Carroussel(props) {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(4);
  const [showArrows, setShowArrows] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    if (!props.cards) {
      setCards([]);
      return;
    }

    const table = props.cards.map((element, index) => {
      return { ...element, onClick: () => setGoToSlide(index) };
    });

    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
    setCards(table);
  }, [props.cards, props.offset, props.showArrows]);

  if (!props.cards) {
    return <p>Gagal</p>; // or you can return a loading spinner or some other fallback UI
  }

  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        margin: props.margin,
      }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />
    </div>
  );
}
