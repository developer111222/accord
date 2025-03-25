"use client";

import {GoogleGeminiEffectDemo} from '../component/GoogleGeminiEffectDemo';
import {CardHoverEffectDemo} from '../component/CardHoverEffectDemo';
import WireAndCable from './Home/WireAndCable';
import { Review } from "./Home/Review";
import ProductLink from './Home/ProductLink';
import Page from './product/page';
import Certificate from './Home/Certificate';



export default function Home() {
  return (
   <>
<GoogleGeminiEffectDemo/>
<CardHoverEffectDemo/>
<Certificate />
<Page/>
{/* <ProductLink/> */}
<WireAndCable/>
<Review/>

   </>
  );
}
