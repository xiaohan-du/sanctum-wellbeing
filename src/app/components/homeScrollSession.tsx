'use client';

import { useEffect, useLayoutEffect } from 'react';

const STORAGE_KEY = 'sanctumHomeScrollY';

/**
 * On the home page: restores scroll after returning from another route (e.g. promo pages)
 * and saves scroll position before navigating away so "Back to home" returns to the same place.
 */
export function HomeScrollSession() {
  useLayoutEffect(() => {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw == null) return;
    sessionStorage.removeItem(STORAGE_KEY);
    const y = Number.parseInt(raw, 10);
    if (Number.isNaN(y)) return;
    window.scrollTo(0, y);
  }, []);

  useEffect(() => {
    const saveBeforeLeave = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest?.('a');
      if (!el || !(el instanceof HTMLAnchorElement)) return;
      if (el.target === '_blank' || el.hasAttribute('download')) return;
      const href = el.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      if (href.startsWith('mailto:') || href.startsWith('tel:')) return;

      let url: URL;
      try {
        url = new URL(href, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      const path = url.pathname.replace(/\/$/, '') || '/';
      if (path === '/') return;

      sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
    };

    document.addEventListener('click', saveBeforeLeave, true);
    return () => document.removeEventListener('click', saveBeforeLeave, true);
  }, []);

  return null;
}
