"use client";

import {GoogleGeminiEffectDemo} from '../component/GoogleGeminiEffectDemo';
import {CardHoverEffectDemo} from '../component/CardHoverEffectDemo';
import WireAndCable from './Home/WireAndCable';
import { Review } from "./Home/Review";


export default function Home() {
  return (
   <>
<GoogleGeminiEffectDemo/>
<CardHoverEffectDemo/>
<WireAndCable/>
<Review/>

   </>
  );
}
