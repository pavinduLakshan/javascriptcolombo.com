/**
 * MIT License
 *
 * Copyright (c) 2024, Brion Mario
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import {ReactElement} from 'react';
import Footer from '@/components/Footer';

const navItems: {
  name: string;
  route: string;
  title: string;
}[] = [
  {
    name: 'upcoming',
    route: '/',
    title: 'Upcoming',
  },
  {
    name: 'sponsors',
    route: '/about',
    title: 'Sponsors',
  },
];

// eslint-disable-next-line react/function-component-definition
export default function Home(): ReactElement {
  return (
    <div dir="ltr">
      <NavBar items={[]} />
      <div className="mx-auto flex">
        <div className="overflow-x-hidden w-full">
          <main className="relative">
            <Hero />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
