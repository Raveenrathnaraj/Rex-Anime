'use client';
import React, {Fragment, ReactNode, useEffect, useRef, useState} from 'react';

interface InfiniteScrollWrapperProps {
  children?: ReactNode;
  marginFromBottom?: string; // Values Like '500px', '20%', '50rem' are valid. Defaults to 100px
  eventCallback?: () => void;
}

function InfiniteScrollWrapper({
  children,
  marginFromBottom,
  eventCallback,
}: InfiniteScrollWrapperProps) {
  const [callBackTriggered, setCallBackTriggered] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    eventCallback?.();
  }, [callBackTriggered]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCallBackTriggered((currentValue) => currentValue+1);
        }
      },
      {
        rootMargin: marginFromBottom ?? '100px',
        threshold: 0.1,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <Fragment>
      {children}
      <div ref={ref}></div>
    </Fragment>
  );
}

export default InfiniteScrollWrapper;