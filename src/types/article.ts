export type NYTMultimediaArrayItem = {
  url?: string;
  subtype?: string;
  credit?: string;
};

export type NYTMultimediaObject = {
  credit?: string;
  default?: { url: string; height: number; width: number };
  thumbnail?: { url: string; height: number; width: number };
};

export type NYTDoc = {
  _id: string;
  web_url: string;
  abstract?: string;
  lead_paragraph?: string;
  section_name?: string | null;
  subsection_name?: string | null;
  byline?: { original?: string | null };
  pub_date: string;
  headline?: { main?: string | null };
  multimedia?: NYTMultimediaArrayItem[] | NYTMultimediaObject;
};

export type Article = {
  id: string;
  title: string;
  abstract: string;
  url: string;
  section: string | null;
  subsection: string | null;
  byline: string | null;
  publishedAt: string;
  multimedia: string | null;
};
