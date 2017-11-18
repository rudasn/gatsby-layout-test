const path = require('path')

exports.createLayouts = ({ boundActionCreators }) => {
    const { createLayout } = boundActionCreators

    const component = path.resolve('src/layouts/index.js')
    const layouts = [ 'one', 'two' ].map(name => ({
        id: `layout-${ name }`,
        component,
        context: {
            name: `layout ${ name }`,
        }
    }))

    console.warn('createLayouts', layouts)

    layouts.map(l => createLayout(l))
}

exports.createPages = ({ boundActionCreators }) => {
    const { createPage } = boundActionCreators

    const component = path.resolve('src/pages/index.js')
    const pages = [ 'one', 'two' ].map(name => ({
        id: `page-${ name }`,
        path: `/${ name }`,
        component,
        layout: `layout-${ name }`,
        context: {
            name: `page ${ name }`,
        }
    }))

    console.warn('createPages', pages)

    pages.map(p => createPage(p))

}
