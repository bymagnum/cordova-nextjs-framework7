# Install cordova + nextjs + framework7

Cordova:
<pre> 
npm install -g cordova
</pre>

Create cordova app:
<pre>
cordova create cordova-nextjs-framework7 com.cordova.nextjs.framework7
</pre>

And:
<pre>
cd cordova-nextjs-framework7
</pre>

Installation:
<pre> 
npm i next react react-dom framework7 framework7-react next-cordova-static
</pre>

Copy:
<pre>
"scripts": {
  "dev": "next dev",
  "build": "next build && next export -o www",
  "start": "next start",
  "lint": "next lint",
  "android:start": "cordova run android",
  "build:cordova": "next-cordova-static"
}
</pre>


Build cordova platform:
<pre>
npm run android:start
</pre>