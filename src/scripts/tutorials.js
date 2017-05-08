const tutorials = require('../tutorials.json')

function getItems (query) {
  return query
    ? tutorials.filter(item => {
      return (item.packages.map(hash).indexOf(hash(query)) > -1) || (item['dcos_version'].indexOf(query) > -1)
    })
    : tutorials
}

function hash (name) {
  return name.replace(/\s+/g, '-').toLowerCase()
}

function getQuery () {
  const query = window.location.hash.split('#')
  const q = query[1]

  return q // string or undefined
}

function clean () {
  $(".demos-cards").empty()
}

function getTutorialItem(demo) {

  const contentClass = demo.featured ? 'px2 lg-col-6 col-6 xs-col-12' : 'pt2';
  const imageClass = demo.featured ? 'lg-col-6 col-6 xs-col-12 pr2' : '';
  let media = demo.image ? `<div class="${imageClass}"><img src="${ demo.image }" alt=""></div>` : ``;
  media = demo.youtube_id ? `<div class="${imageClass}"><div class="youtube"><iframe width="480" height="220" src="https://www.youtube.com/embed/${ demo.youtube_id }" frameborder="0" allowfullscreen></iframe></div></div>` : media;
  const classNames = demo.featured ? 'lg-col-12 col-12 xs-col-12 flex flex-wrap mb3' : 'lg-col-6 col-6 xs-col-12 bg-white'

  return `
    <div class="${classNames} xs-left px2 pb3 left-align has-footer">
      ${media}
      <div class="${contentClass}">
        <h3 class="mt1 mb1">${demo.title}</h3>
        <p class="block mt1">${demo.description}</p>
        <div class="specs flex flex-wrap">
          <div class="col-4 mb1"><p class="my0"><strong>Version</strong></p></div>
          <div class="col-8 mb1"><p class="my0">${demo.dcos_version.join(', ').toString()}</p></div>
          <div class="col-4 mb1"><p class="my0"><strong>Difficulty</strong></p></div>
          <div class="col-8 mb1"><p class="my0">${demo.difficulty}</p></div>
          <div class="col-4 mb1"><p class="my0"><strong>Links</strong></p></div>
          <div class="col-8 mb1"><p class="my0">${$.map(demo.callouts, (calloutUrl, name) => `<a class="block m0" href="${calloutUrl}">&bull; Tutorial ${name}</a>`).join(' ').toString()}</p></div>
        </div>
      </div>
    </div>

    `;
}

function render (items) {

  const featured_items = items.filter(function(value) {
    return value.featured == true
  })

  const other_items = items.filter(function(value) {
    return value.featured == false
  })

  other_items.forEach(demo => {
    const item = getTutorialItem(demo);
    $(".tutorial-cards").append(item);
  });

  if (featured_items.length) {
    const featured_item = getTutorialItem(featured_items[0]);
    $(".tutorial-cards-featured").prepend(featured_item);
  }
}

function main () {
  const query = getQuery()
  const items = getItems(query)
  render(items)

  console.log(items);

  // if(query) {
  //   $(".demos-cards").prepend(
  //     `
  //     <div class="flex flex-wrap justify-start items-center col-12 mb2">
  //       <h3 class="px1 col-8 border-box">Showing demos matching: ${query}</h3>
  //       <span class="px1 col-4 right-align border-box">
  //         <a href="${document.location.href.replace(location.hash , '' )}">Reset filter</a>
  //       </span>
  //     </div>
  //     `
  //   )
  // }
}

/*****************
  This is used to listen to when people filter tags
*****************/
// window.onhashchange = function () {
//   const query = getQuery()

//   if (query) {
//     clean()
//     main()
//   }
// }

$(document).ready(main)
