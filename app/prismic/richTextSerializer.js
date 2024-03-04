export default {
	heading1: ({ children }) => `<h1 class="header1">${children}</h1>`,
	heading2: ({ children }) => `<h2 class="header2">${children}</h2>`,
	heading3: ({ children }) => `<h3 class="header3">${children}</h3>`,
	heading4: ({ children }) => `<h4 class="header4">${children}</h4>`,
	heading5: ({ children }) => `<h5 class="header6">${children}</h5>`,
	heading6: ({ children }) => `<h6 class="header6">${children}</h6>`,
	// paragraph: ({ children }) => `<p>${children}</p>`,
	// preformatted: ({ node }) => `<pre>${JSON.stringify(node.text)}</pre>`,
	// strong: ({ children }) => `<strong>${children}</strong>`,
	// em: ({ children }) => `<em>${children}</em>`,
	// listItem: ({ children }) => `<li>${children}</li>`,
	// oListItem: ({ children }) => `<li>${children}</li>`,
	// list: ({ children }) => `<ul>${children}</ul>`,
	// oList: ({ children }) => `<ol>${children}</ol>`,
	image: ({ node }) => {
		const linkUrl = node.linkTo ? node.linkTo.url : null
		const linkTarget =
			node.linkTo && node.linkTo.target
				? `target="${node.linkTo.target}" rel="noopener"`
				: ''
		const wrapperClassList = [node.label || '', 'block-img']
		const img = `<img src="${node.url}" class="img-fluid skew" defer alt="${node.alt ? node.alt : ''
			}" copyright="${node.copyright ? node.copyright : ''}" />`

		return `
        <figure class="${wrapperClassList.join(' ')} defer center">
          ${linkUrl ? `<a href="${linkUrl}" ${linkTarget} >${img}</a>` : img}
          ${node.alt ? `<figcaption>${node.alt}</figcaption>` : ``}
        </figure>
      `
	},
	// embed: ({ node }) => `
	//       <div data-oembed="${node.oembed.embed_url}"
	//         data-oembed-type="${node.oembed.type}"
	//         data-oembed-provider="${node.oembed.provider_name}"
	//         ${label(node)}>
	//         ${node.oembed.html}
	//       </div>
	//     `,
	// hyperlink: ({ node, children }) => {
	//   const target = node.data.target
	//     ? `target="${node.data.target}" rel="noopener"`
	//     : ''
	//   const url = linkResolver(node.data)
	//   return `<a ${target} href="${url}">${children}</a>`
	// },
	// label: ({ node, children }) => {
	//   return `<span class="${node.data.label}">${children}</span>`
	// },
	// span: ({ text }) => (text ? text : ''),
}
