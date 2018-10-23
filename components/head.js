import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = 'Nomad Project'
const defaultOGURL = 'https://nomad-project.co.uk'
const defaultOGImage = 'https://nomad-project.co.uk/static/img/nomad-og.jpg'
const gaid = 'UA-126420986-1';

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<script async src={`https://www.googletagmanager.com/gtag/js?id=${gaid}`}
		/>
		<script
			dangerouslySetInnerHTML={{
				__html: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${gaid}');
			`}}
		/>
		<title>{props.title || ''}</title>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		{/*<link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
		<link rel="apple-touch-icon" href="/static/touch-icon.png" /> 
		<link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />*/}
		<link rel="icon" href="/static/favicon.ico" />
		<link rel="stylesheet" type="text/css" href="https://unpkg.com/tachyons/css/tachyons.min.css" />
		<link rel="stylesheet" type="text/css" href="/static/css/styles.css" />
		<link href="https://fonts.googleapis.com/css?family=Fira+Sans" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css?family=Merriweather" rel="stylesheet" />
		<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta property="og:title" content={props.title || ''} />
		<meta property="og:description" content={props.description || defaultDescription} />
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />

		{ props.children }

	</NextHead>
)

export default Head;
