import { useState } from "react";

export function useAlbum() {
  const ALBUM = [
    {
      id: "1005",
      author: "Matthew Wiebe",
      width: 5760,
      height: 3840,
      url: "https://unsplash.com/photos/tBtuxtLvAZs",
      download_url: "https://picsum.photos/id/1005/5760/3840",
    },
    {
      id: "1006",
      author: "Vladimir Kudinov",
      width: 3000,
      height: 2000,
      url: "https://unsplash.com/photos/-wWRHIUklxM",
      download_url: "https://picsum.photos/id/1006/3000/2000",
    },
    {
      id: "1008",
      author: "Benjamin Combs",
      width: 5616,
      height: 3744,
      url: "https://unsplash.com/photos/5L4XAgMSno0",
      download_url: "https://picsum.photos/id/1008/5616/3744",
    },
    {
      id: "1013",
      author: "Cayton Heath",
      width: 4256,
      height: 2832,
      url: "https://unsplash.com/photos/D8LcRLwZyPs",
      download_url: "https://picsum.photos/id/1013/4256/2832",
    },
    {
      id: "101",
      author: "Christian Bardenhorst",
      width: 2621,
      height: 1747,
      url: "https://unsplash.com/photos/8lMhzUjD1Wk",
      download_url: "https://picsum.photos/id/101/2621/1747",
    },
    {
      id: "1010",
      author: "Samantha Sophia",
      width: 5184,
      height: 3456,
      url: "https://unsplash.com/photos/NaWKMlp3tVs",
      download_url: "https://picsum.photos/id/1010/5184/3456",
    },
    {
      id: "1011",
      author: "Roberto Nickson",
      width: 5472,
      height: 3648,
      url: "https://unsplash.com/photos/7BjmDICVloE",
      download_url: "https://picsum.photos/id/1011/5472/3648",
    },
    {
      id: "1012",
      author: "Scott Webb",
      width: 3973,
      height: 2639,
      url: "https://unsplash.com/photos/uAgLGG1WBd4",
      download_url: "https://picsum.photos/id/1012/3973/2639",
    },
    {
      id: "1013",
      author: "Cayton Heath",
      width: 4256,
      height: 2832,
      url: "https://unsplash.com/photos/D8LcRLwZyPs",
      download_url: "https://picsum.photos/id/1013/4256/2832",
    },
  ];

  const [album, setAlbum] = useState(ALBUM);

  return album;
}
