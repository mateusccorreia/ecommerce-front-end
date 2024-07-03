"use client";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #222;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link href={"/"}>Ecommerce</Link>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Todos os produtos</Link>
        <Link href={"/categories"}>Categorias</Link>
        <Link href={"/account"}>Minha conta</Link>
        <Link href={"/cart"}>Carrinho (0)</Link>
      </nav>
    </StyledHeader>
  );
}
