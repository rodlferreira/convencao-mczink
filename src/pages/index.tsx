import React from 'react';
import { Categories } from '../components/Categories';
import { Header } from '../components/Header';
import { Live } from '../components/Live';
import { SeeMore } from '../components/SeeMore';



export default function Home() {
  return (
    <>
      <Header />
      <SeeMore />
      <Categories />
      <Live />
    </>
  );
}
