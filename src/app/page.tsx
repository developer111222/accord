"use client";

import {GoogleGeminiEffectDemo} from '../component/GoogleGeminiEffectDemo';
import {CardHoverEffectDemo} from '../component/CardHoverEffectDemo';
import WireAndCable from './Home/WireAndCable';
import { Review } from "./Home/Review";
import ProductLink from './Home/ProductLink';


export default function Home() {
  return (
   <>
<GoogleGeminiEffectDemo/>
<CardHoverEffectDemo/>
<ProductLink/>
<WireAndCable/>
<Review/>

   </>
  );
}
