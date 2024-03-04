// import * as prismic from '@prismicio/client'

// export default defineEventHandler(async () => {

// 	const repoName = 'amardesign2024'
// 	const client = prismic.createClient(repoName)

// 	const Home = await client.getSingle('home')
// 	const allPages = await client.getAllByType('pages')
// 	const allPosts = await client.getAllByType('posts')
// 	const allServices = await client.getAllByType('services')

// 	const urls = [];

// 	/* HOME */
// 	urls.push({
// 		loc: `/`,
// 		lastmod: new Date(Home.last_publication_date),
// 		changefreq: 'daily',
// 		priority: 1,
// 		videos: [
// 			{
// 				title: 'AMAR Design Showreel',
// 				thumbnail_loc: 'https://i.vimeocdn.com/video/1751184111-eb5f4c910732c34f91adb1ca58e226b0e789114cbfa0f2ab9ca95e8b4e31c6a5-d_',
// 				content_loc: 'https://vimeo.com/693211877',
// 			}
// 		]
// 	});

// 	/* PAGES */
// 	for (const page of allPages) {
// 		if (page.uid) {
// 			if (page.uid == 'insights') {
// 				urls.push({
// 					loc: `/${page.uid}`,
// 					lastmod: new Date(page.last_publication_date),
// 					changefreq: 'daily',
// 					priority: 1,
// 				});
// 			} else {
// 				urls.push({
// 					loc: `/${page.uid}`,
// 					lastmod: new Date(page.last_publication_date),
// 					changefreq: 'monthly',
// 					priority: .7,
// 				});

// 			}
// 		}
// 	}

// 	/* SERVICES */
// 	for (const service of allServices) {
// 		if (service.uid) {
// 			urls.push({
// 				loc: `/services/${service.uid}`,
// 				lastmod: new Date(service.last_publication_date),
// 				changefreq: 'monthly',
// 				priority: 0.8,
// 			});
// 		}
// 	}

// 	/* BLOGS */
// 	for (const post of allPosts) {

// 		const imagesURLs = []
// 		const allImages = post.data.content.filter(block => block.type == 'image')

// 		for (const image of allImages) {
// 			imagesURLs.push({
// 				loc: image.url,
// 				title: image.alt,
// 				caption: image.alt
// 			})
// 		}

// 		if (post.uid) {
// 			urls.push({
// 				loc: `/insights/${post.uid}`,
// 				lastmod: new Date(post.last_publication_date),
// 				changefreq: 'weekly',
// 				priority: 0.9,
// 				images: imagesURLs
// 			});
// 		}
// 	}

// 	return urls;
// })
