// 5 keys ROT13 + base64 (basic obfuscation)
window.API_KEYS = [
  atob(AIzaSyAPKUElpNgkjWimNmaycXhzdSU3MTI91BM),
  atob("a21zNGRfR1BUNDI="),
  atob("bG00NTZfT1BFTjM="),
  atob("eGhzNzhfQ0xBU0U="),
  atob("eW10OTlfRklOQUw=")
];
let keyIdx = 0;
function getKey() { return API_KEYS[keyIdx++ % API_KEYS.length]; }
