import {
  NYTDoc,
  NYTMultimediaObject,
  NYTMultimediaArrayItem,
} from "@/types/article";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pickNYTThumbnail(
  multimedia: NYTDoc["multimedia"]
): string | null {
  if (!multimedia) return null;
  const abs = (u: string) =>
    u.startsWith("http") ? u : `https://static01.nyt.com/${u}`;

  // Case A: object with { thumbnail, default }
  if (!Array.isArray(multimedia)) {
    const m = multimedia as NYTMultimediaObject;
    const url = m.default?.url ?? null;
    return url ? abs(url) : null;
  }

  // Case B: array of items (fallback: first item with url)
  const arr = multimedia as NYTMultimediaArrayItem[];
  const firstWithUrl = arr.find((x) => !!x.url);
  return firstWithUrl?.url ? abs(firstWithUrl.url) : null;
}
