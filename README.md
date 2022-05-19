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
npm i next react react-dom framework7 framework7-react
</pre>

Copy:
<pre>
"scripts": {
  "dev": "next dev",
  "build": "next build && next export -o www",
  "start": "next start",
  "lint": "next lint"
}
</pre>

Build:
<pre>
npm run build-www
</pre>


Rename "/_next/" to "/next/" for js script & css style files

Build cordova platform