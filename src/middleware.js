
export { auth as middleware } from "./auth"
// bu satır authentication yapısının tüm uygulamada devreye alınamsını sağlar


// eğer istenirse config tanımlanarak bu kapsama alanı belirlenebilir
export const config = {
    // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],

    matcher:["/dashboard/:path*","/login"]
  }