
const relatedProductsHook = (nodes,location) => {
  console.log("nodes",nodes);
  console.log("location",location);
  let selectedProduct = null;
  let arrPagesIdLarger = [];
  let arrPagesIdLess = [];
  const pages = nodes.filter((item) => {
    console.log(`/${item?.url}/`, `${location?.pathname}`,`/${item?.url}/`,`${location?.pathname}`)
    console.log(`/${item?.url}/`, `${location?.pathname}`,`/${item?.url}/`,`${location?.pathname}/`)
    if(`/${item?.url}/` !== `${location?.pathname}/` && `/${item?.url}/` !== `${location?.pathname}` &&
      `/${item?.url}/` !== `${location?.pathname}/` && `/${item?.url}/` !== `${location?.pathname}/`
    ) {
      item.id = parseInt(item?.id);
      return item
    }else {
      selectedProduct = item;
      selectedProduct.id = parseInt(selectedProduct?.id);
    }
  })

  pages.map((item) => {
    if(item?.id > selectedProduct?.id) {
      arrPagesIdLarger.push(item);
    } else {
      arrPagesIdLess.push(item)
    }
  })
  if(!!arrPagesIdLess) {
    arrPagesIdLarger = arrPagesIdLarger.concat(arrPagesIdLess);
  }

  console.log("arrPagesIdLarger",arrPagesIdLarger);
  return arrPagesIdLarger
}

export default relatedProductsHook