// https://unsplash.com/photos/nbQmZk_rs8c
// https://unsplash.com/photos/gRB4Euk4BYQ
// https://unsplash.com/photos/uB9TMm7R0So
// https://unsplash.com/photos/PpJhgsdc8ww
// https://unsplash.com/photos/ItphH2lGzuI
// https://unsplash.com/photos/OlyjFqrtPGo
// https://unsplash.com/photos/dbc9DGSJzKo

export interface ImagePair {
  realSourceUrl: string
  realUrl: string
  generatedSource: string
  generatedUrl: string
}

const IMAGE_PAIRS: ImagePair[] = [
  {
    realSourceUrl: "https://unsplash.com/photos/gRB4Euk4BYQ",
    realUrl: "/images/cc0633a2-4812-4e51-a070-b9a429233e30.jpg",
    generatedSource: "https://www.midjourney.com/app/search/?jobId=8492e81c-aabd-4ea8-a269-9b9696b5faaa",
    generatedUrl: "/images/80a5a7b1-4666-46be-9dd0-a0bbaca2070d.png"
  },
  {
    realSourceUrl: "https://unsplash.com/photos/rfj_wOYQkus",
    realUrl: "/images/22b1791d-59c9-43c6-bbcb-a82ccddcba50.jpg",
    generatedSource: "https://www.midjourney.com/app/jobs/30b0077d-0ba3-4ac5-838b-4b15a2d09e2a/",
    generatedUrl: "/images/aa0a2108-1081-4bfd-a16f-e081e8cdf098.png"
  },
  {
    realSourceUrl: "https://unsplash.com/photos/OlyjFqrtPGo",
    realUrl: "/images/39d952d4-ec85-41cc-b4f3-5f333b054156.jpg",
    generatedSource: "https://www.midjourney.com/app/jobs/99308684-b0e9-4c7d-aac1-44843ac8a062/",
    generatedUrl: "/images/75a40390-846d-4ce8-9f79-1589fd2e9185.png"
  },
  {
    realSourceUrl: "",
    realUrl: "/images/",
    generatedSource: "",
    generatedUrl: "/images/"
  },
]

export default IMAGE_PAIRS