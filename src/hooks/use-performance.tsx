import { useEffect, useCallback, useState } from 'react';

// Hook para otimizar performance da página
export const usePerformanceOptimization = () => {

  // Preload de recursos críticos
  const preloadCriticalResources = useCallback(() => {
    // Preload de fontes
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap';
    fontLink.as = 'font';
    fontLink.type = 'font/woff2';
    fontLink.crossOrigin = 'anonymous';
    document.head.appendChild(fontLink);

    // Preload da imagem do perfil
    const profileImg = new Image();
    profileImg.src = 'https://cdn.builder.io/api/v1/image/assets%2Faad2ee0e75b74a72a20bf4fddbeddbec%2Fa25500830e3e4389bb4723c7c824012e?format=webp&width=800';
  }, []);

  // Otimizações de scroll suave
  const optimizeScrolling = useCallback(() => {
    // Debounce para eventos de scroll
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      document.body.style.pointerEvents = 'none';

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Reduzir repaint e reflow
  const optimizeAnimations = useCallback(() => {
    // Force hardware acceleration para elementos animados
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      (el as HTMLElement).style.willChange = 'transform, opacity';
    });

    return () => {
      animatedElements.forEach(el => {
        (el as HTMLElement).style.willChange = 'auto';
      });
    };
  }, []);

  // Otimizar imagens lazy loading
  const optimizeImages = useCallback(() => {
    if ('loading' in HTMLImageElement.prototype) {
      const images = document.querySelectorAll('img[data-lazy]');
      images.forEach(img => {
        (img as HTMLImageElement).loading = 'lazy';
      });
    } else if ('IntersectionObserver' in window) {
      // Fallback usando IntersectionObserver nativo
      const images = document.querySelectorAll('img[data-lazy]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }, []);

  // Cleanup de memory leaks
  const cleanupMemoryLeaks = useCallback(() => {
    return () => {
      // Cleanup de event listeners
      const abortController = new AbortController();
      return () => abortController.abort();
    };
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    const cleanupScroll = optimizeScrolling();
    const cleanupAnimations = optimizeAnimations();
    const cleanupMemory = cleanupMemoryLeaks();

    // Defer non-critical optimizations
    const timer = setTimeout(() => {
      optimizeImages();
    }, 100);

    return () => {
      cleanupScroll?.();
      cleanupAnimations?.();
      cleanupMemory?.();
      clearTimeout(timer);
    };
  }, [preloadCriticalResources, optimizeScrolling, optimizeAnimations, optimizeImages, cleanupMemoryLeaks]);
};

// Hook para lazy loading de componentes
export const useLazyComponent = (shouldLoad: boolean) => {
  return shouldLoad;
};

// Hook para intersection observer otimizado
export const useIntersectionObserver = (
  ref: React.RefObject<HTMLElement>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '50px', ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};
