import React, { useState } from 'react';
import { ThemeProvider, LayoutProvider } from 'elemental-react';
import Gun from 'gun/gun';

import useWindowViewport from '../../hooks/use-window-viewport';
import adapter from '../../extensions/async-storage-adapter';
import { GunProvider } from '../../contexts/GunProvider';

import 'gun/lib/open';
import 'gun/sea';

let WebFont;

try {
  WebFont = require('webfontloader');
} catch (err) {}

if (typeof window !== 'undefined' && WebFont) {
  WebFont.load({
    google: {
      families: ['IBM Plex Sans', 'IBM Plex Serif', 'IBM Plex Mono']
    },
});
}


Gun.on('create', function(db) {
	this.to.next(db);
	const pluginInterop = function(middleware) {
		return function(request) {
			this.to.next(request);
			return middleware(request, db);
		};
	}

	// Register the adapter
	db.on('get', pluginInterop(adapter.read));
	db.on('put', pluginInterop(adapter.write));
});


const fontSizes = [96, 60, 48, 34, 24, 20, 16, 14];
const [h1, h2, h3, h4, h5, h6] = fontSizes;

const roundTo = function(target, num) {
  var resto = target % num;
  if (resto <= num / 2) {
    return target - resto;
  } else {
    return target + num - resto;
  }
};

const lineHeights = [h1, h2, h3, h4, h5, h6].map(n =>
  roundTo(Math.abs(n * 1.15), 4),
);

fontSizes.h1 = h1;


const getBreakpoint = (w) => {
  const width = Number(w);

  if (width <= 768) {
    return 0;
  }
  if (width <= 1024) {
    return 1;
  }

  return 2;
};

const Wrapper = ({ children }) => {
  const { width } = useWindowViewport();
  const breakpoint = getBreakpoint(width);

  return (
    <LayoutProvider breakpoint={breakpoint}>
      {children}
    </LayoutProvider>
  );
}

function getGunInstance() {
  const gun = new Gun();
  const user = gun.user && gun.user();

  return { gun, user };
}

const gunInstance = getGunInstance();


export default ({ element }) => {
  return (
    <ThemeProvider
      theme={{
        breakpoints: ['768px', '1024px'],
        fontSizes,
        lineHeights,
        fontFamily: {
          primary: 'Helvetica',
          secondary: 'Helvetica',
        },
      }}
    >
      <GunProvider gun={gunInstance.gun} user={gunInstance.user}>
        <Wrapper>
          {element}
        </Wrapper>
      </GunProvider>
    </ThemeProvider>
  );
};
