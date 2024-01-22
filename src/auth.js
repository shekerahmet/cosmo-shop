import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { redirect } from "next/navigation";

const config = {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("credentials:",credentials)
        const res = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        
        if (!res.ok) return null;
        const user = await res.json();
        return user;
      },
    }),
    GitHub,
    Google,
  ],
  callbacks: {
    //bu callback mutlaka tanımlanmalı
    //middleware içinde aktif hale getirilen route lara her girişte çalışır eğer bu callback true dönerse route içine girilir yoksa sign in sayfasına gidilir
    authorized({ request, auth }) {
      const {pathname, searchParams}=request.nextUrl;

      const isUserLoggedIn= !!auth?.user;
      const isUserInLoginPage= pathname==="/login"

      if(isUserLoggedIn && isUserInLoginPage){
        const callbackUrl= searchParams.get("callbackUrl")
        const url= new URL(callbackUrl || "/dasboard", request.nextUrl)
        return Response.redirect(url)
      }
      
      return isUserLoggedIn
    },
  },
  pages:{
    signIn:"/login"
  }
};

//oluşturulan config nesnesine göre tüm alt yapıyı hazırlayan nextauth methodudur
export const { handlers, auth, signIn, signOut } = NextAuth(config);
