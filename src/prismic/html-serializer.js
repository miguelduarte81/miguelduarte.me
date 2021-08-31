/**
 * To learn more about HTML Serializer check out the Prismic documentation
 * https://prismic.io/docs/vuejs/beyond-the-api/html-serializer
 */

import prismicDOM from 'prismic-dom'
import linkResolver from './link-resolver'

const Elements = prismicDOM.RichText.Elements

export default function (type, element, content) {
  // Generate links to Prismic Documents as <router-link> components
  // Present by default, it is recommended to keep this
  
  if (type === Elements.hyperlink) {
    let result = ''
    const url = prismicDOM.Link.url(element.data, linkResolver)

    if (element.data.link_type === 'Document') {
      result = `<g-link to="${url}">${content}</g-link>`
    } else {
      const target = element.data.target ? `target="'${element.data.target}'" rel="noopener"` : ''
      result = `<a href="${url}" ${target}>${content}</a>`
    }
    return result
  }

  // If the image is also a link to a Prismic Document, it will return a <router-link> component
  // Present by default, it is recommended to keep this
  
  if (type === Elements.image) {
    let result = `<img src="${element.url}" alt="${element.alt || ''}" copyright="${element.copyright || ''}" class="img-fluid">`

    if (element.linkTo) {
      const url = prismicDOM.Link.url(element.linkTo, linkResolver)

      if (element.linkTo.link_type === 'Document') {
        result = `<g-link to="${url}">${result}</g-link>`
      } else {
        const target = element.linkTo.target ? `target="${element.linkTo.target}" rel="noopener"` : ''
        result = `<a href="${url}" ${target}>${result}</a>`
      }
    }
    const wrapperClassList = [element.label || '', 'block-img']
    result = `<p class="${wrapperClassList.join(' ')}">${result}</p>`
    return result
  }

  // Formatting Headings
  switch (type) {
    case Elements.heading1:
      return `<h1 class="main-title">${element.text}</h1>`;

    case Elements.heading2:
      return `<h2 class="title">${element.text}</h2>`;

    case Elements.heading3:
      return `<h3 class="sub-title">${element.text}</h3>`;

    case Elements.heading4:
      return `<h4 class="small-title">${element.text}</h4>`;

    case Elements.heading5:
      return `<h5 class="sub-title">${element.text}</h5>`;
  }


  // Return null to stick with the default behavior for everything else
  return null
}
