"use client";
import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import menuItems from "./menu.json"
import Link from 'next/link'
import Image from 'next/image';
import { useSession } from 'next-auth/react';

const Header = () => {

  const {data:session}=useSession();


  return (
    <Navbar expand="lg" className="bg-dark" data-bs-theme="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/" as={Link}>
          <Image src="/images/logo.png" alt='logo' width={272} height={43}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menuItems.map((item)=>(
              <Nav.Link key={item.id} href={item.url} as={Link}>{item.title}</Nav.Link>
            ))}
            
            
            
          </Nav>
        </Navbar.Collapse>

        {session?.user ? (
                    <Link href="/dashboard">Dashboard</Link>
                ) : (
                    <Link href="/api/auth/signin">Login</Link>
                )}
        
      </Container>
    </Navbar>
  )
}

export default Header