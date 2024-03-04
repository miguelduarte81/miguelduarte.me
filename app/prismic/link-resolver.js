export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.type === 'home') {
    return '/'
  }

  if (doc.type === 'pages') {
    return '/' + doc.uid
  }

  if (doc.type === 'services') {
    return '/services/' + doc.uid
  }

  if (doc.type === 'posts') {
    return '/insights/' + doc.uid
  }

  return '/not-found'
}
